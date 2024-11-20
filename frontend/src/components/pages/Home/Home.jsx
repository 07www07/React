import React, { useState } from 'react'
import'./Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu.jsx/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Appdownload from '../../Appdownload/Appdownload'
const Home = () => {
const [category,setCategory]= useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
