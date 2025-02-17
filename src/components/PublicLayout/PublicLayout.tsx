import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";

const PublicLayout = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default PublicLayout;
