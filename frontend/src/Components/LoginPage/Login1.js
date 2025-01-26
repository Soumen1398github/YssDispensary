import React, { useEffect, useState } from "react";
//import ReactDOM from 'react-dom';
import { ToastContainer, toast } from "react-toastify";
import "./Login1.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../Navbar/Navbar";

function Login() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    accountType: "doctor",
  });
  const [post1, setPost1] = useState({
    name1: "",
    password1: "",
    accountType1: "doctor",
  });

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };
  const handleAccountTypeChange = (event) => {
    setPost({ ...post, accountType: event.target.value });
  };
  const handleInput1 = (event) => {
    setPost1({ ...post1, [event.target.name]: event.target.value });
  };
  const handleAccountTypeChange1 = (event) => {
    setPost1({ ...post1, accountType1: event.target.value });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(post);
      console.log(post.accountType);
      const { data } = await axios.post(
        `http://localhost:5050/${post.accountType}/signup`,
        post,
        config
      );
      toast.success("Signup complete", {
        position: "top-center",
      });
      setTimeout(() => {
        // window.location.reload();
        // // navigate("/")
      }, 1000);
    } catch (error) {
      toast.error("Signup failed", {
        position: "top-center",
      });
      console.log("Error from signup page" + error);
    }
  };

  const submitForm = async (event) => {
    try {
      event.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(post1);
      console.log(post1.accountType1);
      const response = await axios.post(
        `http://localhost:5050/${post1.accountType1}/login`,
        post1,
        config
      );
      console.log(response);
      const { data } = response;
      const name = data.name;
      console.log(name);
      const token = data.token;
      localStorage.setItem("token",token)
      localStorage.setItem("name", name);
      localStorage.setItem("dctr",post1.accountType1)
      if (post1.accountType1 === "doctor" && data.success === true) {      
        navigate("/logindoctor",{state:{name:name}});
        window.location.reload();
      } else if (post1.accountType1 === "user" && data.success === true) {
        navigate("/loginuser",{state:{name:name}});
        window.location.reload();      
      }
    } catch (error) {
      console.log("Error" + error);
    }
  };

  useEffect(() => {
    const signInButton = document.getElementById("signIn");
    const signUpButton = document.getElementById("signUp");
    const container = document.getElementById("container");

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);
  }, []);

  return (
    <>
    <NavBar/>
    <div id="mainlogin">
      <ToastContainer />
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={submitHandle}>
            <h1>Create Account</h1>
            <select
              className="custom-select"
              value={post.accountType}
              onChange={handleAccountTypeChange}
            >
              <option value="doctor">Doctor</option>
              {/* <option>Receptionist</option> */}
              <option value="user">Patient</option>
              {/* <option>Admin</option> */}
            </select>
            <input
              type="text"
              placeholder="Name"
              onChange={handleInput}
              name="name"
            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleInput}
              name="email"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handleInput}
              name="password"
            />
            <input
              type="text"
              placeholder="About you"
              onChange={handleInput}
              name="about"
            />
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#" onSubmit={submitForm}>
            <h1>Sign in</h1>
            <select
              className="custom-select"
              value={post1.accountType1}
              onChange={handleAccountTypeChange1}
            >
              <option value="doctor">Doctor</option>
              <option value="user">Patient</option>
            </select>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput1}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput1}
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">LogIn</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Log In
              </button>
            </div>

            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <h3>Don't have any account ?</h3>
              <p>
                Click below for <b>Sign up</b>
              </p>
              <button className="ghost" id="signUp">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
