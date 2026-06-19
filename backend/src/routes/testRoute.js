const express = require("express");
const router = express.Router();
const supabase = require("../config/supabase");

router.get("/test-db", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*");

    if (error) {
      return res.status(500).json(error);
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;