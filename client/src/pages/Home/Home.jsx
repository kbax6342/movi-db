import React from 'react'
import Search from "../../components/Search/Search"
import { Trending } from '../../components/Trending/Trending'
import User from "../../components/User/User"
import { Leaderboard } from '../../components/Leaderboard/Leaderboard'

const Home = () => {
  return (
    <div className=''>
   
     <Search />
     <Trending type="Trending"/>
     <Leaderboard />
    </div>
  )
}

export default Home
