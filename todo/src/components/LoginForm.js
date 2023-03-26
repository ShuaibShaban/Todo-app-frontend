import React, { useState } from 'react';
import './Log-in.css'

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can make an API call to verify the user's credentials
    // For simplicity, we're just checking if the username and password are valid
    if (username === 'shaban' && password === '4847') {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='login'>
            
                <img
                    className="login__logo"
                    src='https://edita.com.eg/wp-content/uploads/2020/06/todo-logo.png' 
                />
            
     <div className='login__container'>
                <h2>Sign-in</h2>
    <form onSubmit={handleSubmit}>
      
      <h5>username</h5>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      
      
       <h5>Password:</h5> 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      
      <button type="submit" className='login__signInButton'>Sign In</button>
    </form>
    </div>
    </div>
  );
};

export default LoginForm;