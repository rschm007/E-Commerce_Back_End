const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
  // find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
try {
  const categoryData = await Category.findAll();
  res.status(200).json(categoryData);
} catch (err) {
  res.status(500).json(err);
}
});

// GET a single category
  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
});

// CREATE a category
router.post('/', async (req, res) => {
  // create a new category
});

// UPDATE a category
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

// DELETE all categories
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
