import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, number, children }) =>
// {
//    return (
//       <div>
//          이름은 {name}이고,<br />
//          내용은 {children}이다.<br />
//          그리고 number :{number} 를 적었어ㅎ
//       </div>
//    )
// };
class MyComponent extends Component
{
   static defaultProps = {
      name: '기본설정',
      number: 5,
   };
   static propTypes = {
      name: PropTypes.string,
      number: PropTypes.number.isRequired
   }
   render()
   {
      const { name, number, children } = this.props;
      return (
         <div>
            이름은 {name}이고,<br />
            내용은 {children}이다.<br />
            그리고 number :{number} 를 적었어ㅎ
         </div>
      )
   }
}

MyComponent.defaultProps = {
   name: '이름'
};

MyComponent.propTypes = {
   name: PropTypes.string,
   number: PropTypes.number.isRequired
};

export default MyComponent;