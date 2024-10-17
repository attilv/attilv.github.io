import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Changer useHistory par useNavigate

const PasswordPage = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate(); // Changer useHistory par useNavigate

    const correctPassword = "your_password"; // Change ton mot de passe ici

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            window.location.href = "https://attilv.github.io"; // Redirection vers ton GitHub Pages
        } else {
            setError(true);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Enter Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: "red" }}>Incorrect password, try again.</p>}
        </div>
    );
};

export default PasswordPage;
