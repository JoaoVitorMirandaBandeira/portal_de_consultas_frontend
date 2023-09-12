'use client'
import './globals.css'
import { ThemeProvider } from '@mui/system';
import theme from '../../theme'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400', // Peso da fonte
  subsets: ['latin'], // Subconjuntos de caracteres (ajuste conforme necessário)
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
