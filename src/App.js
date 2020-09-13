//importare React 
import React from 'react';
import Post from './Post';




//we create this function that allow to write html code in js
function App() {                                                              //for see what i do in <Post/> go to Post.js, with this function in React we can create content with the similar html code 
  return (
      
      <div>
      <h1>Reactbook</h1>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </div>
   
  )
}

export default App;
