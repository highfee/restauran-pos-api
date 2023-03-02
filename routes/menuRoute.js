import express from "express";
import {
  createMenu,
  editMenu,
  getAllMenu,
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getAllMenu);
router.post("/create", createMenu);
router.put("/edit/:id", editMenu);

export default router;
