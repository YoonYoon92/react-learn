import React, { Component } from 'react';

class ScrollBox extends Component
{
  scrollToBottom = () =>
  {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  }
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
          style={style}
          ref={(ref) => { this.box = ref }}>
            <div style={innerStyle} />
         </div>
      );
   }
}

export default ScrollBox;
