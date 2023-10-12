/*
//import logo from './logo.svg';
import './App.css';
import Header from './header';
import Component from './Component';
import Footer from './Footer';
function App() {
  return (
  <div>
    <Header/>
    <Component/>
    <Footer/>
  </div>
  );
}
export default App;*/
/*
import React from 'react';
import SignUpForm from './SignUpForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <SignUpForm />
      </div>
    );
  }
}

export default App;
*/
/*
//usestate
//===============
import React, { useState } from 'react'

function App() {
  const[counts,setCounts]=useState(0);

  function handleSubmit1()
  {
    setCounts(counts+1)
  }
  function handleSubmit2()
  {
    setCounts(counts-1)
  }

  return (
    <div>
      <span>{counts}</span>
      <button onClick={handleSubmit2}>Decrement</button>
      <button onClick={handleSubmit1}>Increment</button>
    </div>
  )
}

export default App

*/
/*
//title change-useEffect
//=======================

import React, { useState, useEffect } from 'react';
function App() {
  // State hook: useState
  const [count, setCount] = useState(0);
  // Effect hook: useEffect
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
 
  );
}

export default App;
*/

/*
//USESTATE CLASS
//===============

import React, { Component } from 'react';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
*/

/*
//usestate
//=========

import { useState, useEffect } from 'react';

function App() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const handleStatusChange = (status) => setIsOnline(status.isOnline);
    
    setInterval(() => {
      const randomStatus = Math.random() < 0.5; 
      handleStatusChange({ isOnline: randomStatus });
    }, 1000);

  }, []);

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}

export default App;
*/

/*
//uselayout
//==========

import { useRef, useLayoutEffect ,useEffect} from "react";
function App({color}) {
      const ref = useRef();

      useLayoutEffect(() => {
          const refColor = ref.current.style.color;
          console.log(`${refColor} will always be the same as ${color}`);
          ref.current.style.color = "rgba(255,0,0)";
      }, [color]);

      useEffect(() => {
          const refColor = ref.current.style.color;
          console.log(`but ${refColor} can be different from ${color} if you play with theDOM`
      );
      }, [color]);

      return (
      <div ref={ref} style={{ color: color }}>
      Hello React hooks !
      </div>
 );}
 export default App;
*/
/*
 //USE CONTEXT
//===============

import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <MyContext.Provider value={{ count, increment, decrement }}>
      {children}
    </MyContext.Provider>
  );
};


const Counter = () => {
  const { count, increment, decrement } = useContext(MyContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};


function App() {
  return (
    <MyProvider>
      <Counter />
    </MyProvider>
  );
}

export default App;
*/



/*

//USE MEMO
//============


import React, { useState, useMemo } from 'react';

function App(props) {
  const [color, setColor] = useState('#fff');
  const [letter, setLetter] = useState('a');

  const handleColorChange = useMemo(() => () => setColor(randomColor()), []);
  const handleLetterChange = useMemo(() => () => setLetter(randomLetter()), []);

  const randomColor = () => {
    // Replace with your logic to generate a random color
    // For example, you can use Math.random() and convert it to a valid color format
    return '#' + Math.random().toString(16).substr(-6);
  };

  const randomLetter = () => {
    // Replace with your logic to generate a random letter
    // For example, you can pick a random letter from an array of letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters.charAt(randomIndex);
  };

  return (
    <div>
      <button onClick={handleColorChange}>Change Color</button>
      <button onClick={handleLetterChange}>Change Letter</button>
      <hr />
      <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}

export default App;
*/
/*
//usecallback
//===========
import React, { useState, useCallback } from 'react';

function App(props) {
  const [color, setColor] = useState('#fff');
  const [letter, setLetter] = useState('a');

  const handleColorChange = useCallback(() => setColor(randomColor()), []);
  const handleLetterChange = useCallback(() => setLetter(randomLetter()), []);

  const randomColor = () => {
    // Replace with your logic to generate a random color
    // For example, you can use Math.random() and convert it to a valid color format
    return '#' + Math.random().toString(16).substr(-6);
  };

  const randomLetter = () => {
    // Replace with your logic to generate a random letter
    // For example, you can pick a random letter from an array of letters
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters.charAt(randomIndex);
  };

  return (
    <div>
      <button onClick={handleColorChange}>Change Color</button>
      <button onClick={handleLetterChange}>Change Letter</button>
      <hr />
      <h1 style={{ color }}>{letter}</h1>
    </div>
  );
}

export default App;


*/

/*


//PROPS
//======
import React, { useState } from "react";
import './App.css';
export const Parent = () => {
  const [userName, setUserName] = useState("hii");

  const handleUserNameChange = (newUserName) => {
    setUserName(newUserName);
  };

  return (
    <div>
      <Child userName={userName} />
      <GrandChild onUserNameChange={handleUserNameChange} />
    </div>
  );
};

export const Child = (props) => {
  const { userName } = props;

  return <h1>{userName}</h1>;
};

export const GrandChild = (props) => {
  const { onUserNameChange } = props;

  return (
    <div>
      <button onClick={() => onUserNameChange("hey")}>Click here</button>
    </div>
  );
};

*/

/*
import './App.css';
import HeaderBar from './js/HeaderBar';
function App() 
{
  return (
    <div>
      <HeaderBar />
    </div>
  );
}
export default App;
*/

/*
import React, { useState } from 'react';
import HeaderBar from './HeaderBar';

function App() {
  const [counts, setCounts] = useState(0);

  function handleSubmit1() {
    setCounts(counts + 1);
  }

  function handleSubmit2() {
    setCounts(counts - 1);
  }

  return (
    <div>
      <HeaderBar /> 
      <span>{counts}</span>
      <button onClick={handleSubmit2}>Decrement</button>
      <button onClick={handleSubmit1}>Increment</button>
    </div>
  );
}

export default App;
*/
/*

import React from 'react';
import './App.css';
import HeaderBar from './js/HeaderBar';
import SignUpForm from './js/SignUpForm';

function App() {
  return (
    <div>
      <HeaderBar />
      <SignUpForm />
    </div>
  );
}
export default App;
*/

/*
import {Routes,Route,Link} from 'react-router-dom';
import './App.css';
import Header from './js/header';
import Footer from './js/Footer';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Header</Link></li>
          <li><Link to="/footer">Footer</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/about" element={<Footer/>}/>
      </Routes>
    </div>
  )
}
export default App;
*/



import React from 'react';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Home from './js/Home';
import About from './js/About';
 function App() {
  return (
    <div>
    <nav>
      <ul> 
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        </ul>
    </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      
    </div>
  );
}

export default App;



