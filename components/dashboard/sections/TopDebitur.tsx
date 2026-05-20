"use client";

// components/dashboard/sections/TopDebitur.tsx

import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { AlertTriangle } from "lucide-react";
import { TOP10_DEBITUR, PENYERAH } from "@/lib/data";
import { SectionCard, SectionHeading, Pill, RankBadge, CustomTooltip, LegendRow } from "@/components/dashboard/ui";

export function TopDebitur() {
  return (
    <div className="space-y-4 md:space-y-5">

      {/* Horizontal bar chart */}
      <SectionCard>
        <SectionHeading>Top 10 Debitur — Outstanding Terbesar (Rp Miliar)</SectionHeading>
        <LegendRow items={[
          ["#e11d48", "Top 3 (Tertinggi)"],
          ["#4f46e5", "4–7"],
          ["#0d9488", "8–10"],
        ]} />
        <ResponsiveContainer width="100%" height={310}>
          <BarChart data={TOP10_DEBITUR} layout="vertical" margin={{ top: 0, right: 40, bottom: 0, left: 140 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214 32% 94%)" />
            <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v.toLocaleString("id-ID")}`} />
            <YAxis dataKey="nama" type="category" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} width={135} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="outstanding" name="Outstanding (Rp M)" radius={[0, 4, 4, 0]}>
              {TOP10_DEBITUR.map((_, i) => (
                <Cell key={i} fill={i < 3 ? "#e11d48" : i < 7 ? "#4f46e5" : "#0d9488"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>

      {/* Detail table */}
      <SectionCard>
        <SectionHeading>Detail Top 10 Debitur</SectionHeading>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-xs min-w-[520px]">
            <thead>
              <tr className="border-b border-border">
                {["#", "Nama Debitur", "Wilayah", "Outstanding", "Angsuran", "Usia"].map((h, i) => (
                  <th key={i} className={`py-2.5 px-2 text-muted-foreground font-semibold ${i > 2 ? "text-center" : "text-left"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TOP10_DEBITUR.map((d, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/40 transition-colors">
                  <td className="py-2.5 px-2"><RankBadge n={d.rank} /></td>
                  <td className="py-2.5 px-2 font-semibold text-foreground">{d.nama}</td>
                  <td className="py-2.5 px-2 text-muted-foreground">{d.wilayah}</td>
                  <td className="py-2.5 px-2 text-center font-bold text-foreground">
                    Rp {d.outstanding.toLocaleString("id-ID")} M
                  </td>
                  <td className="py-2.5 px-2 text-center">
                    <Pill variant={d.angsuran === "Ada" ? "green" : "rose"}>{d.angsuran}</Pill>
                  </td>
                  <td className="py-2.5 px-2 text-center">
                    <Pill variant={d.usia === "<1 thn" ? "green" : d.usia === "1-5 thn" ? "amber" : "rose"}>
                      {d.usia}
                    </Pill>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      {/* Penyerah chart */}
      <SectionCard>
        <SectionHeading>Top Penyerah Piutang — Jumlah BKPN</SectionHeading>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={13} className="text-amber-500 flex-shrink-0" />
          <span className="text-xs text-amber-600">Data dalam pengecekan — angka bersifat ilustrasi</span>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={PENYERAH} layout="vertical" margin={{ top: 0, right: 30, bottom: 0, left: 55 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214 32% 94%)" />
            <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} width={50} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="bkpn" name="Jumlah BKPN" fill="#4f46e5" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>
    </div>
  );
}
