import React, { Component } from 'react';

class ScrollBox extends Component
{
   render()
   {
      const style = {
         border: '1px solid black',
         height: '300px',
         width: '300px',
         overflow: 'auto',
         position: 'reative'
      };

      const innerStyle = {
         width: '100px',
         height: '650px',
         background: 'linear-gradient(white,black)'

      };

      return (
         <div
            style={style}>
            <div style={innerStyle} />
         </div>
      );
   }
}

export default ScrollBox;