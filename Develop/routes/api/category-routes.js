const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
Category.findAll({
  attributes: ["id", "category_name"],
  include: [
    {
      model: Product,
      attributes: ["id", "product_name", "stock", "price"],
    },
  ],
})
  .then((categoryData) => res.json(categoryData))
  .catch((err) => {
    res.status(500).json(err);
  });
});
router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["category_name", "id"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price"],
      },
    ],
  })
    .then((responseData) => {
      if (!responseData) {
        res.status(400).json(responseData);
      }else{
        res.json(responseData);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value

  Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((responseData) => {
      if (!responseData) {
        res.status(404).json("No category exists with entered id");
      } else {
        res.json(responseData);
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy(

    {
      where: {
        id: req.params.id,
      },
    }
  ).then((responseData) => {
    if (!responseData) {
      res.status(404).json("No id found");
    } else {
      res.json(responseData);
    }
  }).catch(err => {
    res.status(500).json(err);
  });
});

module.exports = router;
