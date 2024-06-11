import { useEffect, useState } from 'react'
import { CreateUnselected } from './icons/Create'
import { ExploreUnselected } from './icons/Explore'
import { HomeSelected } from './icons/Home'
import { NotificationsUnselected } from './icons/Notifications'
import { SearchBtnIcon } from './icons/Search'
import { Link } from 'react-router-dom'
import { MenuIcon } from './icons/Menu'
import MoreModal from './MoreModal'

const Navbar = () => {

const [profile, setProfile] = useState({
  userName: '',
  profilePic: '',
})


const [openMoreMenu, setOpenMoreMenu] = useState(false)


  return (
<>
    <nav>
    <h1>SnapShare</h1>
    <div>
    <Link to={'/'}> 
    <HomeSelected />
    <h1>Home</h1>
    </Link>
    <ul>
    <SearchBtnIcon />    
    <h1>Search</h1>
    </ul>
    <Link to={''}>
    <ExploreUnselected />
    <h1>Explore</h1>
    </Link>
    <ul>
    <NotificationsUnselected />
    <h1>Notifications</h1>
    </ul>
    <ul>
    <CreateUnselected />
    <h1>Create</h1>
    </ul>
    <Link to={`/profile/${profile.userName}`}>
    <img src={profile.profilePic}/>
    <h1>{profile.userName}</h1>
    </Link>
    <ul onClick={() => setOpenMoreMenu(!openMoreMenu)}>
    <MoreModal isOpen={openMoreMenu} />
    <MenuIcon />
    <h1>More</h1>
    </ul>
    </div>
  </nav>
  </>
  )
}

export default Navbar