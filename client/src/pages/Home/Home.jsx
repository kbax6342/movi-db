import React from 'react'
import Search from "../../components/Search/Search"
import { Trending } from '../../components/Trending/Trending'
import User from "../../components/User/User"
import { Leaderboard } from '../../components/Leaderboard/Leaderboard'
import Genre from '../../components/Genre/Genre'
import Banner from '../../components/SBanner/Banner'

const Home = () => {
  return (
    <div className=''>
   
     <Search />
     <Trending type="Trending"/>
    <Banner />
     <Leaderboard />
     <Genre />
    </div>
  )
}

export default Home
