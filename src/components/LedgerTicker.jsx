import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function LedgerTicker() {
  const entries = [
    { time: "14:02", desc: "₦18,000 sorted →", highlight: "Cyclex Africa" },
    { time: "13:47", desc: "42kg plastic diverted ·", highlight: "Ojota site" },
    { time: "13:20", desc: "Investor payout ·", highlight: "₦4,200 distributed" },
    { time: "12:58", desc: "New operator onboarded ·", highlight: "Lagos" },
    { time: "12:31", desc: "Content bounty paid ·", highlight: "Talent Collective" },
    { time: "12:04", desc: "Waste hub cleaned ·", highlight: "Bariga" },
    { time: "11:40", desc: "Revenue share executed ·", highlight: "Cyclex Africa" },
    { time: "11:12", desc: "New investor joined ·", highlight: "$25 deployed" }
  ];

  // Duplicate for seamless scroll
  const scrollEntries = [...entries, ...entries];

  return (
    <div className="bg-[#03110a] border-y border-[#123624] overflow-hidden py-3 relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#03110a] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#03110a] to-transparent z-10"></div>
      
      <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
        {scrollEntries.map((entry, idx) => (
          <div key={idx} className="flex items-center space-x-3 px-8 border-r border-[#123624]/50">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#32d96c] shrink-0" />
            <span className="font-mono text-[11px] text-emerald-100/40 tracking-wider">{entry.time}</span>
            <span className="text-[12px] text-gray-300 whitespace-nowrap">
              {entry.desc} <strong className="text-white font-semibold ml-1">{entry.highlight}</strong>
            </span>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
