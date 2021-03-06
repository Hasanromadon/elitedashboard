import React from 'react';
import Button from '../button/Button';

const CardCollection = () => {
  return(
    <div className='border border-violet-500 p-2 rounded-2xl transition-transform ease-linear duration-500 '>
        <div className='mb-2'>
            <img src='./card/1.png' alt=''/>
        </div>
        <div>
        <div className='flex items-center justify-between mb-2'>
                <span className='flex items-center text-xs text-gray-50'><img  className='mr-2 w-5' src='./icons/profile-hero.png' alt=''/>Paula Haris</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3611 0.875486C11.8344 0.875486 12.3069 0.942236 12.7561 1.09299C15.5244 1.99299 16.5219 5.03049 15.6886 7.68549C15.2161 9.04224 14.4436 10.2805 13.4319 11.2922C11.9836 12.6947 10.3944 13.9397 8.68365 15.0122L8.49615 15.1255L8.30115 15.0047C6.5844 13.9397 4.98615 12.6947 3.5244 11.2847C2.5194 10.273 1.74615 9.04224 1.26615 7.68549C0.418645 5.03049 1.41615 1.99299 4.2144 1.07724C4.4319 1.00224 4.65615 0.949736 4.88115 0.920486H4.97115C5.1819 0.889736 5.39115 0.875486 5.60115 0.875486H5.68365C6.15615 0.889736 6.61365 0.972236 7.05689 1.12299H7.10114C7.13115 1.13724 7.15365 1.15299 7.16864 1.16724C7.33439 1.22049 7.49115 1.28049 7.64115 1.36299L7.92615 1.49049C7.99501 1.52722 8.07231 1.58334 8.13912 1.63184C8.18144 1.66257 8.21956 1.69024 8.24865 1.70799C8.26088 1.71521 8.27332 1.72247 8.28586 1.72979C8.35017 1.76733 8.41716 1.80643 8.47364 1.84974C9.3069 1.21299 10.3186 0.867986 11.3611 0.875486ZM13.3561 6.27549C13.6636 6.26724 13.9261 6.02049 13.9486 5.70474V5.61549C13.9711 4.56474 13.3344 3.61299 12.3661 3.24549C12.0586 3.13974 11.7211 3.30549 11.6086 3.62049C11.5036 3.93549 11.6686 4.28049 11.9836 4.39224C12.4644 4.57224 12.7861 5.04549 12.7861 5.56974V5.59299C12.7719 5.76474 12.8236 5.93049 12.9286 6.05799C13.0336 6.18549 13.1911 6.25974 13.3561 6.27549Z" fill="#F87171"/>
                </svg>
            </div>
            <p className='mb-2'>3D Cube Art</p>
            <div className='flex items-center justify-between mb-2'>
                <span className='text-gray-50 text-[10px]'>Current Bids:</span>
                <span className='flex items-center text-xs'><img className='mr-1' src='./icons/eth.png' alt=''/>2.5ETH</span>
            </div>
            <div className='flex gap-2'>
                <Button small primary>Place a Bids</Button>
                <Button small>History</Button>
            </div>
        </div>
    </div>
  )
};

export default CardCollection;
