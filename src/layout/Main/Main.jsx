import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

const Main = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading data (e.g., fetching from an API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <div className="mx-auto bg-[#050709]">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
