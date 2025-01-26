import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPopup() {
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const [loginType,setLoginType] = useState("")

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const submitHandle = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(post);
    try {
      const response = await axios.post(
        `http://localhost:5050/${loginType}/login`,
        post,
        config
      );
    //   const { data } = response;
    //   const id = data.userId;
    //   const name = data.name;
    //   const token = data.token;
    //   const email = data.email;

    //   if (data.isAdmin) {
    //     toast.success("Login successful", {
    //       position: "top-center",
    //     });
    //     localStorage.setItem("id", id);
    //     localStorage.setItem("name", name);
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("email", email);
    //     setTimeout(() => {
    //       navigate("/afteradmin");
    //     }, 1000);
    //   } else {
    //     toast.success("Login successful", {
    //       position: "top-center",
    //     });
    //     localStorage.setItem("token", token);
    //     localStorage.setItem("id", id);
    //     localStorage.setItem("name", name);
    //     localStorage.setItem("email", email);
    //     setTimeout(() => {
    //       navigate("/afterlogin");
    //     }, 1000);
    //   }
    } catch (error) {
      console.error("Error fetching login", error);
      console.log("Login failed" + error);
      toast.error("Login failed", {
        position: "top-center",
      });
    }
  };
//   const checkAuth = async (token) => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       };
//       const response = await axios.post(
//         "https://virtualclass-yz7w.onrender.com/api/user/get-user-info",
//         token,
//         config
//       );
//       const { data } = response;
//       const id = data.id;
//       const name = data.name;
//       toast.success("Login successful", {
//         position: "top-center",
//       });

//       localStorage.setItem("id", id);
//       localStorage.setItem("name", name);
//       setTimeout(() => {
//         navigate("/afterlogin");
//       }, 1000);
//     } catch (error) {
//       console.log("Error from the user page" + error);
//     }
//   };
//   const fetchLogin = async () => {
//     const token = await localStorage.getItem("token");
//     if (token) {
//       checkAuth(token);
//     }
//   };
//   useEffect(() => {
//     fetchLogin();
//   }, []);

  return (
    <></>
    // <div>
    //   <div className="Lform-popup">
    //     <div className="Lform-box">
    //       <div className="Lform-details">
    //         <h2>Welcome Back</h2>
    //         <p>Please Login with your personal Email!</p>
    //       </div>
    //       <div className="Lform-contant">
    //         <h2>LOGIN</h2>
    //         <form about="" onSubmit={submitHandle}>
    //           <div className="Linput-field">
    //             <input
    //               type="text"
    //               required
    //               onChange={handleInput}
    //               value={post.email}
    //               name="name"
    //             />
    //             <label>Email</label>
    //           </div>
    //           <div className="Linput-field">
    //             <input
    //               type="password"
    //               required
    //               onChange={handleInput}
    //               value={post.email}
    //               name="password"
    //             />
    //             <label>Password</label>
    //           </div>

    //           <a href="#" className="forgot-pass">
    //             Forgot Password?
    //           </a>
    //           <button type="submit">Log In</button>
    //         </form>
    //         <div className="bottom-link">
    //           Don't have an account?
    //           <a href="#">SignUp</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LoginPopup;
