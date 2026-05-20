"use client";

// components/dashboard/ui.tsx
// Reusable chart & dashboard primitives (shadcn-aware).

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import type { TooltipProps } from "recharts";
import type { ValueType, NameType } from "recharts/types/component/DefaultTooltipContent";
import { cn } from "@/lib/utils";
import { Badge, type BadgeProps } from "@/components/ui/badge";

// ─── RECHARTS CUSTOM TOOLTIP ─────────────────────────────────────────────────

export function CustomTooltip({ active, payload, label }: TooltipProps<ValueType, NameType>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border bg-card px-3 py-2 shadow-lg text-[11px]">
      <p className="font-semibold text-foreground mb-1.5">{label}</p>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-1.5 mb-0.5">
          <span style={{ color: p.color as string }} className="text-sm">●</span>
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="font-semibold text-foreground">
            {typeof p.value === "number" ? p.value.toLocaleString("id-ID") : p.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── KPI CARD ─────────────────────────────────────────────────────────────────

interface KpiCardProps {
  title: string;
  value: string;
  sub?: string;
  trend?: string;
  trendUp?: boolean;
  accent?: string;
}

export function KpiCard({ title, value, sub, trend, trendUp, accent = "#4f46e5" }: KpiCardProps) {
  return (
    <div className="rounded-xl border bg-card p-4 space-y-1 hover:shadow-md transition-shadow">
      <p className="text-[11px] text-muted-foreground font-medium leading-tight">{title}</p>
      <p className="text-xl sm:text-2xl font-bold leading-none" style={{ color: accent }}>
        {value}
      </p>
      {sub && <p className="text-[11px] text-muted-foreground">{sub}</p>}
      {trend !== undefined && (
        <div className={cn(
          "flex items-center gap-1 text-[11px] font-semibold",
          trendUp ? "text-emerald-600" : "text-rose-500"
        )}>
          {trendUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
}

// ─── SECTION CARD ─────────────────────────────────────────────────────────────

export function SectionCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card p-4 md:p-5", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold text-foreground mb-3">{children}</p>
  );
}

// ─── LEGEND ROW ───────────────────────────────────────────────────────────────

export function LegendRow({ items }: { items: [string, string][] }) {
  return (
    <div className="flex flex-wrap gap-3 mb-3">
      {items.map(([color, label], i) => (
        <div key={i} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="w-2.5 h-2.5 rounded-sm inline-block flex-shrink-0" style={{ background: color }} />
          {label}
        </div>
      ))}
    </div>
  );
}

// ─── PILL BADGE ───────────────────────────────────────────────────────────────

type PillVariant = BadgeProps["variant"];

export function Pill({ children, variant = "slate" }: { children: React.ReactNode; variant?: PillVariant }) {
  return <Badge variant={variant}>{children}</Badge>;
}

// ─── RANK BADGE ───────────────────────────────────────────────────────────────

export function RankBadge({ n }: { n: number }) {
  return (
    <span className={cn(
      "w-6 h-6 rounded-full inline-flex items-center justify-center text-[11px] font-bold flex-shrink-0",
      n <= 3 ? "bg-amber-100 text-amber-700" : "bg-muted text-muted-foreground"
    )}>
      {n}
    </span>
  );
}

// ─── PROGRESS BAR ─────────────────────────────────────────────────────────────

export function ProgressBar({ value, max = 100, color = "#4f46e5", height = 6 }: {
  value: number; max?: number; color?: string; height?: number;
}) {
  return (
    <div className="bg-muted rounded-full overflow-hidden" style={{ height }}>
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${Math.min((value / max) * 100, 100)}%`, background: color }}
      />
    </div>
  );
}

// ─── STAT MINI ────────────────────────────────────────────────────────────────

export function StatMini({ label, value, color }: { label: string; value: string | number; color?: string }) {
  return (
    <div className="text-center">
      <p className="text-[10px] text-muted-foreground font-medium leading-tight">{label}</p>
      <p className="text-base font-bold mt-0.5" style={{ color: color || "inherit" }}>
        {typeof value === "number" ? value.toLocaleString("id-ID") : value}
      </p>
    </div>
  );
}
