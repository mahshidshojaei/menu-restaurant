import React from 'react'
import {datas} from '../datas'
import FoodCard from '../components/FoodCard'

export default function Lunch() {
  let filteredByLunch=datas.filter(item=>item.category==='lunch')
  return (
    <div className='grid grid-cols-2 gap-8 mt-5'>
      {filteredByLunch.map(item=>(
        <FoodCard {...item} />
      ))}
    </div>
  )
}