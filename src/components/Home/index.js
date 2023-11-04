import {Component} from 'react'

import {AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'

import {FiTwitter} from 'react-icons/fi'

import Header  from '../Header'

import './index.css'


class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <div className='main-container'>
               <div className='Home-container'>
               <div  className='second-section'>
                <div  className='align'>
                  <h1 className='learn-head'>Learn from your favorite creators about <span className='learn-span'>fantasy reports </span> </h1>
                  <img src="https://i.ibb.co/pdQB8YM/home-elem.jpg" alt="home-elem" border="0" className='home-image'/>
                </div>  
                <div className='mobile-home'>
                <img src="https://i.ibb.co/pdQB8YM/home-elem.jpg" alt="home-elem" border="0" className='home-image-mobile'/>
                </div>
                </div>
             
                <div className='explore-more-section'>
                <div className='explore-section'>
               <img src="https://i.ibb.co/pwB7NwG/img.jpg" alt="img" border="0" className='portal-image'/>
                  </div>
                <h1 className='get-direct-knowlege'> <span  className='get-direct-knowlege-span'>Get direct</span> <br/> knowledge and insight.</h1>
                <div className='flexing'>
                    <img src = "https://i.ibb.co/5k3CC88/img-card-1.png"   alt = "explore-imag1" className='human-images'/>
                      <img src = "https://i.ibb.co/gRJYpyq/img-card-2.png" alt='explore-image2' className='human-images'/>
                      <img src = "https://i.ibb.co/fQqCCLp/img-card.png" alt='explore-image2' className='human-images'/>
                </div>
                <div className='vertical-align'>
                    <div className='flexing'>
                        <div className='money'>
                            <h1 className='money-head'>300</h1>
                            <p className='money-para'>creators</p>
                        </div>
                        <div className='money'>
                            <h1 className='money-head'>14.4k</h1>
                            <p className='money-para'>users</p>
                        </div>
                        <div className='money'>
                            <h1 className='money-head'>9.1k</h1>
                            <p className='money-para'>session</p>
                        
                        </div>
                    </div>
                    <div className='flexing1'>
                        <h1 className='explore-more-para'>explore the marketplace</h1>                  
                       <img src="https://i.ibb.co/5F7V49n/arrow-icon.png" alt="arrow-icon" className='arrow-image' border="0"/>
                    </div>
                </div>
               </div>
            <div className='company-section'>
                <div className = 'vertical-algin mar1'>
                    <h1 className='creator-heading'>Why become a creator?</h1>
                    <p className='creator-para'>Engage with your supporter and subscriber to sell your skills, knowledge and passions </p>
                    <button type = 'button' className='sign-button'>Become a creator</button>
                </div>
                <div>
                <div className='horizontal'>
                <div className='vertical-algin mar'>
                    <img src="https://i.ibb.co/XJCjb4C/engaze-svg-1.png" alt="engaze-svg-1" className= "creator-images" border="0"/>
                    <h1 className='Engag-head'>Engagement </h1>
                    <p className='Engag-para'>Engage on a deeper level with the fans that matter most</p>
                </div>

                <div className='vertical-algin mar'>
                    <img src="https://i.ibb.co/njFy7Mp/autonomy-svg.png" alt="engaze-svg-1" className= "creator-images" border="0"/>
                    <h1 className='Engag-head'>Autonomy  </h1>
                    <p className='Engag-para'>Full autonomy on when and who you talk to.</p>
                </div>
                </div>
                <div className='horizontal'>
                <div className='vertical-algin mar'>
                    <img src="https://i.ibb.co/CKGZk54/free-svg-1.png" alt="engaze-svg-1" className= "creator-images" border="0"/>
                    <h1 className='Engag-head'>Free </h1>
                    <p className='Engag-para'>No monthly fee or sign-up fee</p>
                </div>

                <div className='vertical-algin mar'>
                    <img src="https://i.ibb.co/ZLWDfWw/earn-svg.png" alt="engaze-svg-1" className= "creator-images" border="0"/>
                    <h1 className='Engag-head'>Earn </h1>
                    <p className='Engag-para'>Add a new source of income that you can control</p>
                </div>
                </div>
               
               </div>
               </div>


               <div className='support-section'>
                  <div className='get-started-container'>
                     <h1 className='limits-head'>Engage without limits</h1>
                     <p className='limits-para'>Join a growing community and talk directly with your favorites creators</p>
                     <button type = "button" className='get-started'>Get Started</button>
                  </div>
                  <div className='face'>
                  <div className='icons-container hide'>
                  <div >
                    <img src = "https://i.ibb.co/rfWwvjz/logo.jpg" alt = "logo" className='logo-image'/>
                    </div>
                    <div className = "icons-flexing ">
                        <AiOutlineFacebook className='insta'/>
                        <FiTwitter className='insta'/>
                        <AiOutlineInstagram className='insta'/>
                    </div>
                 </div>
                  <div className='horizontal'>
                    <div className='about-container'>
                        <h1 className='about-head'>About</h1>
                        <p className='about-para'>How it works</p>
                        <p className='about-para'>Company</p>
                        <p className='about-para'>Help & support</p>
                    </div>
                    <div className='about-container'>
                        <h1 className='about-head'>For creators</h1>
                        <p className='about-para'>How can i get paid</p>
                        <p className='about-para'>Become a creator</p>
                    </div>
                    <div className='about-container'>
                        <h1 className='about-head'>Learn</h1>
                        <p className='about-para'>Cookies policy</p>
                        <p className='about-para'>Privacy policy</p>
                    </div>
                    <div className='about-container'>
                        <h1 className='about-head'>Support</h1>
                        <p className='about-para'>Service status</p>
                        <p className='about-para'>Report abuse</p>
                        <p className='about-para'>Dispute a payment</p>
                    </div>
                  </div>
                  </div>
               </div>
               <div className='icons-container unhide'>
                  <div >
                    <img src = "https://i.ibb.co/rfWwvjz/logo.jpg" alt = "logo" className='logo-image'/>
                    </div>
                    <div className = "icons-flexing ">
                        <AiOutlineFacebook className='insta'/>
                        <FiTwitter className='insta'/>
                        <AiOutlineInstagram className='insta'/>
                    </div>
                 </div>

             </div>   
            </div>
               
            </>
        )
    }
}

export default Home
