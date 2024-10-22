import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import './index.css'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const handleAddToBookmark = blog => {
    // console.log(blog);
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <div className="md:mx-auto md:max-w-6xl">
        <Header></Header>
        <div className='md:flex md:flex-row gap-x-4'>
          <Blogs
            handleAddToBookmark={handleAddToBookmark}
          ></Blogs>
          <Bookmarks
            bookmark={bookmark}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
