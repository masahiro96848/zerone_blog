/**
 * api/preview
 */
import { NextApiResponse, NextApiRequest } from 'next'
/* config */
import globalAxios from '@/config/globalAxios'

/**
 * constant
 */
const BASE_URL = `${
  process.env.MICROCMS_SERVICE_DOMAIN || 'http://localhost:3000/'
}/blogs/`

/**
 * プレビューAPI
 */
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!req.query.slug) {
    return res.status(404).end()
  }

  const content = await globalAxios.get(
    `${BASE_URL}${req.query.slug}?fields=id&draftKey=${req.query.draftKey}`,
  )

  if (!content) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  res.setPreviewData({
    blogId: content.data.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/${content.data.id}` })
  res.end('Preview mode enabled')
}

export default preview
