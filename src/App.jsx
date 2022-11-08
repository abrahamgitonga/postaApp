import React from 'react'
import AddPost from './components/AddPost'
import Header from './components/Header'
import PostList from './components/PostList'

const App=()=> {
  return (
    <div className='bg-[#f0f0f0] min-h-screen'>
        <Header/>

        <AddPost/>

        <PostList/>


    </div>
  )
}

export default App