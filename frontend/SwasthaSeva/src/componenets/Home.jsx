import Login from './Login'
import Navbar from './Navbar'
import MainContent from './mainContent'
import BrowsePictures from './BrowsePage';
import { useState } from 'react';
import BrowsePage from './BrowsePage';
import { Footer } from './Footer';

function Home() {
    const [ signState, setSignState ] = useState( false );

    function openSignUp()
    {
      return setSignState(true);
    }
    function closeSignUp()
    {
      return setSignState(false);
    }
    return (
      <div className='relative  overflow-x-hidden'>
        <div className={` ${ signState ? "filter blur-lg" : "" } `}>
          <Navbar openSignUp={openSignUp}/>
          <MainContent/>
          <Footer/>
        </div>
        <div className=' absolute top-0 left-0'>
            { signState ? <Login closeSignUp={closeSignUp}/>: "" }
        </div>
      </div>
      
    );
}

export default Home;