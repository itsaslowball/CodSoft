import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import './End.scss'

const End = () => {
    return (
      <div className="app_social">
        <div className="platform">
          {/* <div className='div'>
                    <a href="https://leetcode.com">
                        <SiLeetcode />
                    </a>
                </div>
                <div className='div'>
                    <a href="https://auth.geeksforgeeks.org">
                        <SiGeeksforgeeks />
                    </a>
                </div> */}
          <div className="div">
            <a href="https://www.linkedin.com/in/priyanshu-607693285/">
              <BsLinkedin />
            </a>
          </div>
          <div className="div">
            <a href="https://github.com/itsaslowball">
              <AiFillGithub />
            </a>
          </div>
          <div className="div">
            <a>
              <BsInstagram />
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>© 2023 Copyright</p> All Rights Reserved
          {/* <a href="https://priyanshu-portfolio-react.netlify.app/"><b>Priyanshu-portfolio.</b></a> */}
        </div>
      </div>
    );
}

export default End