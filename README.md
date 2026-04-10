# 📄 API Biblioteca de Livros

API REST desenvolvida com Node.js e Express para gerenciar uma lista de livros.  
A API permite listagem de livros, busca por ID, criação de novos livros, atualização de livros, remoção de livros além de filtros por gênero, 
ordenação por título ou nota, paginação de resultados, validações de dados, tratamento de erros.

---

# 🚀 Lista de Endpoints

| Método | URL              | Descrição                  |
|--------|------------------|----------------------------|
| GET    | /api/itens       | Listar todos os livros     |
| GET    | /api/itens/:id   | Buscar livro por ID        |
| POST   | /api/itens       | Criar novo livro           |
| PUT    | /api/itens/:id   | Atualizar livro            |
| DELETE | /api/itens/:id   | Remover livro              |

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


# 🔹 3. PUT /api/itens

### Atualização

Header: Content-Type: application/json

{
  "titulo": "Novo título",
  "autor": "Novo autor",
  "ano": 2020,
  "genero": "Drama",
  "nota": 8.5
}

<img width="1908" height="987" alt="Captura de tela 2026-04-10 170752" src="https://github.com/user-attachments/assets/a82bff30-e14d-47f5-a1f9-940506bf8dcd" />


# 🔹 3. DELETE /api/itens/1

### Remover

<img width="1919" height="992" alt="image" src="https://github.com/user-attachments/assets/4e946dc7-84ba-4e6f-b106-1718180a2867" />

---

## Validações

📌 Todos os campos são obrigatórios:
- titulo  
- autor  
- ano  
- genero  
- nota  

📏 Regras aplicadas:
- titulo e autor → devem ser do tipo **string**  
- genero → deve ser do tipo **string**  
- ano → deve ser um **número maior que 0**  
- nota → deve ser um **número entre 0 e 10**  

⚠️ Observações:
- Dados inválidos retornam erro **400 (Bad Request)**  
- A API pode retornar um ou mais erros no formato:
```json
{
  "erros": ["Erro 1", "Erro 2"]
}
```
---

## Tecnologias

- Node.js  
- Express  
- Postman  
