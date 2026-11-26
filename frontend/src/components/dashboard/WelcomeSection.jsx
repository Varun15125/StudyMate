import { ArrowRight, CalendarDays, ChevronDown, Plus } from "lucide-react";

function WelcomeSection() {
  return (
    <section className="welcome-section">
      <div>
        <div className="eyebrow"><span className="status-dot" /> YOUR LEARNING SPACE</div>
        <h1>Good morning, Jamie <span aria-hidden="true">☀️</span></h1>
        <p>Small steps every day lead to big results. Ready to keep your momentum?</p>
        <div className="welcome-actions">
          <a className="button button-primary" href="#ai-tutor"><Plus size={17} /> Start studying</a>
          <a className="button button-quiet" href="#study-plans">View study plan <ArrowRight size={16} /></a>
        </div>
      </div>
      <div className="week-card">
        <div className="week-card-top">
          <span><CalendarDays size={16} /> THIS WEEK</span>
          <button type="button" aria-label="Choose week"><ChevronDown size={16} /></button>
        </div>
        <strong>4 <small>/ 5 days</small></strong>
        <div className="week-progress"><span /></div>
        <p>You’re one day away from your weekly goal!</p>
      </div>
    </section>
  );
}

export default WelcomeSection;
