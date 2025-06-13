import { useAuth } from "../../hooks/useAuth";
import "./Header.css";

const Header = ({ onMenuClick }) => {
  const { user, logout } = useAuth();

  // handles logout and redirects to home
  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  return (
    // header bar with menu and user info
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          {/* menu button */}
          <button
            className="menu-button"
            onClick={onMenuClick}
            aria-label="Abrir menú"
          >
            ☰
          </button>
          <h1 className="header-title">Prova tecnica</h1>
        </div>

        <div className="header-user">
          {/* shows user name */}
          <span className="user-name">Ciao {user?.name}!</span>
          {/* logout button */}
          <button className="logout-button" onClick={handleLogout}>
            Esci
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
