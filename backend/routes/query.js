const router = require("express").Router();
const pool = require("../db/postgres");

router.post("/execute", async (req, res) => {

  const { query } = req.body;

  try {

    const result = await pool.query(query);

    res.json(result.rows);

  } catch (err) {

    res.status(400).json({
      error: err.message
    });

  }

});

module.exports = router;