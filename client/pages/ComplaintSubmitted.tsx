import { Link } from "react-router-dom";
import { Header } from "@/components/Header";

export default function ComplaintSubmitted() {
  const complaintId = "CPL-2024-215890";

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }}>
      <Header />

      <main className="max-w-lg mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center gap-4">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F766E 0%, #0F766E 100%)" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div>
            <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-gray-800 mt-2">
              Complaint Submitted Successfully
            </h1>
            <p className="font-inter text-base text-gray-500 mt-2 leading-relaxed">
              Your workplace violation complaint has been received and is now under review by our team.
            </p>
          </div>

          {/* Complaint ID Box */}
          <div className="w-full border border-blue-200 rounded-xl bg-blue-50/40 p-5 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-gray-600">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#4A5565" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-inter font-semibold text-sm text-gray-600">Your Complaint ID</span>
            </div>
            <p className="font-poppins font-bold text-2xl sm:text-3xl text-blue-700">{complaintId}</p>
            <p className="font-inter text-sm text-gray-500 text-center">
              Use this ID to track your complaint status and communicate with our team.
            </p>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-poppins font-bold text-lg text-gray-800 text-center mb-5">What Happens Next?</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                num: 1,
                color: "bg-brand-navy",
                title: "Initial Review (24-48 hours)",
                desc: "Our team will review your complaint and verify the details",
              },
              {
                num: 2,
                color: "bg-brand-teal",
                title: "Assignment & Investigation",
                desc: "Your complaint will be assigned to the appropriate department",
              },
              {
                num: 3,
                color: "bg-red-600",
                title: "Updates & Resolution",
                desc: "You'll receive regular updates as your case progresses",
              },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  <span className="font-inter font-bold text-sm text-white">{item.num}</span>
                </div>
                <div>
                  <p className="font-inter font-semibold text-base text-gray-800">{item.title}</p>
                  <p className="font-inter text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Reminders */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-5">
          <p className="font-inter font-semibold text-sm text-gray-800 mb-3">Important Reminders:</p>
          <ul className="flex flex-col gap-1.5">
            {[
              "Check your email for confirmation and updates",
              "You can track your complaint status on your dashboard",
              "Keep any additional evidence that may emerge",
              "You are protected from retaliation under law",
            ].map((reminder) => (
              <li key={reminder} className="flex items-start gap-2 font-inter text-sm text-gray-700">
                <span className="text-yellow-500 mt-0.5 flex-shrink-0">•</span>
                {reminder}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="w-full h-12 bg-brand-navy text-white font-inter font-semibold text-base rounded-[10px] hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            View My Complaints
          </Link>
          <Link
            to="/"
            className="w-full h-12 border border-gray-200 bg-white text-gray-700 font-inter font-semibold text-base rounded-[10px] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            Return to Dashboard
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <button className="font-inter text-sm text-gray-500 hover:text-brand-navy transition-colors py-1">
            Need Help? Talk to AI Assistant
          </button>
        </div>
      </main>
    </div>
  );
}
