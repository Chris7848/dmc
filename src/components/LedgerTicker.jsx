import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function LedgerTicker() {
  const entries = [
    { tag: "CLIMATE NEED", desc: "Africa Annual Climate Finance ·", highlight: ">$240B / year" },
    { tag: "NIGERIA GAP", desc: "Annual Climate-Finance Gap ·", highlight: "$27B+ deficit" },
    { tag: "MARKET GAP", desc: "Africa Climate Funding Gap by 2030 ·", highlight: "$1.45 Trillion" },
    { tag: "SUSTAINABLE DEBT", desc: "Africa Sustainable Debt Issuance (2024) ·", highlight: "$13 Billion" },
    { tag: "INFRASTRUCTURE", desc: "Continental Infrastructure Need ·", highlight: "$130–170B / year" },
    { tag: "CLEAN ENERGY", desc: "Small-Scale Renewable Energy Gap ·", highlight: "$7.5–15B gap" },
    { tag: "CIRCULAR ECONOMY", desc: "Nigeria Waste Management Market ·", highlight: "$2.3B addressable" },
    { tag: "AGRO-PROCESSING", desc: "Agricultural Value-Chain Financing Gap ·", highlight: "$182B gap" }
  ];

  // Duplicate for seamless scroll
  const scrollEntries = [...entries, ...entries];

  return (
    <div className="bg-[#03110a] border-y border-[#123624] overflow-hidden py-3 relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#03110a] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-[#03110a] to-transparent z-10"></div>
      
      <div className="flex w-max animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused]">
        {scrollEntries.map((entry, idx) => (
          <div key={idx} className="flex items-center space-x-3 px-8 border-r border-[#123624]/50">
            <TrendingUp className="w-3.5 h-3.5 text-[#32d96c] shrink-0" />
            <span className="font-mono text-[10px] text-emerald-400/80 font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
              {entry.tag}
            </span>
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
