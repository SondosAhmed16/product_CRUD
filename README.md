# Products CRUD App

A simple **Node.js + Express + Pug** application to manage products with full CRUD functionality (Create, Read, Update, Delete).

## 🚀 Features
- Add new products.
- List all products.
- View product details.
- Edit existing products.
- Delete products.
- Uses [Faker.js](https://fakerjs.dev/) to generate sample product data.

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- Pug (template engine)  
- Faker.js  
- Method-Override  
- Bootstrap 5 (for styling)  

## 📂 Project Structure
```
├── app.js
├── controllers/
│   └── productControllers.js
├── routes/
│   └── products.js
├── services/
│   └── product.js
├── views/
│   ├── layout.pug
│   └── products/
│       ├── list.pug
│       ├── new.pug
│       ├── edit.pug
│       └── show.pug
├── public/
│   └── styles.css
├── package.json
```

## ⚙️ Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/SondosAhmed16/product_CRUD.git
   cd product_CRUD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

## 📌 Notes
- Data is stored in memory (not persisted to a database).  
- Use `nodemon` for auto-restart during development.  
