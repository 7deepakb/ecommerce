import React from 'react'

const Footer = () => {
  return (
    <footer className='py-5 text-white'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3 pb-4'>
                    <h2 className='mb-3'>Footer Heading 1</h2>
                    <div className='pt-3'>Lorem ipsum dolor</div>
                </div>
                <div className='col-md-3 pb-4'>
                    <h2 className='mb-3'>Footer Heading 2</h2>
                    <ul>
                        <li>
                            <a href="">subheading 1</a>
                        </li>
                        <li>
                            <a href="">subheading 2</a>
                        </li>
                        <li>
                            <a href="">subheading 3</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 pb-4'>
                    <h2 className='mb-3'>Quick Links</h2>
                    <ul>
                        <li>
                            <a href="">Login</a>
                        </li>
                        <li>
                            <a href="">Registration</a>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3 pb-4'>
                    <h2 className='mb-3'>Contact</h2>
                    <ul>
                        <li>
                            <a href="mailto:balaram.deepak7@gmail.com">balaram.deepak7@gmail.com</a>
                        </li>
                        <li>
                            <a href="#">+49-15175739556</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 text-center pt-5'>
                    <hr />
                    <p>January 2025</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer