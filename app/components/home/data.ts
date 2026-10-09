import { BarChart3, CalendarCheck2, CircleDollarSign, Database, LayoutDashboard, ScanFace, Shield, Sparkles, Users, Wallet } from 'lucide-react'

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

// Kept while legacy sections remain in the page source.
export const benefits = [['01', 'Bekerja dari mana saja', 'Akses melalui laptop maupun smartphone, tanpa memasang aplikasi khusus.'], ['02', 'Mudah digunakan', 'Antarmuka modern membantu tim HR dan karyawan bekerja lebih nyaman.'], ['03', 'Siap untuk banyak perusahaan', 'Satu platform dapat digunakan untuk mengelola lebih dari satu perusahaan.'], ['04', 'Mengikuti kebutuhan Anda', 'Sistem fleksibel dan dapat disesuaikan dengan proses perusahaan.'], ['05', 'Tetap membawa identitas brand', 'Pengalaman dapat diselaraskan dengan branding perusahaan.']]
export const steps = ['Analisis kebutuhan perusahaan', 'Penyesuaian sistem', 'Implementasi & konfigurasi', 'Pelatihan pengguna', 'Pendampingan & evaluasi']
export const testimonials = [{ quote: 'JAHRIS membantu tim HR kami memangkas waktu administrasi hingga 60%.', name: 'Rina Kusumawati', role: 'HR Manager', company: 'Manufaktur MultiCabang' }, { quote: 'Antarmuka JAHRIS bersih dan mudah dipahami.', name: 'Andi Pratama', role: 'Kepala Divisi SDM', company: 'Perusahaan Dagang Nasional' }, { quote: 'Implementasinya cepat dan tim siap mendampingi.', name: 'Siti Rahayu', role: 'Direktur Operasional', company: 'Jasa Konsultasi' }]
export const industries = ['Manufaktur', 'Perdagangan', 'Jasa', 'Kesehatan', 'Pendidikan', 'Logistik', 'Properti', 'Konsultan', 'Retail', 'Hospitality']
export const badges = [{ icon: Database, title: 'Rekap Real-time', desc: 'Data langsung muncul di dashboard.' }, { icon: Shield, title: 'Keamanan Berlapis', desc: 'Enkripsi & backup data rutin.' }, { icon: Sparkles, title: 'UI Ramah Pengguna', desc: 'Karyawan cepat beradaptasi.' }]
