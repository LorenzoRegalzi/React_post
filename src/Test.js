import React from 'react';


function Test() {
    const stampa = () => {console.log('guarda che to fatto')}
    return (
        <button onClick={stampa}>cliccami</button>
  );
}

export default Test;