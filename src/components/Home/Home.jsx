import React from 'react'
import NavHeader from './NavHeader/NavHeader'
import Intro from './Intro/Intro'
import HsProps from './HsProps/HsProps'
import HomeAbout from './HomeAbout/HomeAbout'
import Counter from './Counter/Counter'
import Projects from './Projects/Projects'
import HappyClients from './HappyClients/HappyClients'
import PricePlan from './PricePlan/PricePlan'
import RecentBlogs from './RecentBlogs/RecentBlogs'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
        <NavHeader/>
        <Intro/>
        <HsProps/>
        <HomeAbout/>
        <Counter/>
        <Projects/>
        <HappyClients/>
        <PricePlan/>
        <RecentBlogs/>
        <Footer/>
    </div>
  )
}

export default Home
