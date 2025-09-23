// src/components/Certificates.jsx
import React from "react";
import { certificates } from "../data";

const Certificates = () => {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900" id="certificates">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">
          Certificates
        </h2>

        {/* List */}
        <ul className="space-y-4">
          {certificates.map((cert) => (
            <li
              key={cert.id}
              className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                {cert.title}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Issued by: {cert.issuer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certificates;
