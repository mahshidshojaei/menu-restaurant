import React from 'react'
import {datas} from '../datas'

export default function All() {
  return (
        <div className='grid grid-cols-2 gap-8 mt-5'>
                {datas.map(item=>(
                       <div className='grid grid-cols-5 gap-4'>
                        <div className='col-span-2 border-2 border-[#d29055]'><img src={item.img} alt="" className="w-full h-[170px] object-cover" /></div>
                        <div className='col-span-3 flex flex-col'>
                                <div className='flex w-full justify-between'>
                                        <span className='font-normal text-lg'>{item.title}</span>
                                        <span className='text-[#d29055] font-semibold'>${item.price}</span>
                                </div>
                                <hr className="h-[1px] bg-gray-300 border-0" />
                                <p className='text-gray-800 text-[14px] mt-2'>{item.desc}</p>
                        </div>
                       </div> 
                ))}
        </div>
  )
}
