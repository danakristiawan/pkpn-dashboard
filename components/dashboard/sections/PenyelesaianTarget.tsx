"use client";

// components/dashboard/sections/PenyelesaianTarget.tsx

import {
  LineChart, Line, BarChart, Bar, ComposedChart,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { PENYELESAIAN_TREND, TARGET_REALISASI, TOP5_PENYELESAIAN, BIAD_TOP5, JENIS_BADGE } from "@/lib/data";
import {
  KpiCard, SectionCard, SectionHeading, Pill, RankBadge, ProgressBar, CustomTooltip, LegendRow,
} from "@/components/dashboard/ui";

export function PenyelesaianTarget() {
  return (
    <div className="space-y-4 md:space-y-5">

      {/* KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {[
          { l: "SPPNL (YTD)",   v: "1.234", t: "8,2%", up: true,  a: "#16a34a" },
          { l: "SPPNS (YTD)",   v: "876",   t: "5,1%", up: true,  a: "#0d9488" },
          { l: "PSBDT (YTD)",   v: "432",   t: "2,3%", up: false, a: "#d97706" },
          { l: "Pengembalian",  v: "298",   t: "1,4%", up: true,  a: "#e11d48" },
          { l: "SKPPN",         v: "187",   t: "0,7%", up: false, a: "#64748b" },
          { l: "PPNTO + PPDTO", v: "187",   t: "3,1%", up: true,  a: "#4f46e5" },
        ].map((k, i) => (
          <KpiCard key={i} title={k.l} value={k.v} trend={k.t} trendUp={k.up} accent={k.a} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionCard>
          <SectionHeading>Tren Penyelesaian BKPN (2021–2025)</SectionHeading>
          <LegendRow items={[
            ["#16a34a", "SPPNL"], ["#2563eb", "SPPNS"], ["#d97706", "PSBDT"],
            ["#e11d48", "Pengembalian"], ["#64748b", "SKPPN"],
          ]} />
          <ResponsiveContainer width="100%" height={210}>
            <LineChart data={PENYELESAIAN_TREND} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="y" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={36} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="SPPNL"        stroke="#16a34a" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="SPPNS"        stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="4 2" />
              <Line type="monotone" dataKey="PSBDT"        stroke="#d97706" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Pengembalian" stroke="#e11d48" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="SKPPN"        stroke="#64748b" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Target vs Realisasi FocusPN (2021–2025)</SectionHeading>
          <LegendRow items={[["#4f46e5", "Target"], ["#16a34a", "Realisasi"]]} />
          <ResponsiveContainer width="100%" height={210}>
            <ComposedChart data={TARGET_REALISASI} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="y" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={36} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="target"    name="Target"    fill="#4f46e522" stroke="#4f46e5" strokeWidth={1} radius={[3, 3, 0, 0]} />
              <Bar dataKey="realisasi" name="Realisasi" fill="#16a34a22" stroke="#16a34a" strokeWidth={1} radius={[3, 3, 0, 0]} />
            </ComposedChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Top tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionCard>
          <SectionHeading>Top 5 Penyelesaian Outstanding Tertinggi — Tahun Berjalan</SectionHeading>
          <div className="space-y-1.5">
            {TOP5_PENYELESAIAN.map((r, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                <RankBadge n={r.rank} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">{r.nama}</p>
                  <p className="text-[11px] text-muted-foreground">{r.penyerah} · {r.tgl}</p>
                </div>
                <Pill variant={(JENIS_BADGE[r.jenis] as "green" | "blue" | "amber" | "rose" | "slate") ?? "slate"}>{r.jenis}</Pill>
                <span className="text-xs font-bold text-foreground ml-1 flex-shrink-0">
                  Rp {r.nilai.toLocaleString("id-ID")} M
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Top 5 BIAD PN Tertinggi (Rp Miliar)</SectionHeading>
          <div className="space-y-3">
            {BIAD_TOP5.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors">
                <RankBadge n={b.rank} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-foreground truncate">{b.nama}</p>
                  <div className="mt-1.5">
                    <ProgressBar value={b.persen} max={30} color="#4f46e5" height={5} />
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-bold text-primary">Rp {b.biad} M</p>
                  <p className="text-[11px] text-muted-foreground">{b.persen}%</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
