import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import API from "../services/api";
import {
  FaEnvelope,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaSignOutAlt,
  FaEye,
  FaTrash,
  FaSearch,
  FaCalendarAlt,
  FaEdit,
} from "react-icons/fa";

import "./AdminDashboard.css";

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editMessage, setEditMessage] = useState(null);
  const [deleteMessageId, setDeleteMessageId] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await API.get("/contacts");
      setMessages(data.data || []);
    } catch (error) {
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };
  
  const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  window.location.href = "/";
  };

  const updateMessage = async () => {
  try {
    await API.put(`/contact/${editMessage.id}`, {
      name: editMessage.name,
      email: editMessage.email,
      subject: editMessage.subject,
      message: editMessage.message,
    });

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === editMessage.id
          ? editMessage
          : msg
      )
    );

    setEditMessage(null);

    toast.success("Message updated successfully");
  } catch (error) {
    toast.error("Update failed");
  }
  };

  const deleteMessage = async () => {
  try {
    await API.delete(`/contact/${deleteMessageId}`);

    setMessages((prev) =>
      prev.filter(
        (msg) => msg.id !== deleteMessageId
      )
    );

    setDeleteMessageId(null);

    toast.success("Message deleted successfully");
  } catch (error) {
    toast.error("Delete failed");
  }
  };

  const exportExcel = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/export/excel`,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.setAttribute(
      "download",
      "contact-messages.xlsx"
    );

    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("Excel downloaded");
  } catch (error) {
    toast.error("Excel export failed");
  }
};

const exportCSV = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/export/csv`,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.setAttribute(
      "download",
      "contact-messages.csv"
    );

    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("CSV downloaded");
  } catch (error) {
    toast.error("CSV export failed");
  }
};

const exportPDF = async () => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/export/pdf`,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;
    link.setAttribute(
      "download",
      "contact-messages.pdf"
    );

    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success("PDF downloaded");
  } catch (error) {
    toast.error("PDF export failed");
  }
};

  const filteredMessages = messages.filter((msg) => {
  const searchTerm = search.toLowerCase().trim();

  return (
    (msg.name || "")
      .toLowerCase()
      .includes(searchTerm) ||

    (msg.email || "")
      .toLowerCase()
      .includes(searchTerm) ||

    (msg.subject || "")
      .toLowerCase()
      .includes(searchTerm)
  );
});

  const todayMessages = messages.filter(
    (msg) =>
      new Date(msg.created_at).toDateString() ===
      new Date().toDateString()
  ).length;

  const weekMessages = messages.filter((msg) => {
    const diff =
      (new Date() - new Date(msg.created_at)) /
      (1000 * 60 * 60 * 24);

    return diff <= 7;
  }).length;

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading Messages...</h2>
      </div>
    );
  }

  return (
    <section className="dashboard-page">
      <div className="dashboard-container">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome Back, Madhan Raj 👋</p>
          </div>

          <button
  className="logout-btn"
  onClick={handleLogout}
>
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div>
              <span>Total Messages</span>
              <h2>{messages.length}</h2>
            </div>
            <FaEnvelope />
          </div>

          <div className="stat-card">
            <div>
              <span>Today's Messages</span>
              <h2>{todayMessages}</h2>
            </div>
            <FaCalendarAlt />
          </div>

          <div className="stat-card">
            <div>
              <span>This Week</span>
              <h2>{weekMessages}</h2>
            </div>
            <FaCalendarAlt />
          </div>
        </div>

        {/* Main Card */}
        <div className="main-card">

          <div className="card-header">
            <div>
              <h2>Contact Messages</h2>
              <p>Manage all incoming contact requests</p>
            </div>

            <div className="toolbar">

              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search by Name, Email or Subject..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button
  className="excel-btn"
  onClick={exportExcel}
>
  <FaFileExcel />
</button>

<button
  className="csv-btn"
  onClick={exportCSV}
>
  <FaFileCsv />
</button>

<button
  className="pdf-btn"
  onClick={exportPDF}
>
  <FaFilePdf />
</button>

            </div>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredMessages.map((msg) => (
                  <tr key={msg.id}>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td className="subject-cell">
                      {msg.subject}
                    </td>
                    <td>
  {new Date(
    msg.created_at
  ).toLocaleDateString("en-GB")}
</td>

                    <td>
                      <div className="actions">
  <button
    className="view-btn"
    onClick={() => setSelectedMessage(msg)}
  >
    <FaEye />
  </button>

  <button
    className="edit-btn"
    onClick={() => setEditMessage(msg)}
  >
    <FaEdit />
  </button>

  <button
    className="delete-btn"
    onClick={() =>
      setDeleteMessageId(msg.id)
    }
  >
    <FaTrash />
  </button>
</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredMessages.length === 0 && (
              <div className="empty-state">
                <div>📭</div>
                <h3>No Messages Found</h3>
                <p>
                  Contact submissions will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
      {selectedMessage && (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>Message Details</h2>

        <button
          onClick={() =>
            setSelectedMessage(null)
          }
        >
          ✕
        </button>
      </div>

      <p>
        <strong>Name:</strong>{" "}
        {selectedMessage.name}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {selectedMessage.email}
      </p>

      <p>
        <strong>Subject:</strong>{" "}
        {selectedMessage.subject}
      </p>

      <p>
  <strong>Date:</strong>{" "}
  {new Date(
    selectedMessage.created_at
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}
</p>

      <div className="message-box">
        {selectedMessage.message}
      </div>
    </div>
  </div>
)}

      {editMessage && (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal-header">
        <h2>Edit Message</h2>

        <button
          onClick={() => setEditMessage(null)}
        >
          ✕
        </button>
      </div>

      <input
        type="text"
        placeholder="Name"
        value={editMessage.name}
        onChange={(e) =>
          setEditMessage({
            ...editMessage,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={editMessage.email}
        onChange={(e) =>
          setEditMessage({
            ...editMessage,
            email: e.target.value,
          })
        }
      />

      <input
        type="text"
        placeholder="Subject"
        value={editMessage.subject}
        onChange={(e) =>
          setEditMessage({
            ...editMessage,
            subject: e.target.value,
          })
        }
      />

      <textarea
        rows="6"
        placeholder="Message"
        value={editMessage.message}
        onChange={(e) =>
          setEditMessage({
            ...editMessage,
            message: e.target.value,
          })
        }
      />

      <button
        className="update-btn"
        onClick={updateMessage}
      >
        Update Message
      </button>
    </div>
  </div>
)}

      {deleteMessageId && (
  <div className="modal-overlay">
    <div className="delete-modal">
      <h2>Delete Message?</h2>

      <p>
        This action cannot be undone.
      </p>

      <div className="delete-actions">
        <button
          className="cancel-btn"
          onClick={() =>
            setDeleteMessageId(null)
          }
        >
          Cancel
        </button>

        <button
          className="confirm-delete-btn"
          onClick={deleteMessage}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </section>
  );
}

export default AdminDashboard;