import React from 'react';
import LoginForm from './LoginForm';
// import Todo from './Todo';
import TodoList from './TodoList';
// import AllPets from './AllPets'

const Home = ({ username }) => {
  return (
    <div>
      <section className='topbar'>
          <h2>Welcome, {username}!</h2>
          <p>Username: {username}</p>   
      </section>
    <div className="home">
        {/* <LoginForm /> */}
       <TodoList />
    </div>
    </div>
  );
};

export default Home;