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

module.exports = router;
