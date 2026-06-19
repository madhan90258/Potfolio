import { useState, useEffect } from "react";
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

function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [editMessage, setEditMessage] = useState(null);
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await API.get("/contacts");
      setMessages(data.data || []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await API.delete(`/contact/${id}`);

      setMessages((prev) =>
        prev.filter((msg) => msg.id !== id)
      );

      toast.success("Message deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
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
      console.error(error);
      toast.error("Update failed");
    }
  };

  const filteredMessages = messages.filter(
    (msg) =>
      msg.name.toLowerCase().includes(search.toLowerCase()) ||
      msg.email.toLowerCase().includes(search.toLowerCase()) ||
      msg.subject.toLowerCase().includes(search.toLowerCase())
  );
  const todayMessages = messages.filter((msg) => {
    const today = new Date();

    const date = new Date(msg.created_at);

    return (
      date.toDateString() ===
      today.toDateString()
    );
  }).length;

  const weekMessages = messages.filter((msg) => {
    const today = new Date();

    const messageDate = new Date(msg.created_at);

    const diffInDays =
      (today - messageDate) /
      (1000 * 60 * 60 * 24);

    return diffInDays <= 7;
  }).length;

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl font-semibold">
          Loading Messages...
        </div>
      </div>
    );
  }
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#050816] via-[#0f172a] to-[#020617] text-white flex justify-center items-start pt-40">
      <div className="w-full max-w-6xl px-10 lg:px-12 pb-10 mx-auto mt-[200px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-16 mb-20">
          <div>

            <h1 className="text-4xl lg:text-5xl font-bold text-yellow-400">
              Admin Dashboard
            </h1>

            <p className="text-gray-400 mt-2 text-lg">
              Welcome Back, Madhan Raj 👋
            </p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("admin");
              window.location.href = "/";
            }}
            className="
              mt-5 lg:mt-0
              flex items-center gap-2
              bg-red-500/10
              border border-red-500/20
              text-red-400
              px-5 py-3
              rounded-xl
              hover:bg-red-500
              hover:text-white
              transition-all
            "
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Card 1 */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-yellow-500/20
              rounded-3xl
              p-8
              min-h-[140px]
              shadow-lg
              hover:border-yellow-400/40
              hover:-translate-y-1
              transition-all
            "
          >
            <div className="flex justify-between items-center h-full">
              <div>
                <p className="text-gray-400 text-sm">
                  Total Messages
                </p>

                <h2 className="text-5xl font-bold text-yellow-400 mt-3">
                  {messages.length}
                </h2>
              </div>

              <FaEnvelope className="text-5xl text-yellow-400" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-yellow-500/20
              rounded-3xl
              p-8
              min-h-[140px]
              shadow-lg
              hover:border-yellow-400/40
              hover:-translate-y-1
              transition-all
            "
          >
            <div className="flex justify-between items-center h-full">
              <div>
                <p className="text-gray-400 text-sm">
                  Today's Messages
                </p>

                <h2 className="text-5xl font-bold text-yellow-400 mt-3">
                  {todayMessages}
                </h2>
              </div>

              <FaCalendarAlt className="text-5xl text-yellow-400" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white/5
              backdrop-blur-xl
              border border-yellow-500/20
              rounded-3xl
              p-8
              min-h-[140px]
              shadow-lg
              hover:border-yellow-400/40
              hover:-translate-y-1
              transition-all
            "
          >
            <div className="flex justify-between items-center h-full">
              <div>
                <p className="text-gray-400 text-sm">
                  This Week
                </p>

                <h2 className="text-5xl font-bold text-yellow-400 mt-3">
                  {weekMessages}
                </h2>
              </div>

              <FaCalendarAlt className="text-5xl text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div
          className="
  bg-white/5
  backdrop-blur-xl
  border border-white/10
  rounded-3xl
  pt-8 pb-10 px-4 lg:px-8
  shadow-2xl
"
        >
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 px-8">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400">
                Contact Messages
              </h2>

              <p className="text-gray-500 mt-2">
                Manage all incoming contact requests
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              {/* Search */}
              <div className="relative">
                <FaSearch
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  placeholder="         Search messages..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-[420px]
                    h-14
                    bg-[#111827]
                    border border-gray-700
                    rounded-2xl
                    pl-12
                    pr-4
                    outline-none
                    focus:border-yellow-400
                    transition-all
                  "
                />
              </div>

              {/* Export Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={async () => {
                    try {
                      const token =
                        localStorage.getItem("token");

                      const response = await fetch(
                        "http://localhost:5000/api/export/excel",
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      );

                      const blob =
                        await response.blob();

                      const url =
                        window.URL.createObjectURL(blob);

                      const a =
                        document.createElement("a");

                      a.href = url;
                      a.download = "contacts.xlsx";
                      a.click();
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                  className="
    h-14 px-5
    bg-green-500/10
    text-green-400
    border border-green-500/20
    rounded-2xl
    hover:bg-green-500
    hover:text-white
    transition-all
  "
                >
                  <FaFileExcel size={18} />
                </button>

                <button
                  onClick={async () => {
                    try {
                      const token =
                        localStorage.getItem("token");

                      const response = await fetch(
                        "http://localhost:5000/api/export/csv",
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      );

                      const blob =
                        await response.blob();

                      const url =
                        window.URL.createObjectURL(blob);

                      const a =
                        document.createElement("a");

                      a.href = url;
                      a.download = "contacts.csv";
                      a.click();
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                  className="
    h-14 px-5
    bg-blue-500/10
    text-blue-400
    border border-blue-500/20
    rounded-2xl
    hover:bg-blue-500
    hover:text-white
    transition-all
  "
                >
                  <FaFileCsv size={18} />
                </button>

                <button
                  onClick={async () => {
                    try {
                      const token =
                        localStorage.getItem("token");

                      const response = await fetch(
                        "http://localhost:5000/api/export/pdf",
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }
                      );

                      const blob =
                        await response.blob();

                      const url =
                        window.URL.createObjectURL(blob);

                      const a =
                        document.createElement("a");

                      a.href = url;
                      a.download = "contacts.pdf";
                      a.click();
                    } catch (error) {
                      console.error(error);
                    }
                  }}
                  className="
    h-14 px-5
    bg-red-500/10
    text-red-400
    border border-red-500/20
    rounded-2xl
    hover:bg-red-500
    hover:text-white
    transition-all
  "
                >
                  <FaFilePdf size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex justify-center">
            <table className="w-[90%] mx-auto border-separate border-spacing-y-2">
              <thead>
                <tr className="text-gray-400 text-sm uppercase tracking-wider">
                  <th className="text-left pb-4">Name</th>
                  <th className="text-left pb-4">Email</th>
                  <th className="text-left pb-4">Subject</th>
                  <th className="text-left pb-4">Date</th>
                  <th className="text-center pb-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredMessages.map((msg) => (
                  <tr
                    key={msg.id}
                    className="
                      bg-white/[0.03]
                      hover:bg-white/[0.06]
                      transition-all
                    "
                  >
                    <td className="py-6 px-4 rounded-l-2xl">
                      {msg.name}
                    </td>

                    <td className="py-6 px-4 text-gray-400">
                      {msg.email}
                    </td>

                    <td className="py-6 px-4">
                      {msg.subject}
                    </td>

                    <td className="py-6 px-4 text-gray-500">
                      {new Date(msg.created_at).toLocaleDateString()}
                    </td>

                    <td className="py-6 px-4 rounded-r-2xl">
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => setSelectedMessage(msg)}
                          className="
  text-yellow-400
  text-lg
  hover:text-yellow-300
  transition-all
  duration-200
"
                        >
                          <FaEye className="mx-auto" />
                        </button>

                        <button
                          onClick={() => setEditMessage(msg)}
                          className="
  text-blue-400
  text-lg
  hover:text-blue-300
  transition-all
  duration-200
"
                        >
                          <FaEdit className="mx-auto" />
                        </button>


                        <button
                          onClick={() => {
                            const confirmed = window.confirm(
                              "Are you sure you want to delete this message?"
                            );

                            if (confirmed) {
                              deleteMessage(msg.id);
                            }
                          }}
                          className="
  text-red-400
  text-lg
  hover:text-red-300
  transition-all
  duration-200
"
                        >
                          <FaTrash className="mx-auto" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredMessages.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No messages found.
              </div>
            )}
          </div>
        </div>
      </div>
      {editMessage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-2xl bg-[#0f172a] border border-blue-500/20 rounded-3xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-400">
                Edit Message
              </h2>

              <button
                onClick={() => setEditMessage(null)}
                className="text-red-400 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                value={editMessage.name}
                onChange={(e) =>
                  setEditMessage({
                    ...editMessage,
                    name: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-xl p-4"
              />

              <input
                type="email"
                value={editMessage.email}
                onChange={(e) =>
                  setEditMessage({
                    ...editMessage,
                    email: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-xl p-4"
              />

              <input
                type="text"
                value={editMessage.subject}
                onChange={(e) =>
                  setEditMessage({
                    ...editMessage,
                    subject: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-xl p-4"
              />

              <textarea
                rows="6"
                value={editMessage.message}
                onChange={(e) =>
                  setEditMessage({
                    ...editMessage,
                    message: e.target.value,
                  })
                }
                className="w-full bg-black border border-white/10 rounded-xl p-4 resize-none"
              />

              <button
                onClick={updateMessage}
                className="
            w-full
            py-4
            bg-blue-500
            hover:bg-blue-600
            rounded-xl
            font-bold
            transition-all
          "
              >
                Update Message
              </button>

            </div>
          </div>
        </div>
      )}

      {selectedMessage && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-2xl bg-[#0f172a] border border-yellow-500/20 rounded-3xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-yellow-400">
                Message Details
              </h2>

              <button
                onClick={() => setSelectedMessage(null)}
                className="text-red-400 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Name</p>
                <p className="text-lg">{selectedMessage.name}</p>
              </div>

              <div>
                <p className="text-gray-400">Email</p>
                <p>{selectedMessage.email}</p>
              </div>

              <div>
                <p className="text-gray-400">Subject</p>
                <p>{selectedMessage.subject}</p>
              </div>

              <div>
                <p className="text-gray-400">Date</p>
                <p>
                  {new Date(
                    selectedMessage.created_at
                  ).toLocaleString()}
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-2">
                  Message
                </p>

                <div className="bg-black/40 border border-white/10 rounded-xl p-4 min-h-[120px]">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashboard;