import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

/** styles */
import styles from '@/styles/objects/components/blogItem.module.scss'

import { BlogItemType } from '@/types/Blog'

type Props = {
  blogItem: BlogItemType
}

export const BlogItem = (props: Props) => {
  const { blogItem } = props

  return (
    <Link href="/" prefetch={false}>
      <div className={styles.container}>
        <div className={styles.image}>
          {/* <Image
          src="/sample01.png"
          width={100}
          height={100}
          alt="blog_list_image"
          className={styles.image}
        /> */}
        </div>
        <div className={styles.title}>{blogItem.title}</div>
        <div className={styles.categories}>
          <span>Jest</span>
          <span>TypeScript</span>
          <span>テストコード</span>
        </div>

        <div className={styles.date}>
          <p>{blogItem.createdAt}</p>
        </div>
      </div>
    </Link>
  )
}
