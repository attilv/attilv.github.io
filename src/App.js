import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PasswordPage from "./PasswordPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PasswordPage />} />
            </Routes>
        </Router>
    );
}

export default App;
