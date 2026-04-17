'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { bioDataMultilingual, BioData } from '../../../private/bio';
import { Globe, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function CVContent() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<'ca' | 'en' | 'es'>('ca');
  const [data, setData] = useState<BioData>(bioDataMultilingual.ca);

  useEffect(() => {
    const langParam = searchParams.get('lang') as 'ca' | 'en' | 'es';
    if (langParam && ['ca', 'en', 'es'].includes(langParam)) {
      setLang(langParam);
    }
  }, [searchParams]);

  useEffect(() => {
    setData(bioDataMultilingual[lang]);
  }, [lang]);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center py-8 print:py-0 print:bg-white font-sans">
      {/* Contenidor que simula una pàgina A4 */}
      <div className="w-full max-w-[210mm] h-[297mm] bg-white shadow-xl print:shadow-none print:w-full print:h-full px-14 py-10 flex flex-col box-border overflow-hidden">

        {/* Capçalera */}
        <header className="flex justify-between items-end pb-5 mb-6 shrink-0 border-b-2 border-[#d1d5db]">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl font-extrabold uppercase tracking-tight text-gray-900 leading-none">
              {data.name}
            </h1>
            <h2 className="text-lg font-semibold text-blue-600 tracking-wide">
              {data.role}
            </h2>
          </div>
          <div className="flex flex-col items-start space-y-1.5 text-xs text-gray-600 font-medium">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-blue-500" />
              <span>{data.url.replace(/^https?:\/\//, '')}</span>
            </a>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              <span>{data.email}</span>
            </div>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-500" />
              <span>{data.linkedin.replace(/^https?:\/\/(www\.)?/, '')}</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>{data.location}</span>
            </div>
          </div>
        </header>

        {/* Cos del CV */}
        <main className="flex-1 flex gap-8 h-full">
          {/* Columna Esquerra */}
          <div className="w-[35%] flex flex-col gap-6">
            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">
                {data.labels.profile}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed text-left">
                {data.about}
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">
                {data.labels.otherData}
              </h3>
              <div className="text-xs text-gray-700 space-y-2">
                <div>
                  <span className="font-semibold block mb-1">{data.labels.languages}:</span>
                  <ul className="list-disc list-inside space-y-0.5 ml-1 text-left">
                    {data.languages.map((langItem, idx) => (
                      <li key={idx}>{langItem}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="font-semibold">{data.labels.drivingLicense}:</span> B
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">
                {data.labels.availability}
              </h3>
              <p className="text-xs text-gray-700 leading-relaxed text-left">
                {data.availability}
              </p>
            </section>
          </div>

          {/* Columna Dreta */}
          <div className="w-[65%] flex flex-col gap-6">
            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
                {data.labels.experience}
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <h4 className="text-sm font-bold text-gray-900">{exp.company} <span className="font-normal text-gray-600">| {exp.role}</span></h4>
                      <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded whitespace-nowrap ml-2">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 ml-1 text-left">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="leading-snug">{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
                {data.labels.skills}
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-xs font-semibold text-gray-800 mb-1.5">{data.labels.software}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.software.map((skill, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-[10px] font-medium border border-gray-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-800 mb-1">{data.labels.hardware}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed text-left">
                    {data.skills.hardware.join(' • ')}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-800 mb-1">{data.labels.other}</h4>
                  <p className="text-xs text-gray-700 leading-relaxed text-left">
                    {data.skills.other.join(' • ')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
                {data.labels.education}
              </h3>
              <div className="space-y-3">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-xs text-gray-600 mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500 whitespace-nowrap ml-2 mt-0.5">
                      {edu.duration}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function CVRenderFull() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregant...</div>}>
      <CVContent />
    </Suspense>
  );
}
