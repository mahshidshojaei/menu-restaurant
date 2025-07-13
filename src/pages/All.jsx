import React from 'react'
import {datas} from '../datas'
import FoodCard from '../components/FoodCard'

export default function All() {
  return (
        <div className='grid grid-cols-2 gap-8 mt-5'>
                {datas.map(item=>(
                       <FoodCard {...item} />
                ))}
        </div>
  )
}
