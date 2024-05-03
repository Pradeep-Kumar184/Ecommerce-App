import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }
    const existingUser = await categoryModel.findOne({ name });
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exists",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    return res.status(201).send({
      success: true,
      message: "Category Created Successfully",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in create-category ",
      error,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Category updated Successfully",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error in update category",
      error,
    });
  }
};
export const getCategory = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    return res.status(200).send({
      success: true,
      message: "All Category List",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: true,
      message: "Error in getting category",
      error,
    });
  }
};
export const getSingleCategory = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    return res.status(200).send({
      success: true,
      message: "Get single category successfully",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while getting single-category",
      error,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while deleting category",
      error,
    });
  }
};
