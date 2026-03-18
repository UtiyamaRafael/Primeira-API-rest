// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// 5. Criar primeiro endpoint
app.get('/', (req, res) => {
    res.json({
        mensagem: '🎉 Minha primeira API funcionando!',
        status: 'sucesso',
        timestamp: new Date().toISOString()
    });
});

// 6. Endpoint de informações
app.get('/me', (req, res) => {
    res.json({
        nome: 'Rafael Utiyama',
        curso: 'Ciencia da Computação',
        hobbies: ["programar", "jogar", "ler"],
        linguagens: ["JavaScript", "Python", "java", "C++"]
    });
});

app.get('/data', (req, res) => {
    res.json({
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    })
});

app.get('/random', (req, res) => {
    res.json({
        numeroAleatorio: Math.floor(Math.random() * 100) + 1
    })
});


// 7. Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
 