import React from 'react'
import {datas} from '../datas'
import FoodCard from '../components/FoodCard'

export default function Breakfast() {
  let filteredByBreakfast=datas.filter(item=>item.category==='breakfast')
  return (
    <div className='grid grid-cols-2 gap-8 mt-5'>
      {filteredByBreakfast.map(item=>(
        <FoodCard {...item} />
      ))}
    </div>
  )
}
