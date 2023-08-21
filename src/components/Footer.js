import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <div>
      <MDBFooter className='bg-none text-center text-lg-start text-muted mt-10'>


        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="2" lg="2" xl="2" className='mb-4'>
                <h6 className='fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  SKILL WORKER
                </h6>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>For Business</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Temporary Workers
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Full-Time Workers(Beta)
                  </a>
                </p>
                <p>
                  <h6 className='text-uppercase fw-bold mb-4'>For Workers</h6>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Find Work
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Testimonials
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Newsroom
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Careers
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="2" xl="2" className='mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Blog
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Economical Research
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    FAQs
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="2" xl="2"  className='mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Categories</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Health, 
                    Nurse
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Cleaning
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Stadium,<br/>Conventions,<br/>Events
                  </a>
                </p>
                </MDBCol>

                <MDBCol md="4" lg="2" xl="2" >
                  <p>
                    <a href='#!' className='text-reset'>
                      Warehousing &
                      Merchandising
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Retail
                    </a>
                  </p>
                  <p>
                    <a href='#!' className='text-reset'>
                      Food & Baverages
                    </a>
                  </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
      </MDBFooter>
    </div>
  )
}

export default Footer
