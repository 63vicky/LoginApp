import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == null
    ) {
      navigate("/login");
    }
  }, []);

  return <div>dashboard</div>;
};

export default Dashboard;
