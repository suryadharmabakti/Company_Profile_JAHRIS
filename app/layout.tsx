import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://jahris.id'),
  title: 'JAHRIS — Sistem Manajemen SDM Terpadu',
  description: 'JAHRIS menyatukan data karyawan, absensi, cuti, payroll, keuangan, dan manajemen tugas dalam satu platform HR berbasis web.',
  keywords: ['JAHRIS', 'HR Management System', 'HRMS', 'absensi', 'payroll', 'manajemen tugas'],
  alternates: { canonical: '/' },
  openGraph: { title: 'JAHRIS — Sistem Manajemen SDM Terpadu', description: 'Satu platform untuk pengelolaan SDM yang lebih terarah.', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className={`${dmSans.variable} font-sans`}>{children}</body></html>
}
