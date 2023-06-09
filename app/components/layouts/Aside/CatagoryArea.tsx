/**
 * components/layouts/Aside/CategoryArea
 * @package components
 */
import Link from 'next/link'
import React from 'react'
/* components */
import { AsideSectionArea } from '@/components/layouts/Aside/AsideSectionArea'
/* apis */
import { getCategoriesApi } from '@/apis/CategoryApi'
/* styles */
import styles from '@/styles/layouts/aside/categoryArea.module.scss'

/**
 * CategoryArea
 * @returns
 */
export const CategoryArea = async () => {
  const data = await getCategoriesApi()
  const categories = data

  return (
    <>
      <AsideSectionArea title="カテゴリー">
        <div className={styles.container}>
          <ul className={styles.lists}>
            {categories.length > 0 &&
              categories.map((category, index) => {
                return (
                  <li className={styles.list} key={`${category.id}_${index}`}>
                    <Link href={`category/${category.id}`}>
                      <div className={styles.category}>
                        <span>{category.name}</span>
                      </div>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </div>
      </AsideSectionArea>
    </>
  )
}
