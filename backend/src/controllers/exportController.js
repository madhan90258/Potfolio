const supabase = require("../config/supabase");
const ExcelJS = require("exceljs");
const { Parser } = require("json2csv");
const PDFDocument = require("pdfkit");

/*
|--------------------------------------------------------------------------
| Export Excel
|--------------------------------------------------------------------------
*/
const exportExcel = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");

    worksheet.columns = [
      { header: "Name", key: "name", width: 25 },
      { header: "Email", key: "email", width: 30 },
      { header: "Subject", key: "subject", width: 30 },
      { header: "Message", key: "message", width: 50 },
      { header: "Status", key: "status", width: 15 },
      { header: "Created At", key: "created_at", width: 25 },
    ];

    data.forEach((contact) => {
      worksheet.addRow(contact);
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=contacts.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Export CSV
|--------------------------------------------------------------------------
*/
const exportCSV = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const parser = new Parser();
    const csv = parser.parse(data);

    res.header("Content-Type", "text/csv");

    res.attachment("contacts.csv");

    return res.send(csv);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/*
|--------------------------------------------------------------------------
| Export PDF
|--------------------------------------------------------------------------
*/
const exportPDF = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const doc = new PDFDocument({
      margin: 30,
      size: "A4",
    });

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=contacts.pdf"
    );

    doc.pipe(res);

    doc
      .fontSize(20)
      .text("Portfolio Contact Messages", {
        align: "center",
      });

    doc.moveDown();

    data.forEach((contact, index) => {
      doc
        .fontSize(14)
        .text(`Message #${index + 1}`, {
          underline: true,
        });

      doc.moveDown(0.5);

      doc.fontSize(12).text(`Name: ${contact.name}`);
      doc.text(`Email: ${contact.email}`);
      doc.text(`Subject: ${contact.subject}`);
      doc.text(`Status: ${contact.status}`);
      doc.text(`Created: ${contact.created_at}`);

      doc.moveDown(0.5);

      doc.text(`Message:`);
      doc.text(contact.message);

      doc.moveDown();

      doc
        .moveTo(30, doc.y)
        .lineTo(550, doc.y)
        .stroke();

      doc.moveDown();
    });

    doc.end();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  exportExcel,
  exportCSV,
  exportPDF,
};