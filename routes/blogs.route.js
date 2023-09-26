const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//working with blog

//Get all blog
router.get("/", async (req, res, next) => {
  try {
    const blogs = await prisma.blog.findMany({});
    res.json(blogs);
  } catch (error) {
    next(error);
  }
});

//Get one blog
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleBlog = await prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
    res.json(singleBlog);
  } catch (error) {
    next(error);
  }
});

//Create blog
router.post("/", async (req, res, next) => {
  try {
    const blog = await prisma.blog.create({
      data: req.body,
    });
    res.json(blog);
  } catch (error) {}
});

//Update blog
router.patch("/:id", async (req, res, next) => {
  res.send({ message: "blog patch page " });
});

//delete Blog
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    deleteBlog = await prisma.blog.delete({
      where: {
        id: id,
      },
    });
    res.json(deleteBlog);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
