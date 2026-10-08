import { BarChart3, CalendarCheck2, CircleDollarSign, Database, Fingerprint, LayoutDashboard, Shield, Sparkles, Users, Wallet } from 'lucide-react'

export const modules = [
  { title: 'Data Karyawan', icon: Users, copy: 'Seluruh informasi karyawan tersimpan rapi dalam satu pusat data.', points: ['Jabatan & divisi', 'Status kerja', 'Riwayat & dokumen'] },
  { title: 'Absensi & Kehadiran', icon: Fingerprint, copy: 'Catat kehadiran harian dan pantau keterlambatan lebih mudah.', points: ['Absensi berbasis web', 'Rekap otomatis', 'Monitoring izin'] },
  { title: 'Cuti & Izin', icon: CalendarCheck2, copy: 'Alur pengajuan hingga persetujuan tanpa dokumen yang tercecer.', points: ['Pengajuan online', 'Persetujuan atasan', 'Sisa kuota & riwayat'] },
  { title: 'Payroll', icon: Wallet, copy: 'Kelola penggajian dengan komponen yang transparan.', points: ['Perhitungan gaji', 'Tunjangan & potongan', 'Slip gaji digital'] },
  { title: 'Penilaian Kinerja', icon: BarChart3, copy: 'Pantau perkembangan karyawan melalui indikator yang jelas.', points: ['Evaluasi kinerja', 'Indikator KPI', 'Laporan perkembangan'] },
  { title: 'Reimbursement', icon: CircleDollarSign, copy: 'Klaim karyawan tercatat dan siap direkap kapan saja.', points: ['Rekap per karyawan', 'Laporan berkala', 'Ekspor Excel / PDF'] },
  { title: 'Dashboard & Laporan', icon: LayoutDashboard, copy: 'Informasi SDM penting hadir dalam satu tampilan.', points: ['Dashboard manajemen', 'Laporan real-time', 'Ekspor Excel / PDF'] },
]

export const benefits = [
  ['01', 'Bekerja dari mana saja', 'Akses melalui laptop maupun smartphone, tanpa memasang aplikasi khusus.'],
  ['02', 'Mudah digunakan', 'Antarmuka modern membantu tim HR dan karyawan bekerja lebih nyaman.'],
  ['03', 'Siap untuk banyak perusahaan', 'Satu platform dapat digunakan untuk mengelola lebih dari satu perusahaan.'],
  ['04', 'Mengikuti kebutuhan Anda', 'Sistem fleksibel dan dapat disesuaikan dengan proses perusahaan.'],
  ['05', 'Tetap membawa identitas brand', 'Pengalaman dapat diselaraskan dengan branding perusahaan.'],
]

export const steps = ['Analisis kebutuhan perusahaan', 'Penyesuaian sistem', 'Implementasi & konfigurasi', 'Pelatihan pengguna', 'Pendampingan & evaluasi']

export const pricing = [
  { name: 'Basic', audience: 'Untuk perusahaan kecil hingga menengah', old: 'Rp 9.990', price: 'Rp 7.499', unit: '/karyawan/bulan', features: ['Dashboard HR', 'Absensi & kehadiran', 'Pengajuan cuti / izin', 'Basic reporting'], cta: 'Pilih Basic', href: 'mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS%20Basic' },
  { name: 'Pro', audience: 'Untuk tim yang sedang bertumbuh', old: 'Rp 12.990', price: 'Rp 9.990', unit: '/karyawan/bulan', features: ['Semua fitur Basic', 'Pengelolaan keuangan', 'Manajemen tugas', 'Penilaian kinerja (KPI)'], cta: 'Pilih Pro', href: 'mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS%20Pro', popular: true },
  { name: 'Enterprise', audience: 'Untuk korporasi dan multi-cabang', price: 'Custom', unit: 'sesuai kebutuhan', features: ['Semua fitur lengkap', 'Face recognition (AI check-in/out)', 'Integrasi khusus HRIS / payroll', 'Dedicated support / SLA'], cta: 'Hubungi Sales', href: 'mailto:hrmanagementjaxer@gmail.com?subject=Konsultasi%20JAHRIS%20Enterprise' },
]

export const testimonials = [
  { quote: 'JAHRIS membantu tim HR kami memangkas waktu administrasi hingga 60%. Payroll bulanan yang biasanya 3 hari, kini selesai dalam setengah hari.', name: 'Rina Kusumawati', role: 'HR Manager', company: 'Manufaktur MultiCabang' },
  { quote: 'Yang kami sukai dari JAHRIS adalah antarmukanya yang bersih. Karyawan tanpa pelatihan pun langsung bisa mengajukan cuti dan melihat slip gaji.', name: 'Andi Pratama', role: 'Kepala Divisi SDM', company: 'Perusahaan Dagang Nasional' },
  { quote: 'Implementasinya cepat. Dalam 2 minggu sistem sudah live, dan tim JAHRIS mendampingi sampai semua user terbiasa.', name: 'Siti Rahayu', role: 'Direktur Operasional', company: 'Jasa Konsultasi 200+ Karyawan' },
]

export const industries = ['Manufaktur', 'Perdagangan', 'Jasa', 'Kesehatan', 'Pendidikan', 'Logistik', 'Properti', 'Konsultan', 'Retail', 'Hospitality']

export const badges = [
  { icon: Database, title: 'Rekap Real-time', desc: 'Data langsung muncul di dashboard.' },
  { icon: Shield, title: 'Keamanan Berlapis', desc: 'Enkripsi & backup data rutin.' },
  { icon: Sparkles, title: 'UI Ramah Pengguna', desc: 'Karyawan cepat beradaptasi.' },
]
