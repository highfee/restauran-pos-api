import { createError } from "../config/error.js";
import Menu from "../models/menuModel.js";

// get menu item
export const getAllMenu = async (req, res, next) => {
  const allMenu = await Menu.find();
  res.status(200).json(allMenu);
};

// create menu
export const createMenu = async (req, res, next) => {
  const { body } = req;
  const menuExist = await Menu.findOne({ name: body.name });
  if (menuExist) {
    return next(createError(401, "Menu already exist"));
  }

  const menu = new Menu(body);
  await menu.save();
  res.status(201).json(menu);
};

// edit menu
export const editMenu = async (req, res, next) => {
  const { body, params } = req;
  res.send(params.id);
};

// delete menu
export const deleteMenu = async (req, res, next) => {};

// search menu
export const searchMenu = async (req, res, next) => {};
