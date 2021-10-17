import React from 'react';
import ReactDOM from 'react-dom';

function Football() {
  const shoot = () => {
    <h4>Good Morning</h4>
		/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

export default Football;
