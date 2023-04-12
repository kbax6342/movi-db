import React from 'react'
import Search from "../../components/Search/Search"
import { Trending } from '../../components/Trending/Trending'
import User from "../../components/User/User"

const Home = () => {
  return (
    <div className=''>
   
     <Search />
     <Trending type="Trending"/>
    </div>
  )
}

export default Home
