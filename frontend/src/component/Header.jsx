import React from 'react'
import Filters from './Filters'

function Header({onSearch}) {
  const handleSearchInput = (e) => {
    const searchValue = e.target.value;
    onSearch(searchValue); // Call the search function from App.js
  };

  return (

  <div className='  h-20 bg-slate-600 flex justify-between  p-3 '>
        
        <h1 className=' text-4xl text-red-600 font-bold'>Foody Zone</h1>

    <div>
    <input
     onChange={handleSearchInput}
className="rounded-sm border-2 border-rose-500 text-black px-3 py-2 placeholder-gray-500 placeholder-opacity-50"
type="text"
placeholder="Search Food..."
/>
    </div>



</div>


  
  )
}

export default Header