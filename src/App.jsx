import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import './index.css'

function App() {

  return (
    <>
      <div className="md:container md:mx-auto">
        <Header></Header>
        <div className='flex flex-row gap-x-4'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App
