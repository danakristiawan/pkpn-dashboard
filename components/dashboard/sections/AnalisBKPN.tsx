"use client";

// components/dashboard/sections/AnalisBKPN.tsx

import { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { Filter } from "lucide-react";
import { WILAYAH_BKPN, TREND_BKPN } from "@/lib/data";
import {
  KpiCard, SectionCard, SectionHeading, Pill, CustomTooltip, LegendRow,
} from "@/components/dashboard/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function AnalisBKPN() {
  const [filterAngsuran, setFilterAngsuran] = useState("all");
  const [filterJaminan,  setFilterJaminan]  = useState("all");

  return (
    <div className="space-y-4 md:space-y-5">

      {/* Filter bar */}
      <SectionCard className="p-3 md:p-4">
        <div className="flex flex-wrap items-center gap-3">
          <Filter size={13} className="text-muted-foreground flex-shrink-0" />
          <span className="text-xs text-muted-foreground font-medium">Filter BKPN Aktif:</span>

          <Select value={filterAngsuran} onValueChange={setFilterAngsuran}>
            <SelectTrigger className="w-44">
              <SelectValue placeholder="Status Angsuran" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Status Angsuran</SelectItem>
              <SelectItem value="ada">Ada Riwayat Angsuran</SelectItem>
              <SelectItem value="tidak">Tanpa Angsuran</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterJaminan} onValueChange={setFilterJaminan}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Jaminan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Jaminan</SelectItem>
              <SelectItem value="ada">Dengan Jaminan</SelectItem>
              <SelectItem value="tidak">Tanpa Jaminan</SelectItem>
            </SelectContent>
          </Select>

          <Pill variant="indigo">Data per Mei 2025</Pill>
        </div>
      </SectionCard>

      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <KpiCard title="Total BKPN"              value="12.847" accent="#4f46e5" />
        <KpiCard title="Ada Riwayat Angsuran"    value="3.241"  sub="25,2%" accent="#16a34a" />
        <KpiCard title="Angsuran 5 Thn Terakhir" value="2.876"  sub="22,4%" accent="#0d9488" />
        <KpiCard title="Tidak Ada Angsuran"      value="9.606"  sub="74,8%" accent="#e11d48" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionCard>
          <SectionHeading>BKPN per Wilayah — Dengan & Tanpa Jaminan</SectionHeading>
          <LegendRow items={[["#2563eb", "Dengan Jaminan"], ["#94a3b8", "Tanpa Jaminan"]]} />
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={WILAYAH_BKPN} layout="vertical" margin={{ top: 0, right: 20, bottom: 0, left: 70 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="hsl(214 32% 94%)" />
              <XAxis type="number" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis dataKey="name" type="category" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} width={65} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="jaminan" name="Dengan Jaminan" stackId="a" fill="#2563eb" />
              <Bar dataKey="tanpa"   name="Tanpa Jaminan"  stackId="a" fill="#94a3b8" radius={[0, 3, 3, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Usia Piutang (SP3N) per Wilayah</SectionHeading>
          <LegendRow items={[["#16a34a", "< 1 thn"], ["#d97706", "1–5 thn"], ["#e11d48", "> 5 thn"]]} />
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={WILAYAH_BKPN} margin={{ top: 0, right: 10, bottom: 30, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="name" tick={{ fontSize: 9 }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" height={50} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} width={28} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="lt1" name="< 1 thn" stackId="a" fill="#16a34a" />
              <Bar dataKey="s15" name="1–5 thn" stackId="a" fill="#d97706" />
              <Bar dataKey="gt5" name="> 5 thn" stackId="a" fill="#e11d48" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Trend bar */}
      <SectionCard>
        <SectionHeading>Riwayat Angsuran BKPN — 5 Tahun (2020–2025)</SectionHeading>
        <ResponsiveContainer width="100%" height={190}>
          <BarChart data={TREND_BKPN} margin={{ top: 5, right: 10, bottom: 0, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
            <XAxis dataKey="y" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${(v/1000).toFixed(1)}k`} width={36} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="angsuran" name="Ada Angsuran" fill="#0d9488" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </SectionCard>

      {/* Summary table */}
      <SectionCard>
        <SectionHeading>Ringkasan BKPN per Wilayah</SectionHeading>
        <div className="overflow-x-auto -mx-1">
          <table className="w-full text-xs min-w-[560px]">
            <thead>
              <tr className="border-b border-border">
                {["Wilayah", "Total", "Dg. Jaminan", "Tanpa Jaminan", "< 1 thn", "1–5 thn", "> 5 thn"].map((h, i) => (
                  <th key={i} className={`py-2.5 px-2 font-semibold text-muted-foreground ${i === 0 ? "text-left" : "text-right"}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WILAYAH_BKPN.map((w, i) => (
                <tr key={i} className="border-b border-border/50 hover:bg-muted/40 transition-colors">
                  <td className="py-2.5 px-2 font-medium text-foreground">{w.name}</td>
                  <td className="py-2.5 px-2 text-right font-bold text-foreground">{(w.jaminan + w.tanpa).toLocaleString("id-ID")}</td>
                  <td className="py-2.5 px-2 text-right text-blue-600 font-medium">{w.jaminan.toLocaleString("id-ID")}</td>
                  <td className="py-2.5 px-2 text-right text-slate-400">{w.tanpa.toLocaleString("id-ID")}</td>
                  <td className="py-2.5 px-2 text-right text-emerald-600">{w.lt1.toLocaleString("id-ID")}</td>
                  <td className="py-2.5 px-2 text-right text-amber-600">{w.s15.toLocaleString("id-ID")}</td>
                  <td className="py-2.5 px-2 text-right text-rose-600">{w.gt5.toLocaleString("id-ID")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>
    </div>
  );
}
