import { Bell, Search } from "lucide-react";

function Topbar() {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>Workspace</span><span aria-hidden="true">/</span><strong>Dashboard</strong></div>
      <div className="topbar-actions">
        <label className="search-box">
          <Search size={17} />
          <input type="search" placeholder="Search anything..." aria-label="Search" />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button notification-button" type="button" aria-label="Notifications">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>
      </div>
    </header>
  );
}

export default Topbar;
