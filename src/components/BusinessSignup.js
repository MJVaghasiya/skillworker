import React from 'react'

const BusinessSignup = () => {
  return (
    <div>

      {/* NAVBAR */}
      <nav class="navbar nav-pad">
        <div class="container-fluid nav-container">
          <a class="navbar-brand" href="#">Skill Worker</a>
          <form class="d-flex" role="search">
            <button class="btn btn-outline-success log-in animation  mr-1-5" type="submit">

              LOG IN</button>
            <button class="btn btn-outline-success sign-up animation " type="submit">Looking for Work?</button>
          </form>
        </div>
      </nav>
      {/* END */}
<div className='container'>
      {/* FORM START */}
      <div className='row mt-15'>
        {/* FIRST COL */}
        <div className='col-lg-6 bs-form '>
<h1 className='hero-big-font font-45' >Get matched with workers <span  className='font-red italic-font'>in minutes.</span></h1>
<h4>Signup to start filling shifts for you business.</h4>
<ul>
  <li>Gain access to thousands of workers near you</li>
  <li>All workers are vetted and have an average rating of 4.6/5</li>
  <li>Find workers you can rely on with our low 3% no-show rate</li>
</ul>
        </div>

        {/* SECOND-COL */}
        <div className='col-lg-6 bg-light p-5 form'>
          <h4>Create a Free Business Account</h4>
          <div className='form-row d-flex mb-3'>
            <div className='col-12 col-sm-6'>
            <div className='form-group d-grid'>
          <label className='form-label'>First name</label>
          <input className='form-input' type="text" placeholder='First name'/> 
          </div>
            </div>
            <div className='col-12 col-sm-6 ms-5'>
            <div className='form-group d-grid'>
          <label className='form-label'>Last name</label>
          <input className='form-input' type="text" placeholder='Last name'/> 
          </div>
            </div>
          </div>
          <div className='form-row d-flex mb-3'>
            <div className='col-12 col-sm-6'>
            <div className='form-group d-grid'>
          <label className='form-label'>Company</label>
          <input className='form-input' type="text" placeholder='Company'/> 
          </div>
            </div>
            <div className='col-12 col-sm-6 ms-5'>
            <div className='form-group d-grid'>
          <label className='form-label'>Phone number</label>
          <input className='form-input' type="tel" placeholder='Phone number'/>
          </div>
            </div>
          </div>
         
         
          <div className='form-group d-grid mb-3'>
          <label className='form-label'>Work email</label>
          <input className='form-input' type="email" placeholder='Work email'/> 
          </div>
          <div className='form-group d-grid '>
          <label className='form-label'>Password</label>
          <input className='form-input' type="password" placeholder='password'/> 
          </div>    

          <button type="button" class="btn btn-primary w-100 mt-5 mb-4">Sign up for free</button> 
          <p>Message and data rates may apply. By clicking 'Sign up', you agree to Instawork's
            <span>Tearms of Use</span> and<span>Privacy Policy</span>.</p>
         
        </div>
      </div>
      </div>
      {/* FORM END */}
    </div>
  )
}

export default BusinessSignup
