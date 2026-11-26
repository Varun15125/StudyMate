
import {
  BookOpen,
  FileText,
  LayoutDashboard,
  Settings,
  Sparkles,
  ChartNoAxesColumn,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "#dashboard",
    active: true,
  },
  {
    label: "My Learning",
    icon: BookOpen,
    href: "#learning",
  },
  {
    label: "My Documents",
    icon: FileText,
    href: "#documents",
  },
  {
    label: "AI Assistant",
    icon: Sparkles,
    href: "#assistant",
  },
  {
    label: "Analytics",
    icon: ChartNoAxesColumn,
    href: "#analytics",
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand */}
      <a
        className="brand"
        href="#dashboard"
        aria-label="StudyMate AI home"
      >
        <span className="brand-icon">
          <GraduationCap size={22} />
        </span>

        <span className="brand-name">
          StudyMate<span className="brand-accent"> AI</span>
        </span>
      </a>

      {/* Navigation */}
      <div className="sidebar-label">WORKSPACE</div>

      <nav className="sidebar-nav" aria-label="Main navigation">
        {navigation.map(({ label, icon: Icon, href, active }) => (
          <a
            key={label}
            className={`nav-link${active ? " active" : ""}`}
            href={href}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={19} strokeWidth={1.8} />
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="sidebar-bottom">
        <div className="sidebar-label">PREFERENCES</div>

        <a className="nav-link" href="#settings">
          <Settings size={19} strokeWidth={1.8} />
          <span>Settings</span>
        </a>

        {/* Study plan card */}
        <div className="plan-card">
          <span className="plan-icon">
            <Sparkles size={17} />
          </span>

          <strong>Keep learning</strong>

          <span>
            Stay consistent and achieve your learning goals.
          </span>

          <a href="#learning">
            Explore learning
            <ChevronRight size={14} />
          </a>
        </div>

        {/* User profile */}
        <div className="sidebar-user">
          <span className="avatar">ST</span>

          <span className="user-copy">
            <strong>Student Name</strong>
            <small>Student account</small>
          </span>

          <span className="user-menu" aria-hidden="true">
            ···
          </span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
