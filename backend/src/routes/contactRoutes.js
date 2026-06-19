const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createContact,
  getContacts,
  getDashboardStats,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Contact Form Submission
router.post("/contact", createContact);

/*
|--------------------------------------------------------------------------
| Protected Admin Routes
|--------------------------------------------------------------------------
*/

// Get All Contacts
router.get("/contacts", protect, getContacts);

// Dashboard Statistics
router.get("/dashboard/stats", protect, getDashboardStats);

// Update Contact Status
router.put("/contact/:id", protect, updateContact);

// Delete Contact
router.delete("/contact/:id", protect, deleteContact);

module.exports = router;