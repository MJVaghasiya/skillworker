import React from 'react'
import img1 from '../assets/worker-1.svg'
import img2 from '../assets/workers-2.svg'
import img3 from '../assets/worker3.svg'

const StruglingWorkers = () => {
    return (
        <div>
            <div className='bg-color '>
                <div className='container'>
                    <h1 className='strugling-header'>Strugling to find <span className='font-yellow italic-font'>qualified and reliable </span> workers?</h1>
                    <div className='worker-p'>
                        <p className='about-worker' >It's getting harder to find hourly workers that are a fit for your business through traditional staffing agencies. Instawork's platform makes it easy to find the qualified and reliable workers you need.</p>
                    </div>

{/* BORDER-CONTENT-START */}
<div className='row worker box'>
    <div className='col-lg-4 text-center worker-card'>
    <img src={img1} />
        <p>Every worker goes through a vetting process. 93% of businesses want their workers back.</p>
    </div>
    <div className='col-lg-4 text-center worker-card'>
        <img src={img2}/>
        <p>Workers are incentivized to be reliable which results in our low 2% no-show rate.</p>
    </div>
    <div className='col-lg-4 text-center worker-card'>
        <img src={img3}/>
        <p>See profiles and experience of workers as soon as they pick up your shift.</p>
    </div>
</div>
{/* BORDER-CONTENT-END */}

<button className='learn-more animation' >LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default StruglingWorkers
