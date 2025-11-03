import { useCallback, useEffect, useState } from 'react'

export type ViewType = 'list' | 'grid'

export function useViewType() {
  const [viewType, setViewType] = useState<ViewType>('list')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewType((localStorage.getItem('viewType') as ViewType) || 'list')
    }
  }, [])

  const toggleViewType = useCallback((newViewType: ViewType) => {
    setViewType(newViewType)
    if (typeof window !== 'undefined') {
      localStorage.setItem('viewType', newViewType)
    }
  }, [])

  return {
    viewType,
    toggleViewType,
  }
}
