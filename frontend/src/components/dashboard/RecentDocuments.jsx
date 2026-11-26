import { ArrowUpRight, FileText, MoreHorizontal } from "lucide-react";

const documents = [
  { title: "Introduction to Cell Biology", subject: "Biology", updated: "Today, 10:42 AM", kind: "PDF", color: "mint" },
  { title: "World War II: Key Events", subject: "History", updated: "Yesterday", kind: "Notes", color: "peach" },
  { title: "Linear Algebra — Chapter 4", subject: "Mathematics", updated: "May 18, 2025", kind: "PDF", color: "lavender" },
];

function RecentDocuments() {
  return (
    <section className="panel documents-panel">
      <div className="panel-heading">
        <div><h2>Recent documents</h2><p>Pick up where you left off</p></div>
        <a className="text-link" href="#documents">View all <ArrowUpRight size={15} /></a>
      </div>
      <div className="document-list">
        {documents.map((document) => (
          <a className="document-row" href="#documents" key={document.title}>
            <span className={`document-icon ${document.color}`}><FileText size={19} /></span>
            <span className="document-info"><strong>{document.title}</strong><small>{document.subject} <span>·</span> {document.updated}</small></span>
            <span className="document-type">{document.kind}</span>
            <button className="more-button" type="button" aria-label={`More options for ${document.title}`} onClick={(event) => event.preventDefault()}>
              <MoreHorizontal size={19} />
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}

export default RecentDocuments;
