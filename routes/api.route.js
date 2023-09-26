const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({});
  } catch (error) {
    next(error);
  }

  res.send({ message: "Ok api is working 🚀" });
});

//working with blog

//Get all blog
router.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});

//Get one blog
router.get("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog get one page " });
});

//Create blog
router.post("/blogs", async (req, res, next) => {
  try {
    const blog = await prisma.blog.create({
      data: req.body,
    });
    res.json(blog);
  } catch (error) {}
});

//Update blog
router.patch("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog patch page " });
});

//delete Blog
router.delete("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog delete page " });
});

module.exports = router;
