import { BaseBlogPostLayout } from '@/components/layouts/Main/BaseBlogPostLayout'
/* contexts */
import { RootContextProvider } from '@/contexts'
/* styles */
import '@/styles/globals.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
