import { useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const allowedDomain = "lamduan.mfu.ac.th";

function ProtectedRoute({ children, isLoggingOut }) {
  const navigate = useNavigate();
  const alertShown = useRef(false); // ✅ Prevents multiple alerts

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const isAuthorized = storedUser && storedUser.email.endsWith(`@${allowedDomain}`);

  useEffect(() => {
    if (!isAuthorized && !alertShown.current && !isLoggingOut) {
      alertShown.current = true; // ✅ Prevents multiple alerts
      alert("🚫 Access Denied: You must log in with an @lamduan.mfu.ac.th email.");
      navigate("/login", { replace: true });

      // ✅ Reset alert flag after a short delay (allows re-triggering on next visit)
      setTimeout(() => {
        alertShown.current = false;
      }, 1000);
    }
  }, [isAuthorized, navigate, isLoggingOut]);

  return isAuthorized ? children : null;
}

export default ProtectedRoute;
