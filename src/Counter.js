import React, { Component } from 'react';

class Counter extends Component
{
   // constructor (props)
   // {
   //    super(props);
   //    this.state = {
   //       number: 0,
   //       fixnumber: 5
   //    };
   // }


   state = {
      number: 0,
      fixnumber: 0
   };


   render()
   {
      const array = [1, 2, 3];
      const [one, two] = array;
      const { number, fixnumber } = this.state;
      return (
         <div>
            <h1>{number}</h1>
            <h1>{fixnumber}</h1>
            <h3>{one}</h3>
            <h2>{two}</h2>
            <button
               onClick={() =>
               {
                  this.setState(
                     {
                        number: number + 1
                     }
                     , () =>
                     {
                        console.log('방금 클릭됐다.');
                        console.log(this.state);
                     }
                  )
               }
               }
            >
               +1
            </button>
         </div >
      );
   }
}

export default Counter;