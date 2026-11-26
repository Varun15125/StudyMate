import AIAssistant from "../components/dashboard/AIAssistant.jsx";
import RecentDocuments from "../components/dashboard/RecentDocuments.jsx";
import StatsCards from "../components/dashboard/StatsCards.jsx";
import WelcomeSection from "../components/dashboard/WelcomeSection.jsx";
import DashboardLayout from "../components/layout/DashboardLayout.jsx";

function Dashboard() {
  return (
    <DashboardLayout>
      <WelcomeSection />
      <div className="section-title"><h2>Your progress</h2><span>Updated just now</span></div>
      <StatsCards />
      <div className="dashboard-lower">
        <RecentDocuments />
        <AIAssistant />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
