import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Elder Scrolls']);


  const onAddCategory = (search) =>{

    if ( categories.includes(search) ) return;

    setCategories([search, ...categories])
  }

  return (
    <>
        <h1>Gif expert app</h1>

        <AddCategory onAddCategory={ onAddCategory }/>

        {
          categories.map( (category) =>  (
              <GifGrid key={category} category={category}/>
          ))
          
        }


    </>
  )
}
