import './footer.css'
import {AiFillFacebook, AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'


const footer = () => {
  return (
       <footer>
       <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
        </ul>
        <div className="footer_socials">
          <a href="https://facebook.com"><AiFillFacebook /></a>
          <a href="https://facebook.com"><AiOutlineInstagram /></a>
          <a href="https://facebook.com"><AiOutlineTwitter /></a>
          <a href="https://facebook.com"><AiFillGithub/></a>
          <a href="https://facebook.com"><AiFillLinkedin /></a>
          <a href="https://facebook.com"><BsMedium/></a>
          
        </div>

        <div className='footer_copyright'>
         <small>&copy; 2023 SYLVIA BOYANI OMBOGO. All rights reserved.</small>
        </div>
       </footer>    
  )
}

export default footer