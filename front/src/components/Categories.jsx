import { useState, useEffect } from 'react';

import categoryService from '../services/categoryService';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  //gautus duomenis is API, isideti i state
const categoriesData = ()=>{
  categoryService.getAllCategories()
  .then(res => console.log(res))
}

useEffect(()=>{
  categoriesData();
}, [])

  return (
    <div>
      visos kategorijos gautos is DB
    </div>
  )
}

export default Categories
