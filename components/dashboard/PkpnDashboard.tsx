"use client";

// components/dashboard/PkpnDashboard.tsx
// Root client component — owns nav state & responsive sidebar.

import { useState } from "react";
import {
  LayoutDashboard, FileText, GitBranch, CheckSquare,
  Users, ShieldAlert, ChevronRight, Building2, RefreshCw,
  Calendar, Menu, X,
} from "lucide-react";
import type { NavId } from "@/lib/data";
import { META } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Beranda }            from "@/components/dashboard/sections/Beranda";
import { AnalisBKPN }         from "@/components/dashboard/sections/AnalisBKPN";
import { TahapPN }            from "@/components/dashboard/sections/TahapPN";
import { PenyelesaianTarget } from "@/components/dashboard/sections/PenyelesaianTarget";
import { TopDebitur }         from "@/components/dashboard/sections/TopDebitur";
import { EksposurRecovery }   from "@/components/dashboard/sections/EksposurRecovery";

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────

const NAV: { id: NavId; label: string; icon: React.ElementType }[] = [
  { id: "beranda",      label: "Beranda",              icon: LayoutDashboard },
  { id: "bkpn",         label: "Analisis BKPN",        icon: FileText        },
  { id: "tahap",        label: "Tahap PN",              icon: GitBranch       },
  { id: "penyelesaian", label: "Penyelesaian & Target", icon: CheckSquare     },
  { id: "debitur",      label: "Top Debitur",           icon: Users           },
  { id: "eksposur",     label: "Eksposur & Recovery",   icon: ShieldAlert     },
];

// ─── SIDEBAR CONTENT ─────────────────────────────────────────────────────────

function SidebarContent({
  active,
  onSelect,
}: {
  active: NavId;
  onSelect: (id: NavId) => void;
}) {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-5 pr-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
            <Building2 size={17} className="text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-bold text-sidebar-accent-foreground leading-tight">Subdit PKPN</p>
            <p className="text-[11px] text-sidebar-foreground/70 leading-tight mt-0.5">DJKN · Kemenkeu RI</p>
          </div>
        </div>
      </div>

      <Separator className="bg-sidebar-border mx-4" />

      {/* Nav label */}
      <p className="text-[10px] font-semibold text-sidebar-foreground/40 uppercase tracking-widest px-5 pt-4 pb-2">
        Navigasi
      </p>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto pb-4">
        {NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-xs font-medium transition-all duration-150 group",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md shadow-sidebar-primary/20"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon size={15} className="flex-shrink-0" />
              <span className="flex-1 leading-tight">{item.label}</span>
              {isActive && <ChevronRight size={12} className="opacity-70" />}
            </button>
          );
        })}
      </nav>

      <Separator className="bg-sidebar-border mx-4" />

      {/* Footer */}
      <div className="p-4 text-center">
        <p className="text-[10px] text-sidebar-foreground/40">Per Mei 2025 · v2.4</p>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export function PkpnDashboard() {
  const [active, setActive] = useState<NavId>("beranda");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { title, sub } = META[active];

  const handleSelect = (id: NavId) => {
    setActive(id);
    setMobileOpen(false);
  };

  const SECTIONS: Record<NavId, React.ReactNode> = {
    beranda:      <Beranda />,
    bkpn:         <AnalisBKPN />,
    tahap:        <TahapPN />,
    penyelesaian: <PenyelesaianTarget />,
    debitur:      <TopDebitur />,
    eksposur:     <EksposurRecovery />,
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">

      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="hidden md:flex flex-col w-56 lg:w-64 flex-shrink-0 bg-sidebar border-r border-sidebar-border">
        <SidebarContent active={active} onSelect={setActive} />
      </aside>

      {/* ── MOBILE SIDEBAR (Sheet) ── */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72 p-0 bg-sidebar border-sidebar-border">
          <SidebarContent active={active} onSelect={handleSelect} />
        </SheetContent>
      </Sheet>

      {/* ── MAIN AREA ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">

        {/* Topbar */}
        <header className="bg-card border-b border-border px-4 md:px-5 py-3 flex items-center justify-between flex-shrink-0 gap-3">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden flex-shrink-0 h-8 w-8"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
            <span className="sr-only">Buka menu</span>
          </Button>

          <div className="flex-1 min-w-0">
            <h1 className="text-sm font-semibold text-foreground truncate">{title}</h1>
            <p className="text-[11px] text-muted-foreground mt-0.5 hidden sm:block truncate">{sub}</p>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-muted-foreground flex-shrink-0">
            <Calendar size={13} />
            <span className="hidden sm:inline">Mei 2025</span>
            <Button variant="ghost" size="icon" className="h-7 w-7 hover:text-primary">
              <RefreshCw size={13} />
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-5 lg:p-6">
          {SECTIONS[active]}
        </main>
      </div>
    </div>
  );
}
