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
              <svg width="22" height="22" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.54 0.5H5.92C7.33 0.5 8.46 1.65 8.46 3.061V6.47C8.46 7.89 7.33 9.03 5.92 9.03H2.54C1.14 9.03 0 7.89 0 6.47V3.061C0 1.65 1.14 0.5 2.54 0.5ZM2.54 11.9697H5.92C7.33 11.9697 8.46 13.1107 8.46 14.5307V17.9397C8.46 19.3497 7.33 20.4997 5.92 20.4997H2.54C1.14 20.4997 0 19.3497 0 17.9397V14.5307C0 13.1107 1.14 11.9697 2.54 11.9697ZM17.4601 0.5H14.0801C12.6701 0.5 11.5401 1.65 11.5401 3.061V6.47C11.5401 7.89 12.6701 9.03 14.0801 9.03H17.4601C18.8601 9.03 20.0001 7.89 20.0001 6.47V3.061C20.0001 1.65 18.8601 0.5 17.4601 0.5ZM14.0801 11.9697H17.4601C18.8601 11.9697 20.0001 13.1107 20.0001 14.5307V17.9397C20.0001 19.3497 18.8601 20.4997 17.4601 20.4997H14.0801C12.6701 20.4997 11.5401 19.3497 11.5401 17.9397V14.5307C11.5401 13.1107 12.6701 11.9697 14.0801 11.9697Z" fill="url(#paint0_linear_29660_966)"/>
                <defs>
                <linearGradient id="paint0_linear_29660_966" x1="-7.33337" y1="-7.83321" x2="19.3329" y2="16.5003" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2E59DA"/>
                <stop offset="1" stop-color="#7E4CE3"/>
                </linearGradient>
                </defs>
              </svg>
                <div className='text-link ml-4 text-gray-400'>Dashboard</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>

          </li>
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
            <div className='link-container items-center flex w-full text-purple-600'>
            <svg className='icon-link' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.6389 12.8957H16.5906C15.1042 12.8948 13.8993 11.6909 13.8984 10.2045C13.8984 8.71801 15.1042 7.51409 16.5906 7.51318H20.6389"  stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M17.049 10.1429H16.7373" stroke-linecap="round" stroke-linejoin="round"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.74766 1.5H15.3911C18.2892 1.5 20.6388 3.84951 20.6388 6.74766V13.9247C20.6388 16.8229 18.2892 19.1724 15.3911 19.1724H6.74766C3.84951 19.1724 1.5 16.8229 1.5 13.9247V6.74766C1.5 3.84951 3.84951 1.5 6.74766 1.5Z" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.03516 6.0382H11.4341"  stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

                <div className='text-link ml-4 text-gray-400'>Wallet</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container items-center flex w-full text-purple-600'>
            <svg className='icon-link' width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.419 14.2321C20.419 17.8101 18.31 19.9191 14.732 19.9191H6.95C3.363 19.9191 1.25 17.8101 1.25 14.2321V6.43212C1.25 2.85912 2.564 0.750122 6.143 0.750122H8.143C8.861 0.751122 9.537 1.08812 9.967 1.66312L10.88 2.87712C11.312 3.45112 11.988 3.78912 12.706 3.79012H15.536C19.123 3.79012 20.447 5.61612 20.447 9.26712L20.419 14.2321Z"  stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.48145 12.963H15.2164"  stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

                <div className='text-link ml-4 text-gray-400'>My Colletions</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container flex items-center w-full text-purple-600'>
              <svg className='icon-link' width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.3717 9.70166V16.5618"  stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.0377 6.41907V16.5618"  stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.6285 13.3268V16.5618"  stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6857 1.5H6.31429C3.04762 1.5 1 3.81208 1 7.08516V15.9148C1 19.1879 3.0381 21.5 6.31429 21.5H15.6857C18.9619 21.5 21 19.1879 21 15.9148V7.08516C21 3.81208 18.9619 1.5 15.6857 1.5Z"  stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                <div className='text-link ml-4 text-gray-400'>History</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
          <li>
          <a href='/' className='w-full'>
            <div className='link-container flex items-center w-full text-purple-600'>
            <svg className='icon-link' width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8064 6.12361L18.184 5.04352C17.6574 4.1296 16.4905 3.81432 15.5753 4.33872V4.33872C15.1397 4.59534 14.6198 4.66815 14.1305 4.54109C13.6411 4.41402 13.2224 4.09752 12.9666 3.66137C12.8021 3.38415 12.7137 3.06839 12.7103 2.74604V2.74604C12.7251 2.22922 12.5302 1.7284 12.1698 1.35767C11.8094 0.986937 11.3143 0.777863 10.7973 0.778076H9.54326C9.03672 0.77807 8.55107 0.979914 8.19376 1.33895C7.83644 1.69798 7.63693 2.18459 7.63937 2.69112V2.69112C7.62435 3.73693 6.77224 4.57681 5.72632 4.5767C5.40397 4.57336 5.08821 4.48494 4.81099 4.32041V4.32041C3.89582 3.79601 2.72887 4.11129 2.20229 5.02522L1.5341 6.12361C1.00817 7.03639 1.31916 8.20261 2.22975 8.73231V8.73231C2.82166 9.07404 3.18629 9.70559 3.18629 10.3891C3.18629 11.0725 2.82166 11.7041 2.22975 12.0458V12.0458C1.32031 12.5719 1.00898 13.7353 1.5341 14.6454V14.6454L2.16568 15.7346C2.4124 16.1798 2.82636 16.5083 3.31595 16.6474C3.80554 16.7866 4.3304 16.7249 4.77438 16.476V16.476C5.21084 16.2213 5.73094 16.1516 6.2191 16.2822C6.70725 16.4128 7.12299 16.733 7.37392 17.1717C7.53845 17.4489 7.62686 17.7646 7.63021 18.087V18.087C7.63021 19.1435 8.48671 20 9.54326 20H10.7973C11.8502 20.0001 12.7053 19.1491 12.7103 18.0962V18.0962C12.7079 17.588 12.9086 17.1 13.2679 16.7407C13.6272 16.3814 14.1152 16.1807 14.6233 16.1831C14.9449 16.1917 15.2594 16.2798 15.5387 16.4394V16.4394C16.4515 16.9653 17.6177 16.6544 18.1474 15.7438V15.7438L18.8064 14.6454C19.0615 14.2075 19.1315 13.686 19.001 13.1964C18.8704 12.7067 18.55 12.2894 18.1108 12.0367V12.0367C17.6715 11.784 17.3511 11.3666 17.2206 10.8769C17.09 10.3873 17.16 9.86582 17.4151 9.42796C17.581 9.13834 17.8211 8.8982 18.1108 8.73231V8.73231C19.0159 8.20289 19.3262 7.04349 18.8064 6.13277V6.13277V6.12361Z"  stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="10.1752" cy="10.3891" r="2.63616"  stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <div className='text-link ml-4 text-gray-400'>Setting</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className='nav-link mt-36'>
      <a href='/' className='w-full'>
            <div className='link-container items-center flex w-full text-purple-600'>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0165 5.88948V4.95648C13.0165 2.92148 11.3665 1.27148 9.33146 1.27148H4.45646C2.42246 1.27148 0.772461 2.92148 0.772461 4.95648V16.0865C0.772461 18.1215 2.42246 19.7715 4.45646 19.7715H9.34146C11.3705 19.7715 13.0165 18.1265 13.0165 16.0975V15.1545" stroke="url(#paint0_linear_29660_321)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.8096 10.5214H7.76855" stroke="url(#paint1_linear_29660_321)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.8818 7.60632L19.8098 10.5213L16.8818 13.4373" stroke="url(#paint2_linear_29660_321)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <defs>
              <linearGradient id="paint0_linear_29660_321" x1="-3.71701" y1="-6.43685" x2="18.2058" y2="6.80295" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2E59DA"/>
              <stop offset="1" stop-color="#7E4CE3"/>
              </linearGradient>
              <linearGradient id="paint1_linear_29660_321" x1="3.35352" y1="9.6047" x2="3.59524" y2="12.2606" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2E59DA"/>
              <stop offset="1" stop-color="#7E4CE3"/>
              </linearGradient>
              <linearGradient id="paint2_linear_29660_321" x1="15.8082" y1="5.17674" x2="21.7214" y2="7.8862" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2E59DA"/>
              <stop offset="1" stop-color="#7E4CE3"/>
              </linearGradient>
              </defs>
            </svg>
                <div className='text-link ml-4 text-purple-500'>Logout</div>
                <span className='link-marker'>&nbsp;</span>
              </div>
            </a>
      </div>
    </nav>
  </aside> 
  );
};

export default Sidebar;
