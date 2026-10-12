import { BarChart3, CalendarCheck2, CircleDollarSign, LayoutDashboard, ScanFace, Users, Wallet } from 'lucide-react'

export const modules = [
  { title: 'Data Karyawan', icon: Users, points: ['Jabatan & divisi', 'Status kerja', 'Riwayat & dokumen'] },
  { title: 'Absensi & Kehadiran', icon: ScanFace, points: ['Absensi berbasis web', 'Rekap otomatis', 'Monitoring izin'] },
  { title: 'Cuti & Izin', icon: CalendarCheck2, points: ['Pengajuan online', 'Persetujuan atasan', 'Sisa kuota & riwayat'] },
  { title: 'Payroll', icon: Wallet, points: ['Perhitungan gaji', 'Tunjangan & potongan', 'Slip gaji digital'] },
  { title: 'Penilaian Kinerja', icon: BarChart3, points: ['Evaluasi kinerja', 'Indikator KPI', 'Laporan perkembangan'] },
  { title: 'Reimbursement', icon: CircleDollarSign, points: ['Rekap per karyawan', 'Laporan berkala', 'Ekspor Excel / PDF'] },
  { title: 'Dashboard & Laporan', icon: LayoutDashboard, points: ['Dashboard manajemen', 'Laporan real-time', 'Ekspor Excel / PDF'] },
]

export const pricing = [
  { name: 'Basic', audience: 'Untuk perusahaan kecil hingga menengah', old: 'Rp 9.990', price: 'Rp 7.499', unit: '/karyawan/bulan', features: ['Dashboard HR', 'Absensi & kehadiran', 'Pengajuan cuti / izin', 'Basic reporting', 'Face recognition (AI check-in/out)'], cta: 'Pilih Basic', href: 'mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS%20Basic' },
  { name: 'Pro', audience: 'Untuk tim yang sedang bertumbuh', old: 'Rp 12.990', price: 'Rp 9.990', unit: '/karyawan/bulan', features: ['Semua fitur Basic', 'Pengelolaan keuangan', 'Manajemen tugas', 'Penilaian kinerja (KPI)'], cta: 'Pilih Pro', href: 'mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS%20Pro', popular: true },
  { name: 'Enterprise', audience: 'Untuk korporasi dan multi-cabang', price: 'Custom', unit: 'sesuai kebutuhan', features: ['Semua fitur lengkap', 'Integrasi khusus HRIS / payroll', 'Dedicated support / SLA'], cta: 'Hubungi Sales', href: 'https://wa.me/6281511496687?text=Halo%20JAHRIS%2C%20saya%20ingin%20konsultasi%20paket%20Enterprise.' },
]

