import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_ITEMS } from "../../utils/constants";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();

  //closes sidebar with overlay is clicked
  const handleOverlayClick = () => {
    onClose();
  };

  //this prevents sidebar from closing when clickin inside
  const handleSidebarClick = (e) => {
    e.stopPropagation();
  };

  //closes sidebar on mobile after clicking o a link
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      onClose();
    }
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={handleOverlayClick}
        aria-hidden="true"
      />

      {/*sidebar nav*/}
      <aside
        className={`sidebar ${isOpen ? "open" : ""}`}
        onClick={handleSidebarClick}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="sidebar-title">
          Menu
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          {/* sidebar links */}
          {SIDEBAR_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive ? "active" : ""}`}
                onClick={handleLinkClick}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="sidebar-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
