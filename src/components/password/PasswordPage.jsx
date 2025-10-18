import { useState, useEffect } from "react";
import { Input, Button } from "antd";
import "./password.css";

const PasswordPage = ({ onSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Inline error state
  const correctPassword = "tysons"; // Wedding password

  // Check if password already stored in localStorage
  useEffect(() => {
    const storedPassword = localStorage.getItem("weddingPassword");
    if (storedPassword === correctPassword) {
      onSuccess();
    }
  }, [onSuccess]);

  const handleSubmit = () => {
    if (password.trim() === "") {
      setError("Please enter the password!");
      return;
    }

    if (password === correctPassword) {
      setError(""); // Clear error
      localStorage.setItem("weddingPassword", password); // Remember user
      onSuccess(); // Unlock the website
    } else {
      setError("Incorrect password! Please try again.");
      setPassword(""); // Clear input
    }
  };

  return (
    <div className="pwd_page">
      <div className="pwd_container">
        <h1 className="pwd_title">Welcome to Shayna & Surya's Wedding</h1>
        <p className="pwd_subtitle">Enter the password to view our website</p>
        <Input.Password
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pwd_input"
          onPressEnter={handleSubmit} // Enter key submission
        />
        {error && <p className="pwd_error">{error}</p>} {/* Inline error */}
        <Button type="primary" onClick={handleSubmit} className="pwd_button">
          Enter
        </Button>
        <p className="pwd_note">We can’t wait to celebrate with you!</p>
      </div>
    </div>
  );
};

export default PasswordPage;
