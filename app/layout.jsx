import './globals.css'

export const metadata = {
  title: 'JAHRIS | Sistem Manajemen SDM Berbasis Web',
  description: 'JAHRIS membantu perusahaan mengelola SDM, absensi, payroll, keuangan, dan tugas dalam satu platform.',
  openGraph: { title: 'JAHRIS HR Management System', description: 'Less Administration, More Productivity.' },
}

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>
}
