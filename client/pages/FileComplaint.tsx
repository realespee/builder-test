import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";

const STEPS = [
  { num: 1, label: "Basic Info" },
  { num: 2, label: "Incident Details" },
  { num: 3, label: "Parties Involved" },
  { num: 4, label: "Impact & Evidence" },
  { num: 5, label: "Review & Submit" },
];

const VIOLATION_CATEGORIES = [
  "Wage & Hour Violations",
  "Workplace Harassment",
  "Discrimination",
  "Retaliation",
  "Safety Violations",
  "Privacy Violations",
  "Other",
];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-fs-border p-5">
      <div className="flex items-center justify-between">
        {STEPS.map((step, idx) => {
          const isDone = step.num < current;
          const isActive = step.num === current;
          return (
            <div key={step.num} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-inter font-semibold text-sm flex-shrink-0 transition-all ${
                    isDone
                      ? "bg-brand-teal"
                      : isActive
                      ? "bg-brand-navy text-white"
                      : "bg-gray-200 text-fs-text-muted"
                  }`}
                >
                  {isDone ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8006 9.9995C22.2573 12.2408 21.9318 14.5709 20.8785 16.6013C19.8251 18.6317 18.1075 20.2396 16.0121 21.1568C13.9167 22.0741 11.5702 22.2453 9.36391 21.6419C7.15758 21.0385 5.2248 19.6969 3.88789 17.8409C2.55097 15.9849 1.89073 13.7267 2.01728 11.4429C2.14382 9.15904 3.04949 6.98759 4.58326 5.29067C6.11703 3.59375 8.18619 2.47393 10.4457 2.11795C12.7052 1.76198 15.0184 2.19136 16.9996 3.3345" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <span className={isActive ? "text-white" : "text-fs-text-muted"}>{step.num}</span>
                  )}
                </div>
                <span className={`text-xs font-inter mt-1 text-center leading-tight max-w-[60px] ${isActive ? "font-semibold text-brand-navy" : isDone ? "text-brand-teal font-medium" : "text-fs-text-muted"}`}>
                  {step.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 mb-5 ${step.num < current ? "bg-brand-teal" : "bg-gray-200"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FormInput({ label, required, optional, children }: { label: string; required?: boolean; optional?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-inter text-sm font-medium text-fs-text">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        {optional && <span className="text-brand-blue ml-1 font-normal">(optional)</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput({ placeholder, type = "text", icon }: { placeholder?: string; type?: string; icon?: React.ReactNode }) {
  return (
    <div className="relative">
      {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fs-text-muted">{icon}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition ${icon ? "pl-10 pr-4" : "px-4"}`}
      />
    </div>
  );
}

function Checkbox({ label, description, checked, onChange }: { label: string; description?: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${checked ? "bg-brand-navy border-brand-navy" : "border-gray-300 bg-white"}`}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <div>
        <p className="font-inter font-semibold text-sm text-fs-text">{label}</p>
        {description && <p className="font-inter text-sm text-fs-text-secondary mt-0.5">{description}</p>}
      </div>
    </div>
  );
}

function FileUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);

  return (
    <div>
      <div
        className="border-2 border-dashed border-fs-border rounded-[10px] bg-white p-8 flex flex-col items-center gap-3 cursor-pointer hover:border-brand-teal transition-colors"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L12 3L7 8" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3V15" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className="text-center">
          <p className="font-inter font-medium text-fs-text">Drag and drop files here, or</p>
          <button type="button" className="text-brand-blue font-semibold font-inter hover:underline mt-1">browse files</button>
        </div>
        <p className="text-xs text-fs-text-muted font-inter">PDF, JPG, PNG, DOC (Max 10MB each)</p>
        {files.length > 0 && (
          <p className="text-sm text-brand-teal font-inter font-medium">{files.length} file(s) selected</p>
        )}
      </div>
      <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => {
        if (e.target.files) setFiles(Array.from(e.target.files).map(f => f.name));
      }} />
    </div>
  );
}

// Step 1: Basic Info
function Step1() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-poppins font-bold text-2xl text-fs-text">Basic Information</h2>
        <p className="text-fs-text-secondary font-inter text-base mt-1">Tell us about the type of violation you experienced</p>
      </div>

      <FormInput label="Violation Category" required>
        <div className="relative">
          <select className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent">
            <option value="">Select a category</option>
            {VIOLATION_CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </FormInput>

      <FormInput label="Complaint Title" required>
        <TextInput placeholder="Brief description of the violation" />
      </FormInput>

      <FormInput label="Detailed Description" required>
        <div className="relative">
          <textarea
            placeholder="Provide as much detail as possible about what happened..."
            className="w-full h-32 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
          />
          <span className="absolute bottom-3 right-3 text-xs text-fs-text-muted font-inter">0/50 minimum</span>
        </div>
      </FormInput>

      <FormInput label="Preferred Contact Method" optional>
        <div className="relative">
          <select className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text px-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent">
            <option value="">Select method</option>
            <option>Email</option>
            <option>Phone</option>
            <option>In-person</option>
          </select>
          <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9L12 15L18 9" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </FormInput>
    </div>
  );
}

// Step 2: Incident Details
function Step2() {
  const [hasPreviousReport, setHasPreviousReport] = useState(false);
  const [isOngoing, setIsOngoing] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-poppins font-bold text-2xl text-fs-text">Incident Details</h2>
        <p className="text-fs-text-secondary font-inter text-base mt-1">When and where did this violation occur?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Date of Incident" required>
          <div className="relative">
            <input type="date" className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition" />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-fs-text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="#6A7282" strokeWidth="2"/>
              <path d="M16 2V6M8 2V6M3 10H21" stroke="#6A7282" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </FormInput>

        <FormInput label="Time of Incident" optional>
          <div className="relative">
            <input type="time" className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition" />
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-fs-text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="#6A7282" strokeWidth="2"/>
              <path d="M12 7V12L15 14" stroke="#6A7282" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </FormInput>
      </div>

      <FormInput label="Location" required>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-fs-text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#6A7282" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9" r="2.5" stroke="#6A7282" strokeWidth="2"/>
          </svg>
          <input type="text" placeholder="e.g., Main Office - 3rd Floor, Conference Room B" className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition" />
        </div>
      </FormInput>

      <Checkbox
        label="I have reported this issue before"
        description="Check if you've previously reported this to HR, management, or another authority"
        checked={hasPreviousReport}
        onChange={setHasPreviousReport}
      />

      {hasPreviousReport && (
        <div className="pl-8 flex flex-col gap-4 border-l-2 border-brand-teal ml-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormInput label="Reported To" required>
              <TextInput placeholder="e.g., HR Department, Direct Manager" />
            </FormInput>
            <FormInput label="Date Reported" optional>
              <div className="relative">
                <input type="date" className="w-full h-12 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent" />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-fs-text-muted" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="#6A7282" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="#6A7282" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </FormInput>
          </div>
          <FormInput label="What action was taken">
            <textarea
              placeholder="Describe any action taken or response received..."
              className="w-full h-28 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
            />
          </FormInput>
        </div>
      )}

      <FormInput label="Upload Documents">
        <FileUpload />
      </FormInput>

      <Checkbox
        label="This is an ongoing issue"
        description="Check this if the violation continues to occur or has happened multiple times"
        checked={isOngoing}
        onChange={setIsOngoing}
      />
    </div>
  );
}

// Step 3: Parties Involved
function Step3() {
  const [hasWitnesses, setHasWitnesses] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-poppins font-bold text-2xl text-fs-text">Parties Involved</h2>
        <p className="text-fs-text-secondary font-inter text-base mt-1">Who was involved in this incident?</p>
      </div>

      <FormInput label="Name of Person(s) Involved" required>
        <TextInput placeholder="Full name(s) of person(s) who committed the violation" />
      </FormInput>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormInput label="Job Title/Position">
          <TextInput placeholder="e.g., Manager" />
        </FormInput>
        <FormInput label="Department">
          <TextInput placeholder="e.g., Sales, HR" />
        </FormInput>
      </div>

      <Checkbox
        label="There were witnesses present"
        description="Witnesses strengthen your complaint and may be contacted for statements"
        checked={hasWitnesses}
        onChange={setHasWitnesses}
      />

      {hasWitnesses && (
        <FormInput label="Witness names and Contact information">
          <textarea
            placeholder="List witness names and how to contact them (email, phone). One per line."
            className="w-full h-32 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
          />
        </FormInput>
      )}
    </div>
  );
}

// Step 4: Impact & Evidence
function Step4() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-poppins font-bold text-2xl text-fs-text">Impact & Evidence</h2>
        <p className="text-fs-text-secondary font-inter text-base mt-1">Describe the impact and provide any supporting evidence</p>
      </div>

      <FormInput label="How has this affected you?" required>
        <textarea
          placeholder="Describe the personal, professional, or financial impact of this violation..."
          className="w-full h-32 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
        />
      </FormInput>

      <FormInput label="Severity of Impact" required>
        <div className="flex flex-col gap-2">
          {["Minor - Discomfort or inconvenience", "Moderate - Affecting my work performance", "Severe - Significant personal or professional harm", "Critical - Immediate threat to safety or livelihood"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 h-12 px-3 rounded-[10px] cursor-pointer hover:bg-gray-50 border border-fs-border">
              <input type="radio" name="severity" className="accent-brand-teal w-4 h-4" />
              <span className="font-inter text-base text-fs-text-body">{opt}</span>
            </label>
          ))}
        </div>
      </FormInput>

      <FormInput label="Additional Evidence" optional>
        <FileUpload />
      </FormInput>
    </div>
  );
}

// Step 5: Review & Submit
function Step5({ onSubmit }: { onSubmit: () => void }) {
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [isConfidential, setIsConfidential] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="font-poppins font-bold text-2xl text-fs-text">Review & Submit</h2>
        <p className="text-fs-text-secondary font-inter text-base mt-1">Finalize your complaint and submit for review</p>
      </div>

      <FormInput label="Desired Outcome">
        <div className="relative">
          <textarea
            placeholder="What would you like to see happen? (e.g., Back pay, policy change, disciplinary action, transfer, etc.)"
            value={desiredOutcome}
            onChange={(e) => setDesiredOutcome(e.target.value)}
            className="w-full h-32 border border-fs-border rounded-[10px] bg-white font-inter text-base text-fs-text placeholder:text-fs-text-muted px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition"
          />
          <span className="absolute bottom-3 right-3 text-xs text-fs-text-muted font-inter">{desiredOutcome.length}/50 minimum</span>
        </div>
        <p className="text-xs text-fs-text-muted font-inter mt-1">While we cannot guarantee specific outcomes, knowing your goals helps us better assist you.</p>
      </FormInput>

      {/* Confidentiality option */}
      <div className="border border-fs-border rounded-[10px] p-5 flex items-start gap-3">
        <button
          type="button"
          onClick={() => setIsConfidential(!isConfidential)}
          className={`mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-all ${isConfidential ? "bg-brand-navy border-brand-navy" : "border-gray-300 bg-white"}`}
        >
          {isConfidential && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="#253D83" strokeWidth="2"/>
              <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#253D83" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-poppins font-semibold text-base text-fs-text">Keep this complaint confidential</span>
          </div>
          <p className="font-inter text-sm text-fs-text-secondary">Your identity will be protected to the extent possible. Only necessary personnel will have access to your information, and you are protected from retaliation by law.</p>
        </div>
      </div>

      {/* Complaint Summary */}
      <div className="bg-white border border-fs-border rounded-[10px] p-5">
        <h3 className="font-poppins font-bold text-base text-fs-text mb-4">Complaint Summary</h3>
        <div className="flex flex-col gap-3">
          {[
            ["Category:", "Wage & Hour Violations"],
            ["Incident Date:", "2026-02-17"],
            ["Location:", "Main Office - 3rd Floor"],
            ["Evidence Files:", "1 file(s)"],
            ["Witnesses:", "Yes"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between items-center border-b border-fs-border pb-3 last:border-0 last:pb-0">
              <span className="font-inter text-sm text-fs-text-secondary">{label}</span>
              <span className="font-inter text-sm font-semibold text-fs-text">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Legal notice */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-[10px]">
        <p className="font-inter text-sm text-fs-text">
          <span className="font-semibold">Legal Notice:</span> By submitting this complaint, you affirm that the information provided is true and accurate to the best of your knowledge. False complaints may result in disciplinary action. You are protected from retaliation under federal and state law.
        </p>
      </div>

      <button
        onClick={onSubmit}
        className="w-full h-12 bg-brand-navy text-white font-inter font-semibold text-base rounded-[10px] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
      >
        Submit Complaints
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

export default function FileComplaint() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (currentStep < 5) {
      setCurrentStep(s => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(s => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    navigate("/complaint-submitted");
  };

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)" }}>
      <Header backLabel="Back to Complaints" backTo="/" />

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Hero Banner */}
        <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1E3A8A 0%, #0F766E 100%)" }}>
          <div className="p-6 flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl text-white">File New Complaint</h1>
              <p className="text-white/80 font-inter text-sm mt-1">Report a workplace violation with our guided submission process</p>
              <div className="mt-3 flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 w-fit">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-white text-xs font-inter font-medium">Confidential & Protected by Law</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator current={currentStep} />

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-fs-border p-6">
          {currentStep === 1 && <Step1 />}
          {currentStep === 2 && <Step2 />}
          {currentStep === 3 && <Step3 />}
          {currentStep === 4 && <Step4 />}
          {currentStep === 5 && <Step5 onSubmit={handleSubmit} />}
        </div>

        {/* Navigation buttons */}
        {currentStep < 5 && (
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 h-12 px-6 border border-fs-border rounded-[10px] font-inter font-semibold text-base text-fs-text hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
            <button
              onClick={handleContinue}
              className="flex items-center gap-2 h-12 px-8 bg-brand-navy text-white font-inter font-semibold text-base rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Continue
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        )}

        {currentStep === 5 && (
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 h-12 px-6 border border-fs-border rounded-[10px] font-inter font-semibold text-base text-fs-text hover:bg-gray-50 transition-colors bg-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
