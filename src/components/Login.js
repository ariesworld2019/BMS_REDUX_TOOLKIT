import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Login = () => {
    const [users, setusers] = useState({});
    const getUserdata = (e) => {
        setusers({ ...users, [e.target.name]: e.target.value })
    }
    
    
    const navigate = useNavigate();

    const handleclick = async (e) => { 
        e.preventDefault();  
        const response = await fetch("https://ariesworldsofttech.co.in/react_php_bms/api/login.php", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(users),
        });
        const json = await response.json(); // parses JSON response into native JavaScript objects
        if (json.success==="true") {
            localStorage.setItem('user_name', json.user_name); // cookie 
            navigate("/boxstockdata"); // header:location
            toast.success("You are successfully logged-in");
        }
        else{ 
           
            // toast.error("You have enter wrong credentials",{
            //     theme:"dark",
            //     draggable: true,
            //     //icon: ({theme, type}) =>  <img src={require('./imgg.jpg')}/> 
            // });
            toast.error("You have entered wrong credentials");
             
            //dispatch(alertMsgFunction("You have enter wrong credentials")) 
            // setTimeout(() => {
            //     dispatch(alertMsgFunction(""))
            // }, 1500);
        }
   
       
        
    };


    return (
        <>
        {/* // <div className="container-fluid h-custom">
        //     <div className="row d-flex justify-content-center align-items-center h-100">
        //         <div className="col-md-9 col-lg-6 col-xl-5 my-5">
        //             <img src={require('./imgg.jpg')} className="img-fluid" alt="Sample image" />
        //         </div>
        //         <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
               
        //             <form onSubmit={handleclick}>

        //                 <div className="divider d-flex align-items-center my-4">
        //                     <p className="text-center fw-bold mx-3 mb-0" style={{ "fontSize": "30px" }}>Login here</p>
        //                 </div>


        //                 <div className="form-outline mb-4">
        //                     <input type="text" className="form-control form-control-lg"
        //                         placeholder="Enter User Name" onChange={getUserdata} id="user_name"
        //                         name="user_name" required autoFocus/>
        //                 </div>


        //                 <div className="form-outline mb-3">
        //                     <input type="password" className="form-control form-control-lg"
        //                         placeholder="Enter Password" onChange={getUserdata} id="password"
        //                         name="password" autoComplete="on" required />

        //                 </div>



        //                 <div className="text-center text-lg-start mt-4 pt-2">
        //                     <button type="submit" className="btn btn-success btn-lg"
        //                         style={{ "paddingLeft": " 2.5rem", "paddingRight": "2.5rem" }}>Login</button>
        //                 </div>

                        

        //             </form>
        //         </div>
        //     </div>
        // </div> */}
<div style={{backgroundImage: "radial-gradient( circle 759px at -6.7% 50%, rgba(80,131,73,1) 0%, rgba(140,209,131,1) 26.2%, rgba(178,231,170,1) 50.6%, rgba(144,213,135,1) 74.1%, rgba(75,118,69,1) 100.3% )", width : '100%' , height : '100%',position : 'fixed'}}>
        <div className="wrapper">
        <div className="logo">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="green" className="bi bi-box-seam-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
</svg> <b className="text-center mt-6 name">BMS</b>
        </div>
        <div>
           
        </div>
        <form className="p-3 mt-3" onSubmit={handleclick}>
            <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="text" onChange={getUserdata} id="user_name" name="user_name" placeholder="Username" required autoFocus />
            </div>
            <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" onChange={getUserdata} id="password" name="password"  placeholder="Password" required />
            </div>
            <button type="submit" className="btn mt-3" style={{backgroundImage: "linear-gradient(to right, rgb(242 112 156 / 66%), rgb(255, 148, 114))" }}>Login</button>
        </form>
    </div>
 </div>   
</>
    )
}

export default Login
