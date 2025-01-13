import { useEffect, useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch("menu.json");
      const result = await response.json();
      setMenu(result);
      setLoading(false);
    };
    fetchMenuData();
  }, []);
  return [menu, loading];
};

export { UseMenu };
