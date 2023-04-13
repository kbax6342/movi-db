import React from 'react'
import Search from "../../components/Search/Search"
import { Trending } from '../../components/Trending/Trending'
import User from "../../components/User/User"
import Genre from '../../components/Genre/Genre'

const Home = () => {
  return (
    <div className=''>
   
     <Search />
     <Trending type="Trending"/>
     <Genre />
    </div>
  )
}

export default Home
