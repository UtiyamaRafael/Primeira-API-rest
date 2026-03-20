# 📄 API Biblioteca de Livros

API REST desenvolvida com Node.js e Express para gerenciar uma lista de livros.  
A API permite listar, buscar e criar livros, incluindo filtros, ordenação, paginação e validações.

---

# 🚀 Lista de Endpoints

| Método | URL              | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /api/itens       | Listar todos os livros     |
| GET    | /api/itens/:id   | Buscar livro por ID        |
| POST   | /api/itens       | Criar novo livro           |

---

# 🔹 1. GET /api/itens

### Listar todos

GET http://localhost:3000/api/itens

<img width="1920" height="1080" alt="Captura de Tela (6)" src="https://github.com/user-attachments/assets/7c2538c0-af60-473a-9b30-ed9e6045662c" />


### Filtrar por gênero

GET http://localhost:3000/api/itens?genero=romance

<img width="1920" height="1080" alt="Captura de Tela (7)" src="https://github.com/user-attachments/assets/b931d27b-b49d-432c-97f0-d5536704718c" />

### Ordenar por título

GET http://localhost:3000/api/itens?ordenar=titulo

<img width="1920" height="1080" alt="Captura de Tela (8)" src="https://github.com/user-attachments/assets/154637c9-bcd4-41b5-965a-ecb1c48462d6" />

### Ordenar por nota

GET http://localhost:3000/api/itens?ordenar=nota

<img width="1920" height="1080" alt="Captura de Tela (9)" src="https://github.com/user-attachments/assets/4e3cf2d0-25f6-43c3-8bef-ccc5ef28d9b7" />

### Paginação

GET http://localhost:3000/api/itens?pagina=1&limite=5

<img width="1920" height="1080" alt="Captura de Tela (10)" src="https://github.com/user-attachments/assets/d50e3f20-aa10-4ebb-bfe7-39cbda3e13ff" />


### Combinação completa

GET http://localhost:3000/api/itens?genero=fantasia&ordenar=nota&pagina=1&limite=2

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8f94429b-6920-47ee-9847-36e9ee9cb90e" />


# 🔹 2. POST /api/itens

### Criação

Header: Content-Type: application/json

Body: {
  "titulo": "Jogos Vorazes",
  "autor": "Suzanne Collins",
  "ano": 2008,
  "genero": "Distopia",
  "nota": 9.0
}

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1e2726f9-814c-4067-b2de-c047f35514ee" />

---

## 🔹 Funcionalidades

A API permite:
- Filtrar livros por gênero  
- Ordenar por título ou nota  
- Paginar resultados  

---

## Validações

- Todos os campos são obrigatórios (titulo, autor, ano, genero, nota)  
- Tipos corretos (texto e número)  
- Regras:
  - ano > 0  
  - nota entre 0 e 10  

---

## Tecnologias

- Node.js  
- Express  
- Postman  
