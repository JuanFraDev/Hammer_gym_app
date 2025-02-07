import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    axios.get("http://localhost:3001/admin", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setMessage(res.data.message))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  return (
    <div>
      <h2>Panel de Administración</h2>
      <p>{message}</p>
    </div>
  );
}

export default AdminPanel;
