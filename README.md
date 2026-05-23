SOBRE O PROJETO
 Nossa equipe desenvolveu este sistema com o objetivo prático de auxiliar os cidadãos no monitoramento e na compreensão do consumo de energia elétrica em suas residências. Sabemos que a conta de luz representa um impacto significativo no orçamento mensal das famílias, e muitas vezes é difícil identificar quais aparelhos são os verdadeiros responsáveis pelo aumento do valor.

 Por meio de uma interface simples, o sistema permite mapear a rotina da casa através do cadastramento de moradores e dos eletrodomésticos presentes em cada cômodo. A partir desses dados, a aplicação ajuda a calcular e visualizar os maiores focos de gasto, oferecendo insights e dicas de conscientização para que a família consiga mudar hábitos, otimizar o uso dos aparelhos e reduzir o valor da fatura no final do mês.

TECNOLOGIAS E ESTRUTURA DO BANCO DE DADOS
 Para garantir a consistência e a segurança das informações coletadas, escolhemos trabalhar com o sistema de gerenciamento de banco de dados SQL Server. Toda a inteligência de tabelas, chaves primárias, estrangeiras e relacionamentos foi cuidadosamente planejada para suportar a lógica do sistema.

O arquivo com o script de criação completo está armazenado na pasta /database do repositório e contempla a seguinte estrutura:
Cadastro de Usuários e Perfis: Armazena os dados dos moradores vinculados a uma determinada residência.
Mapeamento de Cômodos e Dispositivos: Registra os eletrodomésticos da casa, associando atributos essenciais como a potência em Watts e o tempo médio de uso diário para viabilizar o cálculo individualizado do consumo.

COMO EXECUTAR O BANCO DE DADOS LOCALMENTE
Para testar o projeto ou replicar a estrutura do banco de dados em seu ambiente local, siga o procedimento abaixo:
- Acesse a pasta /database neste repositório e faça o download do arquivo script_banco.sql.
- Abra o SQL Server Management Studio (SSMS) e conecte-se à sua instância local.
- Crie um novo banco de dados vazio utilizando o comando ou a interface gráfica, nomeando-o como consumo_residencial.
- Abra o arquivo script_banco.sql dentro do SSMS, garanta que o banco recém-criado está selecionado e execute o script. Isso criará todas as tabelas e relacionamentos automaticamente.

INTEGRANTES DO GRUPO
- Amanda martins frança RA: 252400
- Giovana Cardoso Araujo RA: 190225
- Gustavo da Encarnação Amaro RA: 252346
- Isabelle Silva Ribeiro RA: 251690
- Cleber Renato de Oliveira RA: 236493
