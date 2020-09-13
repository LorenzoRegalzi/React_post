import React from 'react';
import './App.css';                                         //in thi file import the style using the class with similar html style

function Post(props){                                            //in this function create the html code of Post
    return(
        <div className='Post'>
        <h3>{props.author}</h3>
        <p>{props.text}</p>
        <button>Like</button>
        </div>
    );
};


export default Post;                                //Is most important for the function of code export the file 