import React from 'react'
import {datas} from '../datas'
import FoodCard from '../components/FoodCard'

export default function Shakes() {
  let filteredByShakes=datas.filter(item=>item.category==='shakes')
  return (
    <div className='grid grid-cols-2 gap-8 mt-5'>
      {filteredByShakes.map(item=>(
        <FoodCard {...item} />
      ))}
    </div>
  )
}
