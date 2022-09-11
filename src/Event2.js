import React, { useState } from 'react';

const EventPractice = () =>
{
   const [name, setName] = useState('');
   const [message, setMessage] = useState('');

   const onNameChange = e => setName(e.target.value);
   const onMessageChange = e => setMessage(e.target.value);

   const onClick = () =>
   {
      alert(name + ' : ' + message);
      setName('');
      setMessage('');
   };
   const onKeyPress = (e) =>
   {
      if (e.key === 'Enter')
      {
         onClick();
      }
   }
   return (
      <div>
         <h1>input함수</h1>
         <input
            type="text"
            name="name"
            placeholder="이름입력란"
            value={name}
            onChange={onNameChange}
         />
         <input
            type="text"
            name="message"
            placeholder="메세지입력란"
            value={message}
            onChange={onMessageChange}
            onKeyPress={onKeyPress}
         />
         <button
            onClick={onClick}
         >버튼</button>
      </div>
   )

};
export default EventPractice;