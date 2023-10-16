/*
import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Welcome!!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Sample home page!!!</p>
      </div>
    );
  }
}

export default Home;
*/
/*
import React from 'react';

const Home = () => {
  return (
    <main>
      <section>
        <h2>Welcome to Our Home Page</h2>
        <p>Welcome to our website's home page. We provide creative solutions for your web development needs.</p>
      </section>
    </main>
  );
}

export default Home;
*/

/*

import React from 'react';

const Home = () => {
  return (
    <div className="section">
      <h2>Welcome to Our Website!</h2>
      <p>Your compelling welcome message goes here.</p>
    </div>
  );
}

export default Home;
*/
/*
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div >
        <h2>Welcome to SK SOFTWARE Company</h2>
        <p>
          We are a leading company dedicated to delivering innovative solutions. 
        </p>
        <p>
          Explore our website to learn more about our services, products, and how we can assist you in achieving your goals.
        </p>
      </div>
    );
  }
}

export default Home;*/

import React from 'react';
import Todo from './Todo';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to SK SOFTWARE Company</h2>
        <p>We are a leading company dedicated to delivering innovative solutions.</p>
        <p>Explore our website to learn more about our services, products, and how we can assist you in achieving your goals.</p>
        <Todo />
      </div>
    );
  }
}

export default Home;
