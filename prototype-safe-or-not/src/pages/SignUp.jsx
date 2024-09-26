import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client";
import Navbar from "../components/Navbar";
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });
      if (error) throw error;
      alert('Check your email for verification link');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="form-container">
      <Navbar />
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange}
        />
        <input
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <input
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      Already have an account? <Link to='/login'>Login</Link>
    </div>
  );
}

export default SignUp;
