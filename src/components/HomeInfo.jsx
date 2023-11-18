import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        
        <span className='font-semibold mx-2 text-white'>Ayushi</span>
       
        <br />
        I want to share something with you
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
         Something  <br />   really importent
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Click
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Something but in good voice <br />  
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Click
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        I can wait for you <br/> like forever. <br/> Click on that button at bottom...
      </p>

      {/* <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link> */}
    </div>
    );
  }

  return null;
};

export default HomeInfo;
