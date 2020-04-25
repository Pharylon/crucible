import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const anchor = document.getElementById("app");
    anchor.scrollIntoView();
  }, [pathname]);

  return null;
}