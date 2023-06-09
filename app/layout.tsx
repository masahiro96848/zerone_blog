import { Metadata } from 'next'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  title: 'トップページ',
  description: 'ZEROneは学んだこと、役に立つ知識を発信していくブログです',
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
