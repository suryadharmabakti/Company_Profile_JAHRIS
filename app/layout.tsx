import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://jahris.id'),
  title: 'JAHRIS',
  description: 'JAHRIS menyatukan data karyawan, absensi, cuti, payroll, keuangan, dan manajemen tugas dalam satu platform HR berbasis web.',
  keywords: ['JAHRIS', 'HR Management System', 'HRMS', 'absensi', 'payroll', 'manajemen tugas'],
  alternates: { canonical: '/' },
  openGraph: { title: 'JAHRIS', description: 'Satu platform untuk pengelolaan SDM yang lebih terarah.', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: '/images/brand/icon.png', type: 'image/png' }],
    shortcut: ['/images/brand/icon.png'],
    apple: [{ url: '/images/brand/icon.png', type: 'image/png' }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body className="font-sans">{children}</body></html>
}
