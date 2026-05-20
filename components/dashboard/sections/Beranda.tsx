"use client";

// components/dashboard/sections/Beranda.tsx

import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";
import { TREND_BKPN } from "@/lib/data";
import { KpiCard, SectionCard, SectionHeading, CustomTooltip, LegendRow } from "@/components/dashboard/ui";

export function Beranda() {
  return (
    <div className="space-y-4 md:space-y-5">

      {/* KPI Grid — 2 col mobile, 3 col tablet, 6 col desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <KpiCard title="Total BKPN Aktif"  value="12.847"   trend="3,2% YoY"  trendUp accent="#4f46e5" />
        <KpiCard title="Nilai Piutang"     value="Rp 47,3T" sub="Outstanding" trend="1,8% YoY" trendUp={false} accent="#e11d48" />
        <KpiCard title="Ada Angsuran"      value="3.241"    sub="25,2% dari total" trend="4,9%" trendUp accent="#16a34a" />
        <KpiCard title="Tanpa Angsuran"    value="9.606"    sub="74,8% dari total" trend="2,5%" trendUp={false} accent="#d97706" />
        <KpiCard title="Recovery Rate YTD" value="18,4%"    trend="2,1 ppt"  trendUp accent="#0d9488" />
        <KpiCard title="Penyelesaian YTD"  value="3.027"    trend="5,3%"     trendUp accent="#64748b" />
      </div>

      {/* Area Charts — stacked mobile, side-by-side md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SectionCard>
          <SectionHeading>Tren Jumlah BKPN (2020–2025)</SectionHeading>
          <LegendRow items={[["#4f46e5", "BKPN Aktif"], ["#0d9488", "Ada Angsuran"]]} />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={TREND_BKPN} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#4f46e5" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#0d9488" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="y" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${(v/1000).toFixed(0)}k`} width={32} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="aktif"    name="BKPN Aktif"   stroke="#4f46e5" fill="url(#gA)" strokeWidth={2} dot={false} />
              <Area type="monotone" dataKey="angsuran" name="Ada Angsuran" stroke="#0d9488" fill="url(#gB)" strokeWidth={2} dot={false} strokeDasharray="4 2" />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Tren Nilai Piutang Outstanding (Rp Triliun)</SectionHeading>
          <LegendRow items={[["#e11d48", "Nilai Outstanding"]]} />
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={TREND_BKPN} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id="gP" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#e11d48" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#e11d48" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="y" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis domain={[36, 52]} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${v}T`} width={32} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="piutang" name="Nilai (Rp T)" stroke="#e11d48" fill="url(#gP)" strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>

      {/* Pie + Bar row — 1 col mobile, 3 col lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SectionCard>
          <SectionHeading>Status Pembayaran BKPN</SectionHeading>
          <ResponsiveContainer width="100%" height={190}>
            <PieChart>
              <Pie
                data={[{ name: "Ada Angsuran", value: 3241 }, { name: "Tanpa Angsuran", value: 9606 }]}
                cx="50%" cy="50%" innerRadius={52} outerRadius={74} dataKey="value" paddingAngle={3}
              >
                <Cell fill="#0d9488" />
                <Cell fill="#e11d48" />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard>
          <SectionHeading>Usia Piutang (Tanggal SP3N)</SectionHeading>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={[{ name: "< 1 thn", v: 1234 }, { name: "1–5 thn", v: 5678 }, { name: "> 5 thn", v: 5935 }]}
              margin={{ top: 5, right: 5, bottom: 0, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 32% 94%)" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v: number) => `${(v/1000).toFixed(0)}k`} width={28} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="v" name="Jumlah BKPN" radius={[4, 4, 0, 0]}>
                <Cell fill="#16a34a" />
                <Cell fill="#d97706" />
                <Cell fill="#e11d48" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </SectionCard>

        <SectionCard className="sm:col-span-2 lg:col-span-1">
          <SectionHeading>Dengan vs Tanpa Jaminan</SectionHeading>
          <ResponsiveContainer width="100%" height={190}>
            <PieChart>
              <Pie
                data={[{ name: "Dengan Jaminan", value: 7451 }, { name: "Tanpa Jaminan", value: 5396 }]}
                cx="50%" cy="50%" innerRadius={52} outerRadius={74} dataKey="value" paddingAngle={3}
              >
                <Cell fill="#2563eb" />
                <Cell fill="#94a3b8" />
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ fontSize: 11 }} />
            </PieChart>
          </ResponsiveContainer>
        </SectionCard>
      </div>
    </div>
  );
}
