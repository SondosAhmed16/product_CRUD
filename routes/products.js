import { Router } from "express";
import * as productController from "../controllers/productControllers.js";

const router = Router();

router.get("/", productController.list);
router.get("/new", productController.newForm);
router.post("/", productController.create);
router.get("/:id", productController.show);
router.get("/:id/edit", productController.editForm);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

export default router;
