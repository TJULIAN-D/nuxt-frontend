export interface CarData {
  id: number
  title: string | null
  slug: string | null
  body: string | null
  metaTitle: string | null
  metaDescription: string | null
  ogTitle: string | null
  ogDescription: string | null
  ogImage: string | null
  ogType: string | null
  createdAt: string
  updatedAt: string
  createdBy: number
  updatedBy: number
  internal: number
  isHome: boolean | null
  options: Record<string, never> // or specify the keys if known
  systemName: string
  template: string
  type: string
  status: boolean | null
  recordType: string

  // localized content
  es?: CarLocale
  [locale: string]: CarLocale | unknown
}

export interface CarLocale {
  title: string
  slug: string
  status: boolean
  body: string
  metaTitle: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogType: string
}
