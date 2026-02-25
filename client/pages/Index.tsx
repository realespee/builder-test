import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

const complaints = [
  {
    id: "CPL-2024-001156",
    title: "Discriminatory Hiring Practice",
    category: "Discrimination",
    date: "2024-01-15",
    status: "Resolved",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: "CPL-2024-002341",
    title: "Unpaid Overtime Hours",
    category: "Wage & Hour Violations",
    date: "2024-02-03",
    status: "Under Review",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "CPL-2024-003789",
    title: "Workplace Harassment",
    category: "Harassment",
    date: "2024-02-17",
    status: "In Progress",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-inter ${color}`}>
      {label}
    </span>
  );
}

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }}>
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-3xl text-fs-text mb-2">My Complaints</h1>
          <p className="text-fs-text-secondary font-inter text-base">Track and manage your workplace complaint submissions</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            to="/file-complaint"
            className="bg-white rounded-2xl p-6 shadow-sm border border-fs-border hover:shadow-md transition-shadow flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #253D83 100%)" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-poppins font-bold text-lg text-fs-text mb-1 group-hover:text-brand-blue transition-colors">File New Complaint</h2>
              <p className="text-fs-text-secondary font-inter text-sm">Report a workplace violation with our guided process</p>
            </div>
          </Link>

          <Link
            to="/anonymous-report"
            className="bg-white rounded-2xl p-6 shadow-sm border border-fs-border hover:shadow-md transition-shadow flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-red-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2L22 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h2 className="font-poppins font-bold text-lg text-fs-text mb-1 group-hover:text-red-600 transition-colors">Anonymous Report</h2>
              <p className="text-fs-text-secondary font-inter text-sm">Report violations without revealing your identity</p>
            </div>
          </Link>
        </div>

        {/* Complaints List */}
        <div className="bg-white rounded-2xl shadow-sm border border-fs-border overflow-hidden">
          <div className="px-6 py-5 border-b border-fs-border flex items-center justify-between">
            <h2 className="font-poppins font-bold text-xl text-fs-text">Recent Complaints</h2>
            <span className="text-sm text-fs-text-muted font-inter">{complaints.length} total</span>
          </div>

          <div className="divide-y divide-fs-border">
            {complaints.map((complaint) => (
              <div key={complaint.id} className="px-6 py-5 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-poppins font-semibold text-base text-fs-text">{complaint.title}</h3>
                      <StatusBadge label={complaint.status} color={complaint.statusColor} />
                    </div>
                    <p className="text-sm text-fs-text-muted font-inter mb-1">{complaint.id}</p>
                    <div className="flex items-center gap-4 text-sm text-fs-text-secondary font-inter flex-wrap">
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 6H20M4 10H20M4 14H12" stroke="#4A5565" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {complaint.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#4A5565" strokeWidth="2"/>
                          <path d="M16 2V6M8 2V6M3 10H21" stroke="#4A5565" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {complaint.date}
                      </span>
                    </div>
                  </div>
                  {complaint.status === "Resolved" && (
                    <Link
                      to="/feedback"
                      className="flex-shrink-0 text-sm font-semibold text-brand-blue hover:underline font-inter"
                    >
                      Give Feedback
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {complaints.length === 0 && (
            <div className="px-6 py-12 text-center">
              <p className="text-fs-text-muted font-inter">No complaints filed yet.</p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-0.5">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1E3A8A" strokeWidth="2"/>
            <path d="M12 8V12M12 16H12.01" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="text-sm font-semibold text-brand-blue font-inter mb-1">Your complaints are protected by law</p>
            <p className="text-sm text-fs-text-secondary font-inter">All information is kept strictly confidential. You are protected from retaliation under federal and state law.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
