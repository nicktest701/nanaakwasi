import React from "react";

const TestimonialCard: React.FC = () => {
  return (
    <div className="absolute">
      <div className="absolute -bottom-6 left-0 right-0 h-6 bg-transparent" />
      <div className="absolute left-1/2 bottom-0 h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white" />
      <div className="w-64 bg-white p-6 shadow-xl">
        <div className="mb-3 space-y-3">
          <h3 className="font-semibold">For Individuals</h3>
          <a href="#" className="block text-sm hover:underline">
            Introduction
          </a>
          <a href="#" className="block text-sm hover:underline">
            Pay as you go
          </a>
        </div>
        <div className="mb-6 space-y-3">
          <h3 className="font-semibold">For Companies</h3>
          <a href="#" className="block text-sm hover:underline">
            Startups
          </a>
          <a href="#" className="block text-sm hover:underline">
            SMBs
          </a>
          <a href="#" className="block text-sm hover:underline">
            Enterprise
          </a>
        </div>
        <button className="w-full rounded-lg border-2 border-neutral-950 px-4 py-2 font-semibold transition-colors hover:bg-neutral-950 hover:text-white">
          Contact sales
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
