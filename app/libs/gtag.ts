/**
 * gtag
 * @package libs
 */

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''

export const existsGaId = GA_TRACKING_ID !== ''

export const pageview = (path: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: path,
  })
}

// // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// export const pageview = (url: string): void => {
//   if (!GA_TRACKING_ID) return
//   if (typeof window !== 'undefined') {
//     window.gtag('config', GA_TRACKING_ID, {
//       page_path: url,
//     })
//   }
// }

// // https://developers.google.com/analytics/devguides/collection/gtagjs/events
// type GaEventProps = {
//   action: string
//   category: string
//   label: string
//   value?: number
// }

// // NOTE: 本記事内では使用してません。イベントを測定したいページやアクションなどでご利用ください。
// export const event = ({
//   action,
//   category,
//   label,
//   value,
// }: GaEventProps): void => {
//   if (!GA_TRACKING_ID) return

//   if (typeof window !== 'undefined') {
//     window.gtag('event', action, {
//       event_category: category,
//       event_label: label,
//       value: value,
//     })
//   }
// }
