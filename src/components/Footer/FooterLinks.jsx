import React from 'react'

const FooterLinks = ({title, links}) => {
  return (
    <div className='mx-5 mt-5'>
                <h1 className='my-2 font-bold'>{title}</h1>
                <ul>
                    {
                        links.map((link)=>(<a href='#home' className='cursor-pointer'><li className='my-2 ' key={link}>{link}</li></a>))
                    }
                
                </ul>
            </div>
  )
}

export default FooterLinks
