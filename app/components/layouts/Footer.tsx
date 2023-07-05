import Link from 'next/link'
import React from 'react'

import styles from '@/styles/modules/footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        <Link href="/">
          <li className={styles.list}>Top</li>
        </Link>
        <li className={styles.border}>|</li>
        <Link href="/policy">
          <li className={styles.list}>免責事項・プライバシーポリシー</li>
        </Link>
      </ul>

      {/* copyright */}
      <p className={styles.copy}>
        © &nbsp;<span>2023 ZEROne.</span>
      </p>
    </div>
  )
}
