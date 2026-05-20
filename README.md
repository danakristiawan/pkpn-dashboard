# Dashboard PKPN — Next.js 16 + shadcn/ui

Dashboard monitoring piutang negara Subdit PKPN, DJKN Kemenkeu RI.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **shadcn/ui** (Button, Card, Badge, Select, Sheet, Separator)
- **Radix UI** (headless primitives)
- **Recharts** (visualisasi data)
- **Tailwind CSS v3** (utility-first styling)
- **TypeScript**

## Fitur Responsive

| Breakpoint | Layout |
|---|---|
| Mobile (< 768px) | Sidebar tertutup, buka via hamburger → Sheet drawer |
| Tablet (768px–1024px) | Sidebar tetap, lebar 224px; grid 2-kolom |
| Desktop (> 1024px) | Sidebar tetap, lebar 256px; grid penuh |

## Cara Menjalankan

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## Struktur Proyek

```
pkpn-dashboard/
├── app/
│   ├── globals.css          # CSS variables shadcn/ui + Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Halaman utama
├── components/
│   ├── ui/                  # Komponen shadcn/ui
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   └── sheet.tsx        # Mobile sidebar drawer
│   └── dashboard/
│       ├── PkpnDashboard.tsx        # Root — nav state & sidebar
│       ├── ui.tsx                   # Primitif dashboard (KpiCard, dll)
│       └── sections/
│           ├── Beranda.tsx
│           ├── AnalisBKPN.tsx
│           ├── TahapPN.tsx
│           ├── PenyelesaianTarget.tsx
│           ├── TopDebitur.tsx
│           └── EksposurRecovery.tsx
├── lib/
│   ├── data.ts              # Semua data statis
│   └── utils.ts             # Helper cn()
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

## Menu Navigasi

| Menu | Deskripsi |
|---|---|
| Beranda | Overview & KPI utama |
| Analisis BKPN | Status, wilayah, jaminan & usia piutang |
| Tahap PN | Funnel SP3N → Penyitaan → SPPBS |
| Penyelesaian & Target | Tren SPPNL, SPPNS, PSBDT, FocusPN |
| Top Debitur | 10 debitur & penyerah terbesar |
| Eksposur & Recovery | Risk exposure & recovery rate per wilayah |

## Data

Semua data berada di `lib/data.ts` dan bersifat statis (ilustrasi per Mei 2025).
Untuk produksi, ganti dengan fetching dari API masing-masing endpoint.
