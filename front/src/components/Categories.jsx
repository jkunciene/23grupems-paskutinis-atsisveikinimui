import { useState, useEffect } from 'react';

import categoryService from '../services/categoryService';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  //gautus duomenis is API, isideti i state
const categoriesData = ()=>{
  categoryService.getAllCategories()
  .then(res => {
    if (res !== undefined) {
      setCategories(res);
    }
  })
}

useEffect(()=>{
  categoriesData();
}, [])

console.log(categories);

  return (
    <div>
      {
        categories !== undefined && categories.length !== 0 ? 
        categories.map((cat, index)=>(
          <div key={index}>
            <h3>{cat.name}</h3>
          </div>
        )) : <h2>Cia galetu buti Jusu reklama</h2>
      }
    </div>
  )
}

export default Categories
