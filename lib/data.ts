// lib/data.ts
// All static data for the PKPN dashboard.

export const TREND_BKPN = [
  { y: "2020", aktif: 10200, angsuran: 2340, piutang: 41.2 },
  { y: "2021", aktif: 10870, angsuran: 2560, piutang: 42.8 },
  { y: "2022", aktif: 11340, angsuran: 2780, piutang: 44.1 },
  { y: "2023", aktif: 11890, angsuran: 2910, piutang: 45.7 },
  { y: "2024", aktif: 12310, angsuran: 3090, piutang: 46.5 },
  { y: "2025", aktif: 12847, angsuran: 3241, piutang: 47.3 },
];

export const WILAYAH_BKPN = [
  { name: "Jakarta",     jaminan: 1430, tanpa: 910,  lt1: 234, s15: 876,  gt5: 1230 },
  { name: "Jawa Barat",  jaminan: 1120, tanpa: 756,  lt1: 187, s15: 654,  gt5: 1035 },
  { name: "Jawa Tengah", jaminan: 987,  tanpa: 667,  lt1: 165, s15: 612,  gt5: 877  },
  { name: "Jawa Timur",  jaminan: 876,  tanpa: 556,  lt1: 143, s15: 543,  gt5: 746  },
  { name: "Sumatera",    jaminan: 1234, tanpa: 866,  lt1: 210, s15: 876,  gt5: 1014 },
  { name: "Kalimantan",  jaminan: 543,  tanpa: 333,  lt1: 88,  s15: 298,  gt5: 490  },
  { name: "Sulawesi",    jaminan: 612,  tanpa: 375,  lt1: 99,  s15: 376,  gt5: 512  },
  { name: "Lainnya",     jaminan: 649,  tanpa: 933,  lt1: 108, s15: 443,  gt5: 1031 },
];

export const TAHAP_PN = [
  { name: "SP3N",          count: 12847, pct: 100  },
  { name: "Panggilan I",   count: 8234,  pct: 64.1 },
  { name: "Panggilan II",  count: 5187,  pct: 40.4 },
  { name: "Pern. Bersama", count: 3421,  pct: 26.6 },
  { name: "Surat Paksa",   count: 1876,  pct: 14.6 },
  { name: "Penyitaan",     count: 543,   pct: 4.2  },
  { name: "SPPBS",         count: 112,   pct: 0.9  },
];

export const PENYELESAIAN_TREND = [
  { y: "2021", SPPNL: 987,  SPPNS: 654, PSBDT: 432, Pengembalian: 234, SKPPN: 187 },
  { y: "2022", SPPNL: 1034, SPPNS: 712, PSBDT: 465, Pengembalian: 267, SKPPN: 198 },
  { y: "2023", SPPNL: 1098, SPPNS: 768, PSBDT: 423, Pengembalian: 278, SKPPN: 201 },
  { y: "2024", SPPNL: 1187, SPPNS: 823, PSBDT: 456, Pengembalian: 289, SKPPN: 194 },
  { y: "2025", SPPNL: 1234, SPPNS: 876, PSBDT: 432, Pengembalian: 298, SKPPN: 187 },
];

export const TARGET_REALISASI = [
  { y: "2021", target: 3100, realisasi: 2890 },
  { y: "2022", target: 3200, realisasi: 3076 },
  { y: "2023", target: 3400, realisasi: 3120 },
  { y: "2024", target: 3700, realisasi: 3568 },
  { y: "2025", target: 4000, realisasi: 2127 },
];

export const TOP5_PENYELESAIAN = [
  { rank: 1, nama: "PT Karyabuana Sentosa",        penyerah: "Bank BRI",     jenis: "SPPNL",  nilai: 2340, tgl: "Mar 2025" },
  { rank: 2, nama: "CV Maju Sejahtera",            penyerah: "Bank Mandiri", jenis: "SPPNS",  nilai: 1876, tgl: "Feb 2025" },
  { rank: 3, nama: "PT Graha Perkasa Tbk",         penyerah: "BJB",          jenis: "SPPNL",  nilai: 1432, tgl: "Apr 2025" },
  { rank: 4, nama: "Yayasan Pendidikan Nusantara", penyerah: "BNI",          jenis: "PSBDT",  nilai: 987,  tgl: "Jan 2025" },
  { rank: 5, nama: "UD Harapan Jaya",              penyerah: "BRI",          jenis: "SPPNS",  nilai: 765,  tgl: "Mei 2025" },
];

export const BIAD_TOP5 = [
  { rank: 1, nama: "PT Karyabuana Sentosa", biad: 543, persen: 23.1 },
  { rank: 2, nama: "CV Maju Jaya Abadi",    biad: 412, persen: 17.5 },
  { rank: 3, nama: "PT Delta Nusantara",    biad: 367, persen: 15.6 },
  { rank: 4, nama: "Kop. Bina Mandiri",     biad: 289, persen: 12.3 },
  { rank: 5, nama: "PT Sumber Makmur",      biad: 234, persen: 9.9  },
];

export const TOP10_DEBITUR = [
  { rank: 1,  nama: "PT Karyabuana Sentosa",   wilayah: "Jakarta",     outstanding: 5230, angsuran: "Ada",   usia: ">5 thn"  },
  { rank: 2,  nama: "CV Maju Jaya Abadi",      wilayah: "Jawa Barat",  outstanding: 4876, angsuran: "Tidak", usia: "1-5 thn" },
  { rank: 3,  nama: "PT Graha Perkasa Tbk",    wilayah: "Jawa Timur",  outstanding: 4123, angsuran: "Ada",   usia: ">5 thn"  },
  { rank: 4,  nama: "Kop. Bina Mandiri",       wilayah: "Jawa Tengah", outstanding: 3987, angsuran: "Tidak", usia: ">5 thn"  },
  { rank: 5,  nama: "PT Sumber Makmur",        wilayah: "Sumatera",    outstanding: 3654, angsuran: "Tidak", usia: "1-5 thn" },
  { rank: 6,  nama: "UD Harapan Jaya",         wilayah: "Jakarta",     outstanding: 3210, angsuran: "Ada",   usia: "<1 thn"  },
  { rank: 7,  nama: "PT Delta Nusantara",      wilayah: "Jawa Barat",  outstanding: 2987, angsuran: "Tidak", usia: ">5 thn"  },
  { rank: 8,  nama: "Yayasan Pendidikan N.",   wilayah: "Sumatera",    outstanding: 2654, angsuran: "Tidak", usia: "1-5 thn" },
  { rank: 9,  nama: "CV Sejahtera Bersama",    wilayah: "Jakarta",     outstanding: 2321, angsuran: "Ada",   usia: ">5 thn"  },
  { rank: 10, nama: "PT Mitra Usaha",          wilayah: "Jawa Timur",  outstanding: 1987, angsuran: "Tidak", usia: ">5 thn"  },
];

export const PENYERAH = [
  { name: "BRI",       bkpn: 2341, nilai: 9870 },
  { name: "Mandiri",   bkpn: 1987, nilai: 8230 },
  { name: "BNI",       bkpn: 1654, nilai: 6780 },
  { name: "BJB",       bkpn: 1234, nilai: 4320 },
  { name: "BTN",       bkpn: 987,  nilai: 3210 },
  { name: "BTPN",      bkpn: 765,  nilai: 2560 },
  { name: "BPD Jatim", bkpn: 543,  nilai: 1870 },
  { name: "Lainnya",   bkpn: 1336, nilai: 4540 },
];

export const RECOVERY_RATE = [
  { name: "Kalim. Timur",  rate: 42.3, status: "high" },
  { name: "DI Yogyakarta", rate: 38.7, status: "high" },
  { name: "Bali",          rate: 35.2, status: "high" },
  { name: "Jawa Tengah",   rate: 32.8, status: "high" },
  { name: "Sulawesi Sel.", rate: 28.4, status: "high" },
  { name: "Jakarta",       rate: 24.1, status: "mid"  },
  { name: "Jawa Timur",    rate: 21.7, status: "mid"  },
  { name: "Sumatera",      rate: 18.3, status: "mid"  },
  { name: "NTT",           rate: 7.8,  status: "low"  },
  { name: "Papua",         rate: 4.2,  status: "low"  },
];

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
export const FUNNEL_COLORS = [
  "#4f46e5", "#4338ca", "#3730a3", "#16a34a",
  "#d97706", "#ea580c", "#e11d48",
];

export type JenisBadge = "green" | "blue" | "amber" | "rose" | "default";

export const JENIS_BADGE: Record<string, JenisBadge> = {
  SPPNL: "green",
  SPPNS: "blue",
  PSBDT: "amber",
  Pengembalian: "rose",
  SKPPN: "default",
};

export type NavId =
  | "beranda"
  | "bkpn"
  | "tahap"
  | "penyelesaian"
  | "debitur"
  | "eksposur";

export interface NavItem {
  id: NavId;
  label: string;
}

export interface MetaItem {
  title: string;
  sub: string;
}

export const META: Record<NavId, MetaItem> = {
  beranda:      { title: "Beranda",                sub: "Overview & KPI utama piutang negara" },
  bkpn:         { title: "Analisis BKPN",          sub: "Status, wilayah, jaminan & usia piutang" },
  tahap:        { title: "Tahap Pengurusan PN",    sub: "Funnel SP3N → Panggilan I/II → PB → Surat Paksa → Penyitaan → SPPBS" },
  penyelesaian: { title: "Penyelesaian & Target",  sub: "Tren SPPNL, SPPNS, PSBDT, Pengembalian, SKPPN & FocusPN" },
  debitur:      { title: "Top Debitur & Penyerah", sub: "10 debitur outstanding terbesar & top penyerah piutang" },
  eksposur:     { title: "Eksposur & Recovery Rate", sub: "Top 10 eksposur risiko & recovery rate per wilayah" },
};
