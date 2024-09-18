import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Auth.css'
import { useForm, } from 'react-hook-form'
import { Login, Register } from '../Services/AllAPi'
import { toast } from 'sonner'

function Auth() {



    // TO check Login and Register Status
    const [LoginStatus, setLoginStatus] = useState(true)



    // Form Data
    const { register, handleSubmit, formState } = useForm()


    // Form Error Handling 
    const { errors } = formState


    // Navigate 
    const Navigate = useNavigate()



    const handleLogin = async (data) => {


        try {


            if (data) {

                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const formdata = new FormData()

                formdata.append("username", data.username)
                formdata.append("password", data.password)


                const res = await Login(formdata, reqheader)



                if (res.status >= 200 && res.status <= 300) {

                    console.log(res);

                    sessionStorage.setItem("token", res.data.access)
                    sessionStorage.setItem("user", data.username)
                    toast.success("Login Success....!")

                    setTimeout(() => {

                        Navigate('/')

                    }, 1000);

                }
                else {

                    console.log(res)
                    toast.error("Invaild Username Or Password")


                }



            }

        }
        catch (err) {


            console.log(err);



        }


    }


    const handleRegister = async (data) => {


        try {


            if (data) {


                const reqheader = {

                    "Content-Type": "multipart/form-data"

                }

                const formdata = new FormData()
                formdata.append("username", data.username)
                formdata.append("password", data.password)
                formdata.append("password_confirm", data.password2)
                formdata.append("email", data.email)


                const res = await Register(formdata, reqheader)

                if (res.status >= 200 && res.status <= 300) {

                    toast.success("Account Created...!")

                    console.log(res);

                    setLoginStatus(true)


                }
                else {

                    console.log(res);
                    toast.error(res.response.data.username || res.response.data.password || res.response.data.email || res.response.data.non_field_errors)


                }

            }

        }
        catch (err) {

            console.log(err);

        }

    }


    return (


        <>



            <section className='login'>

                <nav className='w-100 p-3'>

                    <div className='login-logo'>

                        <Link to={'/'}>

                            <img src="/xpanialogo-2.png" loading='lazy' className='img-fluid' alt="img" />

                        </Link>


                    </div>

                </nav>


                {/* Login */}
                <div className='w-100 d-flex justify-content-center align-items-center'>

                    <div className='login-form row shadow border'>


                        <div className='col-md-6 form-img'>

                            <img src="https://pitchmark.net/client/images/img-12.png" loading='lazy' className='img-fluid' alt="" />

                        </div>



                        {

                            LoginStatus ?


                                <form onSubmit={handleSubmit(handleLogin)} noValidate className='col-md-6 mt-2'>

                                    <h1>Login</h1>

                                    <input type="text" {...register("username", { required: { value: true, message: "Username is Required" } })} className='form-control' placeholder='Enter your UserName' />
                                    {errors.username?.message && <p className='text-danger small mb-0'>{errors.username.message}</p>} <br />

                                    <input type="password" {...register("password", { required: { value: true, message: "Password is Required" }, minLength: { value: 4, message: "password must be at least 4 Character Long" } })} className='form-control' placeholder='Enter Your Password' />
                                    {errors.password?.message && <p className='text-danger small'>{errors.password.message}</p>}

                                    <input type='submit' className='btn-login w-100 mt-3' value="Login" />

                                    <button className="google-login-btn mt-3 w-100">
                                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="google-icon" />
                                        Login with Google
                                    </button>

                                    <p className='text-center mt-3'>Don't have an account ? <a className='dont' onClick={() => { setLoginStatus(false) }}>Register</a></p>

                                </form>


                                :


                                <form onSubmit={handleSubmit(handleRegister)} className='col-md-6 mt-2' noValidate>

                                    <h1>Sign Up</h1>

                                    <input type="text"  {...register("username", { required: { value: true, message: "Username is Required" } })} className='form-control' placeholder='Enter your username' />
                                    {errors.username?.message && <p className='text-danger small mb-0'>{errors.username.message}</p>} <br />

                                    <input type="email"  {...register("email", { required: { value: true, message: "Email is Required" }, pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Enter a vaild email address" } })} className='form-control' placeholder='Enter your Email' />
                                    {errors.email?.message && <p className='text-danger small mb-0'>{errors.email.message}</p>}  <br />

                                    <input type="password" {...register("password", { required: { value: true, message: "Password is Required" }, minLength: { value: 4, message: "password must be at least 4 Character Long" } })} className='form-control' placeholder='Enter Your Password' />
                                    {errors.password?.message && <p className='text-danger small'>{errors.password.message}</p>}

                                    <input type="password" {...register("password2", { required: { value: true, message: "Password is Required" }, minLength: { value: 4, message: "password must be at least 4 Character Long" } })} className='form-control mt-3' placeholder=' Re-Enter Password' />
                                    {errors.password2?.message && <p className='text-danger small'>{errors.password2.message}</p>}

                                    <input type='submit' className='btn-login w-100 mt-3' value="Register" />

                                    <p className='text-center mt-3'>Already Registerd ? <a className='dont' onClick={() => { setLoginStatus(true) }}>Login</a></p>


                                </form>


                        }


                    </div>


                </div>


            </section>







        </>






    )








}

export default Auth