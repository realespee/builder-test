import { useState, useRef } from "react";
import { Header } from "@/components/Header";

function FileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);

  return (
    <div>
      <div
        className="border-2 border-dashed border-gray-200 rounded-[10px] bg-white p-8 flex flex-col items-center gap-3 cursor-pointer hover:border-gray-400 transition-colors"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          if (e.dataTransfer.files) setFiles(Array.from(e.dataTransfer.files).map(f => f.name));
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L12 3L7 8" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3V15" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-center">
          <p className="font-inter font-medium text-gray-700">Drag and drop files here, or</p>
          <button type="button" className="text-blue-600 font-semibold font-inter hover:underline mt-1">browse files</button>
        </div>
        <p className="text-xs text-gray-400 font-inter">PDF, JPG, PNG, DOC (Max 10MB each)</p>
        {files.length > 0 && (
          <p className="text-sm text-teal-600 font-inter font-medium">{files.length} file(s) selected</p>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => {
          if (e.target.files) setFiles(Array.from(e.target.files).map(f => f.name));
        }}
      />
    </div>
  );
}

const VIOLATION_CATEGORIES = [
  "Wage & Hour Violations",
  "Workplace Harassment",
  "Discrimination",
  "Retaliation",
  "Safety Violations",
  "Privacy Violations",
  "Financial Misconduct",
  "Other",
];

export default function AnonymousReport() {
  const [description, setDescription] = useState("");
  const [hasWitnesses, setHasWitnesses] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }}>
      <Header backLabel="Back to Home" backTo="/" />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Hero Banner */}
        <div className="rounded-2xl overflow-hidden bg-red-700">
          <div className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white">Anonymous Whistleblowing</h1>
              <p className="text-white/80 font-inter text-sm mt-1">Report workplace violations without revealing your identity</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/><path d="M7 11V7C7 4.79 8.79 3 11 3H13C15.21 3 17 4.79 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  ), label: "100% Anonymous" },
                  { icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 22C12 22 4 18 4 11V5L12 2L20 5V11C20 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ), label: "End-to-End Encrypted" },
                  { icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  ), label: "No Account Required" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
                    {badge.icon}
                    <span className="text-white text-xs font-inter font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center gap-2 mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C12 22 4 18 4 11V5L12 2L20 5V11C20 18 12 22 12 22Z" stroke="#0F766E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-poppins font-semibold text-base text-gray-800">Your Privacy is Protected</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl bg-green-50 p-4">
              <p className="font-inter font-semibold text-sm text-green-700 mb-1">No Tracking</p>
              <p className="font-inter text-xs text-gray-600 leading-relaxed">We don't collect IP addresses, device info, or any identifying metadata</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="font-inter font-semibold text-sm text-blue-700 mb-1">Encrypted Storage</p>
              <p className="font-inter text-xs text-gray-600 leading-relaxed">All reports are encrypted before storage using military-grade encryption</p>
            </div>
            <div className="rounded-xl bg-red-50 p-4">
              <p className="font-inter font-semibold text-sm text-red-700 mb-1">Anonymous ID</p>
              <p className="font-inter text-xs text-gray-600 leading-relaxed">Track your report status using only your unique Anonymous ID</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-5">
          <h2 className="font-poppins font-bold text-xl text-gray-800">Submit Anonymous Report</h2>

          {/* Violation Category */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-medium text-gray-700">
              Violation Category <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select className="w-full h-12 border border-gray-200 rounded-[10px] bg-white font-inter text-base text-gray-500 px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent">
                <option value="">Drop down</option>
                {VIOLATION_CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Report Title */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-medium text-gray-700">
              Report Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Brief Summary of the violation"
              className="w-full h-12 border border-gray-200 rounded-[10px] bg-white font-inter text-base text-gray-800 placeholder:text-gray-400 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
            />
          </div>

          {/* Detailed Description */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-medium text-gray-700">
              Detailed Description <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide as much as possible: What happened? When? Who was involved? Any Supporting details?"
                className="w-full h-36 border border-gray-200 rounded-[10px] bg-white font-inter text-base text-gray-800 placeholder:text-gray-400 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
              />
              <span className="absolute bottom-3 right-3 text-xs text-gray-400 font-inter">{description.length}/50 minimum</span>
            </div>
            <p className="font-inter text-xs text-gray-400">Tip: Be specific but avoid including information that could identify you</p>
          </div>

          {/* Date & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-gray-700">Date of Incident <span className="text-gray-400 font-normal">(Optional)</span></label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full h-12 border border-gray-200 rounded-[10px] bg-white font-inter text-base text-gray-800 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#6A7282" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="#6A7282" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-inter text-sm font-medium text-gray-700">Location <span className="text-gray-400 font-normal">(Optional)</span></label>
              <input
                type="text"
                placeholder="e.g., 3rd floor"
                className="w-full h-12 border border-gray-200 rounded-[10px] bg-white font-inter text-base text-gray-800 placeholder:text-gray-400 px-4 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Witnesses Checkbox */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setHasWitnesses(!hasWitnesses)}
              className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${hasWitnesses ? "bg-brand-navy border-brand-navy" : "border-gray-300 bg-white"}`}
            >
              {hasWitnesses && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            <span className="font-inter text-sm text-gray-700">Were there witnesses to this incident?</span>
          </div>

          {/* Upload Documents */}
          <div className="flex flex-col gap-2">
            <label className="font-inter text-sm font-medium text-gray-700">Upload Documents</label>
            <FileUpload />
            <p className="font-inter text-xs text-gray-400">Remove any metadata from files that could implicate you</p>
          </div>

          {/* Important Notice */}
          <div className="border-l-4 border-yellow-400 bg-yellow-50 rounded-r-xl p-4">
            <p className="font-inter text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold">Important:</span> After submission, you'll receive a unique Anonymous ID. Save this ID to check the status of your report. We cannot recover lost IDs or link reports to individuals.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full h-12 bg-red-700 text-white font-inter font-semibold text-base rounded-[10px] hover:bg-red-800 transition-colors flex items-center justify-center"
          >
            Submit Anonymous Report
          </button>
        </div>
      </main>
    </div>
  );
}
