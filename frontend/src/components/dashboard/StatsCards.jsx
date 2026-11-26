import { BookOpenCheck, Clock3, FileText, Flame } from "lucide-react";

const stats = [
  { label: "Study time", value: "12.5", unit: "hrs", note: "+2.5 hrs this week", icon: Clock3, tone: "purple" },
  { label: "Documents", value: "18", unit: "", note: "3 added this week", icon: FileText, tone: "blue" },
  { label: "Topics mastered", value: "24", unit: "", note: "Across 6 subjects", icon: BookOpenCheck, tone: "green" },
  { label: "Study streak", value: "7", unit: "days", note: "Personal best: 12 days", icon: Flame, tone: "orange" },
];

function StatsCards() {
  return (
    <section className="stats-grid" aria-label="Your learning statistics">
      {stats.map(({ label, value, unit, note, icon: Icon, tone }) => (
        <article className="stat-card" key={label}>
          <div className="stat-card-heading">
            <span>{label}</span>
            <span className={`stat-icon ${tone}`}><Icon size={18} /></span>
          </div>
          <div className="stat-value">{value}<small>{unit}</small></div>
          <p>{note}</p>
        </article>
      ))}
    </section>
  );
}

export default StatsCards;
