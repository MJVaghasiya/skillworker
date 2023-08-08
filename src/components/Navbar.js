import React from 'react'
import img1 from '../assets/part-time.svg'
import img2 from '../assets/full-time.svg'
import img3 from '../assets/food.svg'
import img4 from '../assets/cleaning.svg'
import img5 from '../assets/ambassadors.svg'
import img6 from '../assets/Warehousing.svg'
import img7 from '../assets/retail.svg'
import img8 from '../assets/stadiums.svg'
import img9 from '../assets/LEARN-blog.svg'
import img10 from '../assets/learn-economic research.svg'
import img11 from '../assets/learn-about us.svg'
import img12 from '../assets/learn-careers.svg'
import img13 from '../assets/learn-newsroom.svg'
import img14 from '../assets/learn-contact us.svg'
import img15 from '../assets/learn-faq.svg'
import WOW from 'wowjs';
import { Link } from 'react-router-dom';



class Navbar extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid nav-container">
            <a class="navbar-brand" href="/">Skill Worker</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="dropdown nav-item">
                  <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">For Business <b class="caret"></b></a>
                  <ul class="dropdown-menu multi-column columns-2">
                    <div class="row w-100 padding-20-90 ">
                      <div class="col-sm-6">
                        <h6 class="dropdown-header">FIND WORKERS</h6>

                        <div class="multi-column-dropdown">
                          <li className='d-flex animation'>
                            <img src={img1} />
                            <div className='intro'>
                              <h4 className='title' >Temporary Wrokers</h4>
                              <p className='for' >Connected and matched with thousands of qualified hourly workers near you</p>
                            </div>
                          </li>

                          <li className='d-flex animation'>
                            <img src={img2} />
                            <div className='intro'>
                              <h4 className='title'>Full-Time Workers <span className='beta' >BETA</span> </h4>
                              <p className='for'>Search,message, and hire workers in the instawork network looking for long-term opportunities</p>
                            </div>
                          </li>

                        </div>
                      </div>
                      <div class="col-sm-6">
                        <h6 class="dropdown-header">CATEGORIES</h6>

                        <div className='d-flex'>
                          <ul class="multi-column-dropdown">
                            <li className='d-flex categories animation'><img className='categories-img' src={img3} />Food & Bevrage</li>
                            <li className='d-flex categories animation'><img className='categories-img' src={img4} />Cleaning</li>
                            <li className='d-flex categories animation'><img className='categories-img' src={img5} />Brand Ambasadors</li>
                          </ul>
                          <ul class="multi-column-dropdown">
                            <li className='d-flex categories animation'><img className='categories-img-2' src={img6} />Warehousing & Manufacturing</li>
                            <li className='d-flex categories animation'><img className='categories-img-2' src={img7} />Retail</li>
                            <li className='d-flex categories animation'><img className='categories-img-2' src={img8} />Stadium,Conventions,Events</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </ul>
                </li>

                <li class="nav-item dropdown">
                  <Link class="nav-link" to="/Worker">For Workers</Link>
                </li>


                <li class=" nav-item dropdown">
                  <a href="#" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">Resources<b class="caret"></b></a>
                  <ul class="dropdown-menu multi-column columns-2 w-100">
                    <div class="row w-100 padding-20-90 ">

                      <div class="col-sm-5">
                        <h6 class="dropdown-header">LEARN</h6>

                        <ul class="multi-column-dropdown">
                          <li className='d-flex animation'>
                            <img src={img9} />
                            <div className='intro'>
                              <h4 className='title' >Blog</h4>
                              <p className='for' >The latest trends in flexible work</p>
                            </div>
                          </li>
                          <li className='d-flex animation'>
                            <img src={img10} />
                            <div className='intro'>
                              <h4 className='title' >Economics Reserch</h4>
                              <p className='for' >Laboue market data analysis and insights</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div class="col-sm-4">
                        <h6 class="dropdown-header">COMPANY</h6>

                        <ul class="multi-column-dropdown">
                          <li className='d-flex animation'>
                            <img src={img11} />
                            <div className='intro'>
                              <h4 className='title' >About Us</h4>
                              <p className='for' >Our mission at skillworker</p>
                            </div>
                          </li>
                          <li className='d-flex animation'>
                            <img src={img12} />
                            <div className='intro'>
                              <h4 className='title' >Careers</h4>
                              <p className='for' >Shape future of work</p>
                            </div>
                          </li>
                          <li className='d-flex animation'>
                            <img src={img13} />
                            <div className='intro'>
                              <h4 className='title' >Newsroom</h4>
                              <p className='for' >Press releases,news brand assets</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div class="col-sm-3">
                        <h6 class="dropdown-header">GET HELP</h6>

                        <ul class="multi-column-dropdown">
                          <li className='d-flex categories animation'><img className='categories-img' src={img14} />Contact Us</li>
                          <li className='d-flex categories animation'><img className='categories-img' src={img15} />FAQ</li>

                        </ul>
                      </div>

                    </div>
                  </ul>
                </li>


              </ul>
              <form class="d-flex pi-center" role="search">
                <Link to='/Log-in'>    <button class="btn btn-outline-success log-in animation " type="submit">

                  LOG IN</button></Link>

                  <Link to='/Sign-up  '>  <button class="btn btn-outline-success sign-up animation" type="submit">SIGN UP</button></Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
