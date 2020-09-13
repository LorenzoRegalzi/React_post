import React from 'react';
import './App.css';                                         //in thi file import the style using the class with similar html style

function Post(){                                            //in this function create the html code of Post
    return(
        <div className='Post'>
        <h3>Title</h3>
        <p>Text of Post</p>
        <button>Like</button>
        </div>
    );
};


export default Post;                                //Is most important for the function of code export the file 