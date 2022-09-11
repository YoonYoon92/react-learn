import React, { Component } from 'react';

class EventPractice extends Component
{

   state = {
      name: '',
      message: ''
   }

   handleChange = (e) =>
   {
      this.setState(
         {
            [e.target.name]: e.target.value
         });
   }
   handleClick = () =>
   {
      alert(this.state.name + ' : ' + this.state.message);
      this.setState({ message: '' });
   }

   handleKeyPress = (e) =>
   {
      if (e.key === 'Enter')
      {
         this.handleClick();
      }
   }
   render()
   {
      return (
         <div>
            <h1>연습</h1>

            <input
               type="text"
               name="name"
               placeholder="이름입력란"
               value={this.state.name}
               onChange={this.handleChange}
            />
            <input
               type="text"
               name="message"
               placeholder="메세지입력란"
               value={this.state.message}
               onChange={this.handleChange}
               onKeyPress={this.handleKeyPress}
            />
            <button
               onClick={this.handleClick}>
               확인
            </button>
         </div>
      );
   }
}

export default EventPractice;