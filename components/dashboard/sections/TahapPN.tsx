"use client";

// components/dashboard/sections/TahapPN.tsx

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { TAHAP_PN, FUNNEL_COLORS } from "@/lib/data";
import { SectionCard, SectionHeading, ProgressBar, CustomTooltip } from "@/components/dashboard/ui";

export function TahapPN() {
  return (
    <div className="space-y-4 md:space-y-5">

      {/* Funnel KPI cards — 2 col mobile, 4 col md, 7 col lg */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {TAHAP_PN.map((t, i) => (
          <div key={i} className="rounded-xl border bg-card p-3 text-center hover:shadow-md transition-shadow">
            <p className="text-[11px] text-muted-foreground mb-1.5 font-medium leading-tight">{t.name}</p>
            <p className="text-lg sm:text-xl font-bold" style={{ color: FUNNEL_COLORS[i] }}>
              {t.count.toLocaleString("id-ID")}
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">{t.pct}%</p>
          </div>
        ))}
      </div>

      {/* Funnel chart */}
      <SectionCard>
        <SectionHeading>Funnel Tahap Pengurusan Piutang Negara</SectionHeading>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={TAHAP_PN} margin={{ top: 5, right: 15, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => v.toLocaleString("id-ID")} width={42} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="count" name="Jumlah BKPN" radius={[4, 4, 0, 0]}>
              {TAHAP_PN.map((_, i) => (
                <Cell key={i} fill={FUNNEL_COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>

      {/* Conversion rates */}
      <SectionCard>
        <SectionHeading>Tingkat Konversi Antar Tahap</SectionHeading>
        <div className="space-y-4">
          {TAHAP_PN.slice(0, -1).map((t, i) => {
            const next = TAHAP_PN[i + 1];
            const conv = Math.round((next.count / t.count) * 100);
            return (
              <div key={i}>
                <div className="flex justify-between items-center text-xs mb-1.5">
                  <span className="text-muted-foreground font-medium">
                    {t.name}
                    <span className="text-muted-foreground/50 mx-1.5">→</span>
                    {next.name}
                  </span>
                  <span className="font-bold tabular-nums" style={{ color: FUNNEL_COLORS[i + 1] }}>
                    {conv}%{" "}
                    <span className="text-muted-foreground font-normal">
                      ({next.count.toLocaleString("id-ID")} / {t.count.toLocaleString("id-ID")})
                    </span>
                  </span>
                </div>
                <ProgressBar value={conv} max={100} color={FUNNEL_COLORS[i + 1]} height={6} />
              </div>
            );
          })}
        </div>
      </SectionCard>
    </div>
  );
}
