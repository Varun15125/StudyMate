import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";

function DashboardLayout({ children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="main-shell">
        <Topbar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
