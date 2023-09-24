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

router.get("/blogs", async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }

  //res.send({ message: "blog get all page " });
});

router.get("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog get one page " });
});
router.post("/blogs", async (req, res, next) => {
  res.send({ message: "blog post page" });
});

router.patch("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog patch page " });
});

router.delete("/blogs/:id", async (req, res, next) => {
  res.send({ message: "blog delete page " });
});

module.exports = router;
