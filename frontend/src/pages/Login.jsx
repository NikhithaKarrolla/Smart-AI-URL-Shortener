import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import API from "../api/axios";
import { useAuth } from "../context/AuthContext";

import "../styles/auth.css";

const Login = () => {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [form,setForm]=useState({

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

            const res=await API.post("/auth/login",form);

            login(

                res.data.token,

                res.data.user

            );

            toast.success("Login Successful");

            navigate("/dashboard");

        }

        catch(err){

            toast.error(

                err.response?.data?.message ||

                "Login Failed"

            );

        }

    };

    return(

        <div className="auth-container">

            <div className="auth-card">

                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

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

                        Login

                    </button>

                </form>

                <p className="text-center mt-3">

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

};

export default Login;