import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import './index.css'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  const handleMarkAsRead = (id,time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    //remove bookmark
    console.log("remove",id);
    const remainingBookmark = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookmark);
  }

  return (
    <>
      <div className="md:mx-auto md:max-w-6xl">
        <Header></Header>
        <div className='md:flex md:flex-row gap-x-4'>
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks
            bookmark={bookmark}
            readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
