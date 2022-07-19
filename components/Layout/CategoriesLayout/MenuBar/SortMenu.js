import React from 'react'
import Select from '@components/UIComponent/Select'

const menuItems = [
  { value: 1, label: 'Featured' },
  { value: 2, label: 'Newest' },
  { value: 3, label: 'Trending' },
  { value: 4, label: 'Favorites' }
]

export default function SortMenu() {
  const items = menuItems
  return <Select title={'Sort by:'} items={items} defaultValue={1} />
}
