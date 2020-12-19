const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get("/", (req, res) => {
  Tag.findAll({
    // including its associated Product data
    include: {
       model: Product,
    },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET a single tag
router.get("/:id", (req, res) => {
  Tag.findByPk(req.params.id, {
    // including its associated Product
    include: {
      model: Product,
   },
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a tag
router.post("/", (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((tagData) => res.json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE a tag
router.put("/:id", (req, res) => {
  // update a tag by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((tagData) => {
      if (!tagData) {
        res.json(404).json({ message: "No Tag found with this id! " });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE tag by id
router.delete("/:id", (req, res) => {
  // delete a tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tagData) => {
      if (!tagData) {
        res.json(404).json({ message: "No Tag found with this id! " });
        return;
      }
      res.json(tagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
