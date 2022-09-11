import react, { Component } from 'react';
import './ValidationSample.css';


class ValidationSample extends Component
{
   state = {
      userid: '',
      userpassword: '',
      clicked: false,
      vaildated: false
   }

   handleChange = (e) =>
   {
      this.setState(
         { [e.target.name]: e.target.value }
      );
   }

   handleClick = () =>
   {
      this.setState(
         {
            clicked: true,
            vaildated: this.state.userpassword === '0000'
         }
      );

      if (this.state.vaildated === true)
      {
         this.idinput.focus();
         console.log("성공");
      }
      else
      {
         this.input.focus();
         console.log("실패");
      }
   }

   render()
   {
      return (
         <div>
            <input ref={(ref) => this.idinput = ref}
               type="text"
               value={this.state.id}
               onChange={this.handleChange}
            />

            <input ref={(ref) => this.input = ref}
               type="password"
               name="userpassword"
               value={this.state.userpassword}
               onChange={this.handleChange}
               className={this.state.clicked ? (this.state.vaildated ? 'success' : 'failure') : ''}
            />

            <button
               onClick={this.handleClick}>검증</button>

         </div>
      );
   }
};

export default ValidationSample;