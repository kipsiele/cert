import React, { forwardRef } from "react";

interface Props {
  studentName: string;
  courseTitle: string;
  certificateId: string;
  issuedDate: string;
}

const Certificate = forwardRef<HTMLDivElement, Props>(
({ studentName, courseTitle, certificateId, issuedDate }, ref) => {
  return (
    <div
      ref={ref}
      className="relative w-[1000px] h-[650px] bg-white mx-auto mt-10 rounded-2xl border-2 border-sky-200 shadow-xl overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,151,255,0.02)_0%,transparent_60%),radial-gradient(circle_at_80%_70%,rgba(0,212,255,0.02)_0%,transparent_60%),repeating-linear-gradient(45deg,transparent,transparent_80px,rgba(0,151,255,0.01)_80px,rgba(0,151,255,0.01)_81px)]"></div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-6 left-6 w-24 h-[3px] bg-sky-500/30"></div>
        <div className="absolute top-6 left-6 h-24 w-[3px] bg-sky-500/30"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32">
        <div className="absolute bottom-6 right-6 w-24 h-[3px] bg-sky-500/30"></div>
        <div className="absolute bottom-6 right-6 h-24 w-[3px] bg-sky-500/30"></div>
      </div>

      {/* Logos */}
      <img
        src="https://crispai.crispvision.org/media/crisp-logo.png"
        className="absolute top-6 left-6 w-20 opacity-100"
      />

      <img
        src="https://crispai.crispvision.org/media/crisp-logo.png"
        className="absolute bottom-6 right-6 w-20 opacity-40"
      />

      {/* Title */}
      <h1 className="text-center text-5xl font-serif mt-24 bg-gradient-to-br from-[#0a2740] to-sky-500 bg-clip-text text-transparent">
        Certificate of Completion
      </h1>

      <p className="text-center mt-6 tracking-[2px] text-gray-600 uppercase">
        This certificate is proudly presented to
      </p>

      <div className="mt-6 text-center text-4xl font-bold text-sky-600 border-b-4 border-sky-500 w-max mx-auto pb-2">
        {studentName}
      </div>

      <p className="text-center mt-6 tracking-[2px] text-gray-600 uppercase">
        for successfully completing
      </p>

      <div className="mt-4 text-center text-3xl font-semibold text-[#0a2740] border-b-4 border-sky-500 w-max mx-auto pb-2">
        {courseTitle}
      </div>

      {/* Signature */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center">
        <div className="w-64 h-[2px] bg-sky-500/40 mx-auto mb-3"></div>
        <p className="text-2xl font-serif font-semibold">Ucheoma Udoha</p>
        <p className="text-xs uppercase tracking-wide text-gray-600">
          Founder, CrispAI
        </p>
      </div>

      {/* Credentials */}
      <div className="absolute bottom-6 left-6 text-xs text-gray-600 font-mono">
        Certificate ID: {certificateId} | Issued: {issuedDate}
      </div>
    </div>
  );
});

export default Certificate;
