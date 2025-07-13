import React, { useState } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Link } from "react-router-dom";
import All from "./pages/All";



export default function App() {
  const categories = [
    {id:1, label: 'All', path: '/' },
    {id:2, label: 'Breakfast', path: '/breakfast' },
    {id:3, label: 'Lunch', path: '/lunch' },
    {id:4, label: 'Shakes', path: '/shakes' },
  ]
  const [activeCategory, setActiveCategory]=useState('')
  console.log(activeCategory);
  
  return (
    <div className="max-w-container mx-auto pt-10">
    <div>
        <div className="w-full text-center font-semibold text-2xl relative inline-block">
          Our Menu
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[50px] h-[2px] bg-[#da7b28]"></span>
        </div>
        <nav>
          <ul className="flex gap-2 justify-center mt-8">
            {categories.map(data=>(
              <li onClick={e => setActiveCategory(data.label)} className={`px-4 py-2 text-sm ${activeCategory===data.label?'bg-[#d29055] rounded-sm text-zinc-50':'bg-zinc-100'}`} key={data.id}>
              <Link to={data.path}>{data.label}</Link>
            </li>
            ))}
          </ul>
        </nav>
      </div>
    <AppRoutes/>
    </div>
  );
}
