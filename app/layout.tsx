import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })

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
  return <html lang="id"><body className={`${inter.variable} ${manrope.variable} font-sans`}>{children}</body></html>
}
