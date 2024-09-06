import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname||"/"
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = async (data) => {
        const userinfo ={
            fullname:data.fullname,
            email:data.email,
            password:data.password,
        }
        // console.log(data);
        await axios
        .post("http://localhost:4001/user/signup",userinfo)
        .then((res)=>{
        console.log(res.data);
        if(res.data){
            toast.success('SignUp successfull!');
            navigate(from,{replace:true});
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
    })
    .catch((err)=>{
        if(err.response){
        console.log(err);
        toast.error("Error: "+err.response.data.message)
        }

    })
        
    };
    return (
        <div className='flex h-screen items-center justify-center'>
            <div className='w-[600px]'>
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close Button */}
                        <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                            ✕
                        </Link>
                        <h3 className='font-bold text-lg'>SIGN UP</h3>
                        {/* Form Fields */}
                        <div className='mt-4 space-y-2'>
                            <label>Name</label>
                            <input
                                type='text'
                                placeholder='Enter your name'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register('fullname', { required: 'Name is required' })}
                            />
                            {errors.fullname && <p className='text-red-500'>{errors.fullname.message}</p>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <input
                                type='email'
                                placeholder='Enter your email id'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <input
                                type='password'
                                placeholder='Enter your password'
                                className='w-80 px-3 py-1 border rounded-md outline-none'
                                {...register('password', { required: 'Password is required' })}
                            />
                            {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        </div>
                        <div className='flex justify-around mt-6'>
                            <button
                                type='submit'
                                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
                            >
                                SignUp
                            </button>
                            <p className='text-xl'>
                                User already existing?{' '}
                                <button
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById('my_modal_3')?.showModal()}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
                {/* Place Login component outside of form */}
                <Login />
            </div>
        </div>
    );
}

export default Signup;