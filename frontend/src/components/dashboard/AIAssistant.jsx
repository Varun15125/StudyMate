import { ArrowUp, BookOpen, Sparkles } from "lucide-react";

function AIAssistant() {
  return (
    <section className="panel assistant-panel" id="ai-tutor">
      <div className="assistant-heading">
        <span className="assistant-mark"><Sparkles size={18} /></span>
        <div><h2>Ask your AI tutor</h2><p>Get unstuck, understand more.</p></div>
      </div>
      <div className="assistant-prompt">
        <span>What are you working on today?</span>
        <button type="button" aria-label="Send question"><ArrowUp size={17} /></button>
      </div>
      <div className="suggestion-label">TRY ASKING</div>
      <div className="suggestions">
        <a href="#ai-tutor"><BookOpen size={14} /> Explain a concept</a>
        <a href="#ai-tutor"><Sparkles size={14} /> Make a study quiz</a>
      </div>
      <p className="assistant-footnote">Your AI tutor uses your study materials for better answers.</p>
    </section>
  );
}

export default AIAssistant;
