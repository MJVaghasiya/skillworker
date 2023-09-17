import React from 'react'
import img1 from '../assets/Businesssignup.svg'
import img2 from '../assets/Workersignup.svg'
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div className=' bg-dark'>

            <div className='container  d-flex center'>

                <div className='sign-up-box  bg-yellow'>
                    <div className='d-flex'>
                    <h1>I want to sign up as:</h1>
                    <a role="button" href="/" class="modal-close_btn">
                        <span class="sr-only">Close Modal</span>
                        <span aria-hidden="true" class="text-span-2">×</span>
                        </a></div>
                    <div className='under-signup d-grid'>
                        {/* BUSINESS */}
                        
                        <Link to='/BusinessSignup'> <div className='business-signup d-flex bottom-border'>
                            <img className='mr-1-5' src={img1} />
                            <div className='card-side'>
                                <h2>A Business</h2>
                                <p>I'm looking for worker</p>
                            </div>
                        </div>
                        </Link>
                        
                        {/* WORKER */}
                       <Link to='/Log-in'>
                        <div className='business-signup d-flex '>
                            <img className='mr-1-5' src={img2} />
                            <div className='card-side '>
                                <h2>A Business</h2>
                                <p>I'm looking for worker</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
