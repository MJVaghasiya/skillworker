import React, { useState } from 'react';
import img1 from '../assets/businessTab1.webp';
import img2 from '../assets/businessTab2.webp';
import img3 from '../assets/businessTab3.webp';
import img4 from '../assets/workerTab1.webp';
import img5 from '../assets/workerTab2.webp';
import img6 from '../assets/workerTab3.webp';

const BusinessWorker = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0); // New state to track active list item

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveItemIndex(0); // Reset active list item index when changing the tab
  };

  const handleListItemClick = (index) => {
    setActiveItemIndex(index); // Update the active list item index when clicking on a list item
  };

  // SHOW P TAG


  const tabContents = [

    {
      heading: 'Fill your shifts in',
      coHeading: 'Business',
      subHeading: 'a few clicks.',
      listItems: [
        {
          heading: '1.Post a shift',
          description: 'Enter your shift details like role, start/end time, and pay rates. Add instructions like attire or physical requirements (e.g. standing, lifting).',
          imageSrc: img1,
        },
        {
          heading: '2.Match with workers in minutes',
          description: 'Your shift is posted to workers who are a good fit for your requirements. As workers accept your shift, you can view their profiles in the dashboard.',
          imageSrc: img2,
        },
        {
          heading: '3.Workers arrive, we do the rest',
          description: 'See which workers are en route on a map. Instawork handles paperwork, payments, and insurance.',
          imageSrc: img3,
        },
      ],
    },
    {
      heading: 'Be your own boss.',
      coHeading:'Worker',
      subHeading: 'Get paid instantly.',
      listItems: [
        {
          heading: '1.Create your profile',
          description: 'Download our mobile app and add your work experience, references, and certifications where required.',
          imageSrc: img4,
        },
        {
          heading: '2.Pick up a shift',
          description: 'See dates, times, locations, and pay for shifts that you qualify for. Choose shifts that work best for you.',
          imageSrc: img5,
        },
        {
          heading: '3.Work the shift and get paid',
          description: 'Clock in and out onsite with the Instawork app. Get paid instantly after your shift (for top performers and certain shifts only).',
          imageSrc: img6,
        },
      ],
    },
  ];

  const { listItems } = tabContents[activeTab];

  return (
    <div>
      <div className="tab-switch">
        <ul className="tab-buttons">
          {tabContents.map((content, index) => (
            <li key={index} onClick={() => handleTabClick(index)} className={activeTab === index ? 'active' : ''}>
              {content.coHeading}
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {tabContents.map((content, index) => (
            activeTab === index && (
              <div className="container " key={index}>
                <h1 className='hero-big-font font-4'>{content.heading} <span className='font-red italic-font'>{content.subHeading}</span></h1>
                <div className='row'>
                  <div className='col-lg-6 intro-option'>
                    <ul>
                      {listItems.map((item, idx) => (
                        <li key={idx} onClick={() => handleListItemClick(idx)} className={activeItemIndex === idx ? 'active' : ''}>
                          <h5>{item.heading}</h5>
                          <p style={{ display: activeItemIndex === idx ? 'block' : 'none' }}>{item.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='col-lg-6 intro-img '>
                    <img
                      src={listItems[activeItemIndex].imageSrc} // Display the image of the active list item
                      alt="Image"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessWorker;
