import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  //state to control sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  //toggles sidebar open/close
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    //container with header, sidebar and main content
    <div className="layout">
      <Header onMenuClick={toggleSidebar} />
      <div className="layout-body">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        <main className="layout-content">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
