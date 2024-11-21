import React from 'react'
import footerlogo from "../public/footer-logo.jpg"
import Image from 'next/image'


const FooterLogo = () => {
  return (
    <div className='container mx-auto w-auto flex p-7 '>
          <div className="w-1/3">
            <Image
            src={footerlogo}
            alt="logo" 
            width={400}
            height={100}
            />
        </div>
    </div>
  )
}

export default FooterLogo
