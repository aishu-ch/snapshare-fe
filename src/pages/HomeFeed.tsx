import {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { checkIfValidToken } from '../utils/verifyToken'

const HomeFeed = () => {
const [post, setPost] = useState([])

  return (
      <div>
      <Navbar />
      </div>
  )

}

export default HomeFeed