const supabase = require("../config/supabase");

/*
|--------------------------------------------------------------------------
| Create Contact
|--------------------------------------------------------------------------
*/

const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, Email and Message are required",
      });
    }

    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          email,
          subject,
          message,
          status: "New",
        },
      ])
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Get All Contacts
|--------------------------------------------------------------------------
*/

const getContacts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Dashboard Stats
|--------------------------------------------------------------------------
*/

const getDashboardStats = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*");

    if (error) {
      throw error;
    }

    const totalMessages = data.length;

    const newMessages = data.filter(
      (item) => item.status === "New"
    ).length;

    const readMessages = data.filter(
      (item) => item.status === "Read"
    ).length;

    const repliedMessages = data.filter(
      (item) => item.status === "Replied"
    ).length;

    res.status(200).json({
      success: true,
      stats: {
        totalMessages,
        newMessages,
        readMessages,
        repliedMessages,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Update Contact
|--------------------------------------------------------------------------
*/

const updateContact = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      email,
      subject,
      message,
      status,
    } = req.body;

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (email !== undefined) updateData.email = email;
    if (subject !== undefined) updateData.subject = subject;
    if (message !== undefined) updateData.message = message;
    if (status !== undefined) updateData.status = status;

    const { data, error } = await supabase
      .from("contacts")
      .update(updateData)
      .eq("id", id)
      .select();

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Delete Contact
|--------------------------------------------------------------------------
*/

const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  getDashboardStats,
  updateContact,
  deleteContact,
};