const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Lista de livros
let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, genero: "Romance", nota: 9.2 },
  { id: 2, titulo: "1984", autor: "George Orwell", ano: 1949, genero: "Distopia", nota: 9.4 }
];

function validarLivro({ titulo, autor, ano, genero, nota }, parcial = false) {
    const erros = [];

    if (!parcial || titulo !== undefined) {
        if (!titulo || typeof titulo !== 'string') {
            erros.push("Título inválido");
        }
    }

    if (!parcial || autor !== undefined) {
        if (!autor || typeof autor !== 'string') {
            erros.push("Autor inválido");
        }
    }

    if (!parcial || ano !== undefined) {
        if (!ano || typeof ano !== 'number') {
            erros.push("Ano inválido");
        }
    }

    if (!parcial || genero !== undefined) {
        if (!genero || typeof genero !== 'string') {
            erros.push("Gênero inválido");
        }
    }

    if (!parcial || nota !== undefined) {
        if (nota === undefined || typeof nota !== 'number' || nota < 0 || nota > 10) {
            erros.push("Nota deve ser entre 0 e 10");
        }
    }

    return erros;
}

app.get('/api/itens', (req, res) => {
    res.json(livros);
});

app.get('/api/itens/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).json({ erro: "ID inválido" });
    }

    const livro = livros.find(l => l.id === id);

    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado" });
    }

    res.json(livro);
});

app.post('/api/itens', (req, res) => {
    try {
        const erros = validarLivro(req.body);

        if (erros.length > 0) {
            return res.status(400).json({ erros });
        }

        const { titulo, autor, ano, genero, nota } = req.body;

        const novo = {
            id: livros.length > 0 ? Math.max(...livros.map(l => l.id)) + 1 : 1,
            titulo,
            autor,
            ano,
            genero,
            nota
        };

        livros.push(novo);

        res.status(201).json(novo);

    } catch (err) {
        res.status(500).json({ erro: "Erro interno" });
    }
});

app.put('/api/itens/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID inválido" });
        }

        const index = livros.findIndex(l => l.id === id);

        if (index === -1) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }

        const erros = validarLivro(req.body);

        if (erros.length > 0) {
            return res.status(400).json({ erros });
        }

        const livroAtualizado = { id, ...req.body };

        livros[index] = livroAtualizado;

        res.json(livroAtualizado);

    } catch (err) {
        res.status(500).json({ erro: "Erro interno" });
    }
});

app.delete('/api/itens/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({ erro: "ID inválido" });
        }

        const index = livros.findIndex(l => l.id === id);

        if (index === -1) {
            return res.status(404).json({ erro: "Livro não encontrado" });
        }

        const removido = livros.splice(index, 1);

        res.json({
            mensagem: "Removido com sucesso",
            livro: removido[0]
        });

    } catch (err) {
        res.status(500).json({ erro: "Erro interno" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});