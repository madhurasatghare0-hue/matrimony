import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChatIcon from "../components/FloatingChatIcon.jsx";

const CHAT_ROUTES = ["/chat", "/chats"];

export default function MainLayout() {
  const location = useLocation();
  const isChatPage = CHAT_ROUTES.some(route => location.pathname.startsWith(route));

  return (
    <>
      <Navbar />
      <Outlet />
      {!isChatPage && <FloatingChatIcon />}
      {!isChatPage && <Footer />}
    </>
  );
}