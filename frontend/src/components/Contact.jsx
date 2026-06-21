import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  } catch (error) {
    console.error(error);
    alert(error.message || "Failed to send message");
  }
};
  return (
  <section
  id="contact"
  style={{
    ...styles.section,
    scrollMarginTop: "0px",
  }}
>
      <div style={styles.container}>
        <div
  style={{
    ...styles.headingArea,
    scrollMarginTop: "100px",
  }}
>

        </div>

        <div style={styles.grid}>
          {/* Left Card */}
          <article style={styles.card}>
            <h3 style={styles.cardTitle}>Let's Connect</h3>

            <p style={styles.description}>
              Have a project idea, internship opportunity, or want to
              collaborate? Feel free to send me a message.
            </p>

            <div style={styles.infoItem}>
              <MailIcon />
              <div>
                <strong>Email</strong>
                <p style={styles.infoText}>madhan90258@gmail.com</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <PhoneIcon />
              <div>
                <strong>Phone</strong>
                <p style={styles.infoText}>+91 90258 72161</p>
              </div>
            </div>

            <div style={styles.infoItem}>
              <LocationIcon />
              <div>
                <strong>Location</strong>
                <p style={styles.infoText}>Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </article>

          {/* Right Card */}
          <article style={styles.card}>
            <h3 style={styles.cardTitle}>Send Me a Message</h3>

           <form onSubmit={handleSubmit} noValidate>
  <div style={styles.nameEmailRow}>
    <InputField
      icon={<UserIcon />}
      label="Name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      error={errors.name}
    />

    <InputField
      icon={<MailIcon />}
      label="Email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      error={errors.email}
    />
  </div>

              <InputField
                icon={<SubjectIcon />}
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />

              <div style={{ marginBottom: "18px" }}>

                <div style={styles.inputWrapper}>
                  <MessageIcon />

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    placeholder="Write your message..."
                  />
                </div>

                {errors.message && (
                  <small style={styles.error}>{errors.message}</small>
                )}
              </div>

              <button type="submit" style={styles.button}>
                <SendIcon />
                Send Message
              </button>

              {success && (
                <div style={styles.success}>
                  ✓ Message sent successfully!
                </div>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */

function InputField({
  icon,
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
}) {
  return (
    <div style={{ marginBottom: "18px" }}>

      <div style={styles.inputWrapper}>
        {icon}

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          style={styles.input}
          placeholder={label}
        />
      </div>

      {error && <small style={styles.error}>{error}</small>}
    </div>
  );
}

/* ---------- SVG Icons ---------- */


const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c2-4 6-6 8-6s6 2 8 6" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.8L7.1 9.9a16 16 0 0 0 7 7l1.8-1.8a2 2 0 0 1 1.8-.6l2.6.4a2 2 0 0 1 1.7 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11z" />
    <circle cx="12" cy="10" r="2" />
  </svg>
);

const SubjectIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <path d="M4 6h16M4 12h16M4 18h10" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={iconStyle}>
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

/* ---------- Styles ---------- */

const iconStyle = {
  width: 20,
  height: 20,
  minWidth: 20,
  color: "#facc15",
};

const styles = {
 section: {
  minHeight: "100vh",
  padding: "20px 20px 60px",
  background: "#000",
  color: "#fff",
},

nameEmailRow: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "15px",
  marginBottom: "18px",
},

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },

  headingArea: {
  textAlign: "center",
  marginBottom: "100px",
},

  smallTitle: {
  color: "#ffffff",
  letterSpacing: "6px",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "uppercase",
},

  mainTitle: {
  fontSize: "2.8rem",
  fontWeight: "700",
  marginTop: "8px",
  marginBottom: "10px",
  color: "#facc15",
},

  subtitle: {
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.7",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "24px",
  },

  card: {
  background: "#0b0b0b",
  border: "1px solid rgba(250,204,21,0.2)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 0 25px rgba(250,204,21,0.12)",
},
  cardTitle: {
    fontSize: "1.6rem",
    marginBottom: "15px",
    color: "#facc15",
  },

  description: {
  color: "#94a3b8",
  marginBottom: "20px",
  lineHeight: "1.7",
},

  infoItem: {
    display: "flex",
    gap: "15px",
    marginBottom: "24px",
    alignItems: "flex-start",
    color: "#facc15",
  },

  infoText: {
    marginTop: "4px",
    color: "#cbd5e1",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
  },

  inputWrapper: {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  background: "#050505",
  border: "1px solid rgba(250,204,21,0.15)",
  borderRadius: "12px",
  padding: "12px",
  color: "#facc15",
},

  input: {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#ffffff",
    fontSize: "15px",
  },

  textarea: {
  width: "100%",
  height: "100px",
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#ffffff",
  resize: "none",
  fontSize: "15px",
  fontFamily: "inherit",
},

  button: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "#facc15",
    color: "#000",
    fontWeight: "700",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 0 20px rgba(250,204,21,0.35)",
  },

  success: {
    marginTop: "15px",
    color: "#22c55e",
    fontWeight: "600",
  },

  error: {
    color: "#ef4444",
    marginTop: "4px",
    display: "block",
  },
};
export default Contact;