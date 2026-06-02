const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); 


const config = {
    user: 'Gustavo Amaro',     
    password: 'ddjkg1234',     
    server: 'localhost',              
    database: 'Statix',              
    options: {
        encrypt: false,
        trustServerCertificate: true 
    }
};


app.post('/api/usuarios', async (req, res) => {
    try {
       
        let pool = await sql.connect(config);
        const { nome, endereco, senha } = req.body;
        
       
        await pool.request()
            .input('nome', sql.VarChar, nome)
            .input('endereco', sql.VarChar, endereco)
            .input('senha', sql.VarChar, senha)
            .query('INSERT INTO Usuarios (Nome, Endereco, Senha) VALUES (@nome, @endereco, @senha)');
            
     
        res.status(201).json({ message: "Operador registrado no banco com sucesso!" });
    } catch (err) {
        console.error("Erro no Banco de Dados:", err.message);
        res.status(500).send("Erro interno no servidor: " + err.message);
    }
});

app.post('/api/dispositivos', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        const { aparelho, potencia, horas, dias } = req.body;
        
      
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


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`   SERVIDO DA STATIX ATIVO NA PORTA ${PORT}!`);
    console.log(`   Pronto para receber dados do index.html...`);
    console.log(`==================================================`);
});
