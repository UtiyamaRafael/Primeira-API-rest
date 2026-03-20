// 1. Importar Express
const express = require('express');

// 2. Criar aplicação
const app = express();

// 3. Definir porta
const PORT = 3000;

// 4. Middleware para JSON
app.use(express.json());

// 5. Endpoint inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: 'Biblioteca virtual de livros',
    });
});

// Lista de livros
const livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", nota: 9.2 },
  { id: 2, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, genero: "Fantasia", nota: 9.8 },
  { id: 3, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", ano: 1997, genero: "Fantasia", nota: 9.5 },
  { id: 4, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Distopia", nota: 9.4 },
  { id: 5, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943, genero: "Fábula", nota: 9.3 },
  { id: 6, titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945, genero: "Satira", nota: 9.1 },
  { id: 7, titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967, genero: "Realismo Mágico", nota: 9.6 },
  { id: 8, titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, genero: "Fantasia", nota: 9.4 },
  { id: 9, titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005, genero: "Drama", nota: 9.2 },
  { id: 10, titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", ano: 2005, genero: "Fantasia", nota: 9.0 }
];

// GET com filtro, ordenação e paginação
app.get('/api/itens', (req, res) => {
    let { genero, ordenar, pagina, limite } = req.query;

    let resultado = [...livros];

    if (genero) {
        resultado = resultado.filter(
            i => i.genero.toLowerCase() === genero.toLowerCase()
        );
    }

    if (ordenar === 'titulo') {
        resultado.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    if (ordenar === 'nota') {
        resultado.sort((a, b) => b.nota - a.nota);
    }

    if (pagina && limite) {
        pagina = parseInt(pagina);
        limite = parseInt(limite);

        const inicio = (pagina - 1) * limite;
        const fim = inicio + limite;

        resultado = resultado.slice(inicio, fim);
    }

    res.json(resultado);
});

// GET por ID
app.get('/api/itens/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const item = livros.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ erro: "Item não encontrado" });
    }

    res.json(item);
});

// POST - criar novo livro
app.post('/api/itens', (req, res) => {
    const { titulo, autor, ano, genero, nota } = req.body;

    // Validações
    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ erro: "Título inválido" });
    }

    if (!autor || typeof autor !== 'string') {
        return res.status(400).json({ erro: "Autor inválido" });
    }

    if (!ano || typeof ano !== 'number') {
        return res.status(400).json({ erro: "Ano inválido" });
    }

    if (!genero || typeof genero !== 'string') {
        return res.status(400).json({ erro: "Gênero inválido" });
    }

    if (nota === undefined || typeof nota !== 'number' || nota < 0 || nota > 10) {
        return res.status(400).json({ erro: "Nota deve ser entre 0 e 10" });
    }

    const novolivro = {
        id: livros.length > 0 ? Math.max(...livros.map(l => l.id)) + 1 : 1,
        titulo,
        autor,
        ano,
        genero,
        nota
    };

    livros.push(novolivro);

    res.status(201).json(novolivro);
});

// 🚀 Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});