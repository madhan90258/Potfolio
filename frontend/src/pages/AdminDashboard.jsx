import {
  FaEnvelope,
  FaFileExcel,
  FaFileCsv,
  FaFilePdf,
  FaSignOutAlt,
  FaEye,
  FaTrash,
} from "react-icons/fa";

function AdminDashboard() {
  const messages = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      subject: "Internship",
      date: "18-06-2026",
    },
    {
      id: 2,
      name: "Ravi",
      email: "ravi@gmail.com",
      subject: "Project Discussion",
      date: "17-06-2026",
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white px-8 py-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">

        <div>
          <h1 className="text-5xl font-bold text-yellow-400">
            Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-2 text-lg">
            Welcome Back, Madhan Raj
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2
            bg-red-500
            px-5
            py-3
            rounded-xl
            font-semibold
            hover:bg-red-600
            transition-all
          "
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

      {/* Stats + Export Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">

        {/* Total Messages */}
        <div
          className="
            bg-[#111111]
            border
            border-yellow-500/20
            rounded-3xl
            p-8
            w-full
            lg:w-[300px]
            text-center
          "
        >
          <FaEnvelope className="text-yellow-400 text-4xl mx-auto mb-4" />

          <h3 className="text-gray-400 text-lg">
            Total Messages
          </h3>

          <h2 className="text-5xl font-bold mt-2 text-yellow-400">
            {messages.length}
          </h2>
        </div>

        {/* Export Buttons */}
        <div className="flex flex-wrap items-center gap-4">

          <button
            className="
              flex
              items-center
              gap-2
              bg-green-600
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            <FaFileExcel />
            Export Excel
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              bg-blue-600
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            <FaFileCsv />
            Export CSV
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              bg-red-600
              px-5
              py-3
              rounded-xl
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            <FaFilePdf />
            Export PDF
          </button>

        </div>

      </div>

      {/* Contact Messages */}
      <div
        className="
          bg-[#111111]
          border
          border-yellow-500/20
          rounded-3xl
          p-8
        "
      >

        <h2 className="text-3xl font-bold text-yellow-400 mb-8">
          Contact Messages
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b border-yellow-500/20">

                <th className="text-left py-4 px-3">
                  Name
                </th>

                <th className="text-left py-4 px-3">
                  Email
                </th>

                <th className="text-left py-4 px-3">
                  Subject
                </th>

                <th className="text-left py-4 px-3">
                  Date
                </th>

                <th className="text-center py-4 px-3">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b border-white/5"
                >
                  <td className="py-5 px-3">
                    {msg.name}
                  </td>

                  <td className="py-5 px-3">
                    {msg.email}
                  </td>

                  <td className="py-5 px-3">
                    {msg.subject}
                  </td>

                  <td className="py-5 px-3">
                    {msg.date}
                  </td>

                  <td className="py-5 px-3">

                    <div className="flex justify-center gap-3">

                      <button
                        className="
                          bg-yellow-400
                          text-black
                          px-4
                          py-2
                          rounded-lg
                          hover:bg-yellow-300
                        "
                      >
                        <FaEye />
                      </button>

                      <button
                        className="
                          bg-red-500
                          px-4
                          py-2
                          rounded-lg
                          hover:bg-red-600
                        "
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;