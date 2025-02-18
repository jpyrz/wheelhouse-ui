import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { ProtectedLayout } from "../ProtectedLayout/ProtectedLayout";
import PublicLayout from "../PublicLayout/PublicLayout";

export function Base() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      const isAuthRoute =
        location.pathname === "/login" || location.pathname === "/signup";

      if (user && isAuthRoute) {
        // Redirect to /feed ONLY if they are logged in AND on an auth route
        navigate("/feed", { replace: true });
      } else if (!user && !isAuthRoute) {
        // Redirect to /login ONLY if they are logged out AND on a protected route
        navigate("/login", { replace: true });
      }
    }
  }, [user, loading, navigate, location.pathname]);

  if (loading) return <div>loading...</div>; // Prevents flickering while Firebase loads

  return (
    <Routes>
      {user ? (
        <Route path="/*" element={<ProtectedLayout />} />
      ) : (
        <Route path="/*" element={<PublicLayout />} />
      )}
    </Routes>
  );
}
