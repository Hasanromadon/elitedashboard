import React from 'react';
import './Hero.css';
import Button from '../button/Button';
import TimeBox from '../timebox/Timebox';

const Hero = () => {
  return(
    <div className='bg-shade border h-max border-violet-500 rounded-3xl py-6 px-4 '>
        <div className='flex gap-5 items-center' >
            <div className='hero-left'>
               <div className='flex items-center gap-3 mb-3'>
                    <img src='./icons/profile-hero.png' alt='paul'/>       
                    <span>Paula Haris</span>    
                </div> 
                <p className='text-[26px] font-semibold mb-3' >Bluelight 3d Art</p>    
                <p className='mb-3'>Current Bids :</p> 
                <p className='bid-amount mb-6'>0.0345 ETH</p>
                <div className='flex gap-3'>
                    <Button primary>
                        Place a Bids
                    </Button>
                    <Button>
                       View Artwork
                    </Button>
                </div>
            </div>
            <div>
                <div className='relative' >
                    <img className='h-full object-contain' src='icons/hero-img.png' alt=''/>
                    <div className='absolute bottom-5 left-4'>
                    <span className='block'>Auction Ending In :</span>
                    <TimeBox/>
                    {/* s */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Hero;
