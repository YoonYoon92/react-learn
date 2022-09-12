import React, { Component } from 'react';
import IterationSample from './Iteration/IterationSample';


// const App = () =>
// {
//   return
//   <div>
//     <ScrollBox ref={(ref) => this.ScrollBox = ref} />;
//     <button onClick={() => this.ScrollBox.scrollToBottm()}>
//       맨밑으로
//     </button>
//   </div>
// };

class App extends Component
{
  render()
  {
    return (
      <IterationSample />
    );
  }
}

export default App;
