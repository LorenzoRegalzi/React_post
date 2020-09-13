//importare React 
import React from 'react';
import Post from './Post';




//we create this function that allow to write html code in js
function App() {                                                              //for see what i do in <Post/> go to Post.js, with this function in React we can create content with the similar html code 
  return (
      
      <div>
      <h1>Reactbook</h1>
      <Post author='Mary' text='good morning'/>
      <Post author='Jey' text='good morning'/>
      <Post author='Frank' text='good morning'/>
      <Post author='Robert' text='good morning'/>
      <Post author='Kay' text='good morning'/>
      <Post author='Paul' text='good morning'/>
      <Post author='David' text='good morning'/>
      <Post author='Willy' text='good morning'/>
      <Post author='Laurent' text='good morning'/>
      </div>
   
  )
}

export default App;
