import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return(
    <aside>
    <img className='mb-9' src='./icons/logo.png' alt=''/>
    <nav>
    <div className='link-group'>
      <div className='link-group-title'>MARKETPLACE</div>
        <ul className='nav-link'>
          <li className='flex'>
            <a href='/' className='w-full'>
              <div className='link-container flex w-full text-purple-600'>
                <svg className='icon-link' width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.749878L2.83 1.10988L3.793 12.5829C3.87 13.5199 4.653 14.2389 5.593 14.2359H16.502C17.399 14.2379 18.16 13.5779 18.287 12.6899L19.236 6.13188C19.342 5.39888 18.833 4.71888 18.101 4.61288C18.037 4.60388 3.164 4.59888 3.164 4.59888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.125 8.2948H14.898"  stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15435 17.7025C5.45535 17.7025 5.69835 17.9465 5.69835 18.2465C5.69835 18.5475 5.45535 18.7915 5.15435 18.7915C4.85335 18.7915 4.61035 18.5475 4.61035 18.2465C4.61035 17.9465 4.85335 17.7025 5.15435 17.7025Z" fill="#9CA3AF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4346 17.7025C16.7356 17.7025 16.9796 17.9465 16.9796 18.2465C16.9796 18.5475 16.7356 18.7915 16.4346 18.7915C16.1336 18.7915 15.8906 18.5475 15.8906 18.2465C15.8906 17.9465 16.1336 17.7025 16.4346 17.7025Z" fill="#9CA3AF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='text-link ml-4 text-gray-400'>Market</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>

          </li>
          <li>
           <a href='/' className='w-full'>
           <div className='link-container flex w-full text-purple-600'>
              <svg className='icon-link' width="22" height="22" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.24512 13.2815L8.23825 9.39137L11.6524 12.0733L14.5815 8.29297"  stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="17.9954" cy="2.70027" r="1.9222"  stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9248 1.62024H5.65704C2.6456 1.62024 0.77832 3.75296 0.77832 6.7644V14.8468C0.77832 17.8582 2.60898 19.9818 5.65704 19.9818H14.2612C17.2726 19.9818 19.1399 17.8582 19.1399 14.8468V7.80788" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <div className='text-link ml-4 text-gray-400'>Active Bids</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
            <a href='/' className='w-full'>
            <div className='link-container flex w-full text-purple-600'>
              <svg className='icon-link' width="22" height="22" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1043 1.67701L12.9317 5.32776C13.1108 5.68616 13.4565 5.93467 13.8573 5.99218L17.9453 6.58062C18.9554 6.72644 19.3573 7.95055 18.6263 8.65194L15.6702 11.4924C15.3797 11.7718 15.2474 12.1733 15.3162 12.5676L16.0138 16.5778C16.1856 17.5698 15.1298 18.3267 14.227 17.8574L10.5732 15.9627C10.215 15.7768 9.78602 15.7768 9.42679 15.9627L5.773 17.8574C4.87023 18.3267 3.81439 17.5698 3.98724 16.5778L4.68385 12.5676C4.75257 12.1733 4.62033 11.7718 4.32982 11.4924L1.37368 8.65194C0.642715 7.95055 1.04464 6.72644 2.05466 6.58062L6.14265 5.99218C6.54354 5.93467 6.89028 5.68616 7.06937 5.32776L8.89574 1.67701C9.34765 0.774331 10.6523 0.774331 11.1043 1.67701Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <div className='text-link ml-4 text-gray-400'>Favorite</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='link-group-title'>ACCOUNT</div>
      <div>
        <ul className='nav-link'>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container flex w-full text-purple-600'>
                <svg className='icon-link'width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.749878L2.83 1.10988L3.793 12.5829C3.87 13.5199 4.653 14.2389 5.593 14.2359H16.502C17.399 14.2379 18.16 13.5779 18.287 12.6899L19.236 6.13188C19.342 5.39888 18.833 4.71888 18.101 4.61288C18.037 4.60388 3.164 4.59888 3.164 4.59888" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.125 8.2948H14.898"  stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15435 17.7025C5.45535 17.7025 5.69835 17.9465 5.69835 18.2465C5.69835 18.5475 5.45535 18.7915 5.15435 18.7915C4.85335 18.7915 4.61035 18.5475 4.61035 18.2465C4.61035 17.9465 4.85335 17.7025 5.15435 17.7025Z" fill="#9CA3AF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4346 17.7025C16.7356 17.7025 16.9796 17.9465 16.9796 18.2465C16.9796 18.5475 16.7356 18.7915 16.4346 18.7915C16.1336 18.7915 15.8906 18.5475 15.8906 18.2465C15.8906 17.9465 16.1336 17.7025 16.4346 17.7025Z" fill="#9CA3AF"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className='text-link ml-4 text-gray-400'>Market</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container flex w-full text-purple-600'>
              <svg className='icon-link' width="22" height="22" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.24512 13.2815L8.23825 9.39137L11.6524 12.0733L14.5815 8.29297"  stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="17.9954" cy="2.70027" r="1.9222"  stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.9248 1.62024H5.65704C2.6456 1.62024 0.77832 3.75296 0.77832 6.7644V14.8468C0.77832 17.8582 2.60898 19.9818 5.65704 19.9818H14.2612C17.2726 19.9818 19.1399 17.8582 19.1399 14.8468V7.80788" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <div className='text-link ml-4 text-gray-400'>Active Bids</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container flex w-full text-purple-600'>
              <svg className='icon-link' width="22" height="22"viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1043 1.67701L12.9317 5.32776C13.1108 5.68616 13.4565 5.93467 13.8573 5.99218L17.9453 6.58062C18.9554 6.72644 19.3573 7.95055 18.6263 8.65194L15.6702 11.4924C15.3797 11.7718 15.2474 12.1733 15.3162 12.5676L16.0138 16.5778C16.1856 17.5698 15.1298 18.3267 14.227 17.8574L10.5732 15.9627C10.215 15.7768 9.78602 15.7768 9.42679 15.9627L5.773 17.8574C4.87023 18.3267 3.81439 17.5698 3.98724 16.5778L4.68385 12.5676C4.75257 12.1733 4.62033 11.7718 4.32982 11.4924L1.37368 8.65194C0.642715 7.95055 1.04464 6.72644 2.05466 6.58062L6.14265 5.99218C6.54354 5.93467 6.89028 5.68616 7.06937 5.32776L8.89574 1.67701C9.34765 0.774331 10.6523 0.774331 11.1043 1.67701Z" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
                <div className='text-link ml-4 text-gray-400'>Favorite</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </aside> 
  );
};

export default Sidebar;
