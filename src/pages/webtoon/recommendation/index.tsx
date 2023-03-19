import Navigation from "@/src/components/common/Navigation";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Recommendation = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/webtoon").then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Recommendation;
