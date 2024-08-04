import React from 'react'
import NavHeader from '../Home/NavHeader/NavHeader'
import TeamIntro from "./TeamIntro/TeamIntro"
import TeamMembers from './TeamMembers/TeamMembers'
import Footer from '../Home/Footer/Footer'
const Team = () => {
  return (
    <div>
      <NavHeader/>
      <TeamIntro/>
      <TeamMembers/>
      <Footer/>
    </div>
  )
}

export default Team
