//importare React 
import React, {useState} from 'react';
import Post from './Post';




//we create this function that allow to write html code in js
// function App() {                                                              //for see what i do in <Post/> go to Post.js, with this function in React we can create content with the similar html code 
//   return (
      
//       <div>
//       <h1>Reactbook</h1>
//       <Post author='Mary' text='good morning'/>
//       <Post author='Jey' text='good morning'/>
//       <Post author='Frank' text='good morning'/>
//       <Post author='Robert' text='good morning'/>
//       <Post author='Kay' text='good morning'/>
//       <Post author='Paul' text='good morning'/>
//       <Post author='David' text='good morning'/>
//       <Post author='Willy' text='good morning'/>
//       <Post author='Laurent' text='good morning'/>
//       </div>
   
//   )
// }

  
// class App extends React.Component {
     //CLASS COMPONENT
//   state = {
//     number: 0,
//   }
//   increment = () => {
//     this.setState({
//       number: this.state.number + 1
//     })
//   }
//   render() {
//     return (
//       <div>
//       <h3>counter : {this.state.number}</h3>
//       <button onClick={this.increment}>aumenta</button>
//       </div>
//     );
//   }
// }



//HOOKS
//example of fun that increment at the click of button
// alert: add te set at the import of React

// function App() {
//     //FUNCTION COMPONENT with state
//     const [count, setCount] = useState(0);
//     const increment = () => {
//       setCount(count + 1)
//     }
//     return (
//       <div>
//       <h3>counter : {count}</h3>
//       <button onClick={increment} >aumenta</button>
//       </div>
//     );
// }









function App() {

  const [posts, setPosts] = useState([
    {author:'Mary', description:'today testing day'},
    {author:'Joy', description:'today react testing day'},
    {author:'Marc', description:'today easy day'},
  ]);

  return (
    <div className='Posts'> 
      {posts.map((post, index) => (
          <Post key={index} author= {post.author} description={post.description}/>


      ))}                             
    </div>
  );
}


export default App;
