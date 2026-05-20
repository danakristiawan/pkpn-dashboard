"use client";

// components/dashboard/sections/EksposurRecovery.tsx

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { TOP10_DEBITUR, RECOVERY_RATE } from "@/lib/data";
import {
  SectionCard, SectionHeading, Pill, ProgressBar, CustomTooltip, LegendRow,
} from "@/components/dashboard/ui";

export function EksposurRecovery() {
  return (
    <div className="space-y-4 md:space-y-5">

      {/* Top 10 risk exposure */}
      <SectionCard>
        <SectionHeading>Top 10 Eksposur Risiko — Outstanding Terbesar (Rp Miliar)</SectionHeading>
        <LegendRow items={[
          ["#e11d48", "Risiko Tinggi (Top 3)"],
          ["#f97316", "Risiko Sedang (4–7)"],
          ["#d97706", "Risiko Normal (8–10)"],
        ]} />
        <p className="text-xs text-muted-foreground mb-3">
          3 debitur teratas menyumbang ~37% total outstanding portofolio
        </p>
        <ResponsiveContainer width="100%" height={290}>
          <BarChart data={TOP10_DEBITUR} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 140 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214 32% 94%)" />
            <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="nama" type="category" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} width={135} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="outstanding" name="Outstanding (Rp M)" radius={[0, 4, 4, 0]}>
              {TOP10_DEBITUR.map((_, i) => (
                <Cell key={i} fill={i < 3 ? "#e11d48" : i < 7 ? "#f97316" : "#d97706"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>

      {/* Recovery rate section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar chart */}
        <SectionCard>
          <SectionHeading>Recovery Rate per Wilayah (%)</SectionHeading>
          <LegendRow items={[
            ["#16a34a", "≥ 25% Baik"],
            ["#d97706", "15–24% Sedang"],
            ["#e11d48", "< 15% Rendah"],
          ]} />
          <ResponsiveContainer width="100%" height={270}>
            <BarChart data={RECOVERY_RATE} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 90 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214 32% 94%)" />
              <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => v + "%"} domain={[0, 50]} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} width={85} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="rate" name="Recovery Rate (%)" radius={[0, 3, 3, 0]}>
                {RECOVERY_RATE.map((r, i) => (
                  <Cell key={i} fill={r.status === "high" ? "#16a34a" : r.status === "mid" ? "#d97706" : "#e11d48"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        {/* Top & Flop stacked */}
        <div className="flex flex-col gap-4">
          <SectionCard>
            <SectionHeading>🏆 Top Recovery Rate — 5 Terbaik</SectionHeading>
            <div className="space-y-3">
              {RECOVERY_RATE.slice(0, 5).map((r, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium text-foreground">{r.name}</span>
                    <span className="font-bold text-emerald-600">{r.rate}%</span>
                  </div>
                  <ProgressBar value={r.rate} max={50} color="#16a34a" height={6} />
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard>
            <div className="flex items-center justify-between mb-3">
              <SectionHeading>📉 Flop Recovery Rate — 5 Terburuk</SectionHeading>
              <Pill variant="amber">Perlu verifikasi</Pill>
            </div>
            <div className="space-y-3">
              {RECOVERY_RATE.slice(5).map((r, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium text-foreground">{r.name}</span>
                    <span
                      className="font-bold"
                      style={{ color: r.status === "low" ? "#e11d48" : "#d97706" }}
                    >
                      {r.rate}%
                    </span>
                  </div>
                  <ProgressBar
                    value={r.rate}
                    max={50}
                    color={r.status === "low" ? "#e11d48" : "#d97706"}
                    height={6}
                  />
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
