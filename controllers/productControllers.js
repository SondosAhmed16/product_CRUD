import * as productService from "../services/productServices.js";

export const list = (req, res) => {
  const products = productService.findAll();
  res.render("products/list", { title: "Products", products });
};

export const newForm = (req, res) => {
  res.render("products/new", { title: "New Product" });
};

export const create = (req, res) => {
  productService.create(req.body);
  res.redirect(303, "/products");
};

export const show = (req, res) => {
  const prod = productService.findById(Number(req.params.id));
  if (!prod) {
    return res.status(404).render("layout", {
      title: "Not Found",
      content: "Product Not Found!!",
    });
  }
  res.render("products/show", { title: "Product Details", product: prod });
};

export const editForm = (req, res) => {
  const prod = productService.findById(Number(req.params.id));
  if (!prod) {
    return res.status(404).render("layout", {
      title: "Not Found",
      content: "Product Not Found!!",
    });
  }
  res.render("products/edit", { title: "Edit Product", product: prod });
};

export const update = (req, res) => {
  productService.update(Number(req.params.id), req.body);
  res.redirect(303, "/products");
};

export const remove = (req, res) => {
  productService.remove(Number(req.params.id));
  res.redirect(303, "/products");
};
