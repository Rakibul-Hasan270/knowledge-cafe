import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [markRead, setMarkRead] = useState(0);

  const handelBookmarks = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  const handelMark = (click, id) => {
    const newMark = markRead + click;
    setMarkRead(newMark);

    // remove from bookmarks 
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmark);
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex gap-10'>
        <Blogs handelBookmarks={handelBookmarks} handelMark={handelMark}></Blogs>
        <Bookmarks bookmarks={bookmarks} markRead={markRead}></Bookmarks>
      </div>
    </div>
  )
}

export default App
