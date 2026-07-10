import { useState } from "react";

import { Link,useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import API from "../api/axios";

import "../styles/auth.css";

const Register=()=>{

    const navigate=useNavigate();

    const [form,setForm]=useState({

        name:"",
        email:"",
        password:""

    });

    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };

    const handleSubmit=async(e)=>{

        e.preventDefault();

        try{

            await API.post(

                "/auth/register",

                form

            );

            toast.success(

                "Registration Successful"

            );

            navigate("/login");

        }

        catch(err){

            toast.error(

                err.response?.data?.message ||

                "Registration Failed"

            );

        }

    };

    return(

        <div className="auth-container">

            <div className="auth-card">

                <h2>Create Account</h2>

                <form onSubmit={handleSubmit}>

                    <input

                        className="form-control"

                        placeholder="Name"

                        name="name"

                        value={form.name}

                        onChange={handleChange}

                    />

                    <input

                        className="form-control"

                        placeholder="Email"

                        name="email"

                        value={form.email}

                        onChange={handleChange}

                    />

                    <input

                        className="form-control"

                        placeholder="Password"

                        type="password"

                        name="password"

                        value={form.password}

                        onChange={handleChange}

                    />

                    <button className="btn btn-primary">

                        Register

                    </button>

                </form>

                <p className="text-center mt-3">

                    Already have an account?

                    <Link to="/login">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Register;