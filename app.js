import express from "express";
import path from "path";
import methodOverride from "method-override";
import productRoutes from "./routes/products.js";

const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride("_method")); 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use("/products", productRoutes);
app.get("/", (req, res) => {
  res.redirect("/products");
});


app.use((req, res) => {
  res
    .status(404)
    .render("layout", { title: "Not Found", content: "Page not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
