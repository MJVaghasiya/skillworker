import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';



const Login = () => {
    return (
        <div>
            {/* NAV START */}
            <nav class="navbar">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Skill Worker</a>
                </div>
            </nav>

            {/* NAV END */}


            <div class="section">
                <div class="container">
                    {/* full-height*/}
                    <div class="row  justify-content-center">

                        <div class="col-12 text-center align-self-center py-5">
                            {/* <div class="section pb-5 pt-5 pt-sm-2 text-center"> */}

                            {/* CLASS FOR TOGGLE BUTTON */}
                            <div class="mb-0 pb-3">
                                <span className='pad-tt-fw' >Worker</span>
                                <span className='pad-tt-fw' >Business</span></div>

                            {/* CLASS FOR CLICKABLE TOGGLE */}
                            <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                            <label for="reg-log"></label>

                            {/* CLASS FOR FORM 3D ROTATE */}
                            <div class="card-3d-wrap mx-auto">


                                {/* CLASS FOR 3D WRAPPING */}
                                <div class="card-3d-wrapper">

                                    {/* FOR WORKER FORM */}
                                    <div class="card-front">

                                        {/* <div class=""> */}
                                        <div class="section text-center center-wrap">
                                            <h4 class="mb-4 pb-3 fw-bolder">Log in as Worker</h4>

                                            <div class="form-group mt-2">
                                                <input type='phone-number' name="logpass" class="form-style" placeholder="Phone Number" id="logpass" autocomplete="none" />
                                                <FontAwesomeIcon icon={faPhone} className="input-icon" /> </div>
                                            <a href="#" class="btn-login mt-4 a-class">Login</a>
                                            {/* <p class="mb-0 mt-4 text-center font-style">
                                                            <a href="#0" class="link a-class">Forgot your password?</a> </p> */}
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <div class="card-back">
                                        <div class="center-wrap">
                                            <div class="section text-center">
                                                <h4 class="mb-4 pb-3 fw-bolder">Business</h4>
                                                {/* <div class="form-group">
                                                            <input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="none" />
                                                            <i class="input-icon fa fa-user"></i> </div>*/}
                                                <div class="form-group mt-2">
                                                    <input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="none" />
                                                    <FontAwesomeIcon icon={faAt} className="input-icon" /> </div>
                                                <div class="form-group mt-2">
                                                    <input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="none" />
                                                    <FontAwesomeIcon icon={faLock} className="input-icon" /> </div>
                                                <a href="#" class="btn-login mt-4  a-class">Signup</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login
