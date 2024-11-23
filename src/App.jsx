import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handelBookmarks = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex gap-10'>
        <Blogs handelBookmarks={handelBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
