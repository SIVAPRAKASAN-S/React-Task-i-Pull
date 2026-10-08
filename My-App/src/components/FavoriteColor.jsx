// import {useState} from 'react';
// function FavoriteColor() {
//   const [color, setColor] = useState('red');
//   return (
//     <>
//     <h1>Your favorite color is {color}</h1>;
//     <button onClick={() => {setColor('blue');}}>Change to Blue</button>
//     </>
    
      
   
//   );
// }  

// export default FavoriteColor;


import { useState } from 'react';

function FavoriteColor() {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1>Your favorite color is {color}</h1>

      <button onClick={() => setColor('blue')}>
        Change to Blue
      </button>
    </>
  );
}

export default FavoriteColor;