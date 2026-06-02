const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permite que o seu arquivo index.html envie dados para cá

// ==========================================
// CONFIGURAÇÃO DO SEU BANCO DE DADOS LOCAL
// ==========================================
const config = {
    user: 'seu_usuario_do_sql',       // ⚠️ Troque pelo seu usuário do SQL Server
    password: 'sua_senha_do_sql',     // ⚠️ Troque pela sua senha do SQL Server
    server: 'localhost',              // Mantém localhost se o banco estiver na sua máquina
    database: 'Statix',               // ⚠️ Coloque o nome exato do banco de dados que você criou
    options: {
        encrypt: false,
        trustServerCertificate: true  // Essencial para rodar localmente sem erro de certificado
    }
};

// ==========================================
// ROTA 1: SALVAR O USUÁRIO (MOMENTO DO LOGIN)
// ==========================================
app.post('/api/usuarios', async (req, res) => {
    try {
        // Conecta no SQL Server
        let pool = await sql.connect(config);
        const { nome, endereco, senha } = req.body;
        
        // Executa o comando SQL (Ajuste o nome das colunas caso estejam diferentes no seu script.sql)
        await pool.request()
            .input('nome', sql.VarChar, nome)
            .input('endereco', sql.VarChar, endereco)
            .input('senha', sql.VarChar, senha)
            .query('INSERT INTO Usuarios (Nome, Endereco, Senha) VALUES (@nome, @endereco, @senha)');
            
        // Responde ao site que deu tudo certo
        res.status(201).json({ message: "Operador registrado no banco com sucesso!" });
    } catch (err) {
        console.error("Erro no Banco de Dados:", err.message);
        res.status(500).send("Erro interno no servidor: " + err.message);
    }
});

// ==========================================
// ROTA 2: SALVAR UM ELETRODOMÉSTICO NA LISTA
// ==========================================
app.post('/api/dispositivos', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const { aparelho, potencia, horas, dias } = req.body;
        
        // Executa o comando SQL para inserir o dispositivo
        await pool.request()
            .input('nome', sql.VarChar, aparelho)
            .input('potencia', sql.Int, potencia)
            .input('horas', sql.Int, horas)
            .input('dias', sql.Int, dias)
            .query('INSERT INTO Dispositivos (Nome, Potencia, HorasUso, DiasUso) VALUES (@nome, @potencia, @horas, @dias)');
            
        res.status(201).json({ message: "Dispositivo salvo no banco de dados!" });
    } catch (err) {
        console.error("Erro no Banco de Dados:", err.message);
        res.status(500).send("Erro interno no servidor: " + err.message);
    }
});

// Inicializa o servidor backend na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`   SERVIDO DA STATIX ATIVO NA PORTA ${PORT}!`);
    console.log(`   Pronto para receber dados do index.html...`);
    console.log(`==================================================`);
});
