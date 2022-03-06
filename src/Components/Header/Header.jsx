import React from 'react'
import './Header.scss'
import star from '../../Images/falling star.png'

const Header = () => {
    return (
        <>

            <div className='main_header_sass'>



                <div className='main-header'>
                    <div>


                        <div className='header_text_sec'>


                            <div className='main_classheader'>

                                <div className='header_para1'>
                                    There's always a silver lining <img src={star} />
                                </div>
                                <div className='header_para2'>
                                    Receive daily reminders, inspirational quotes and data visualizations to better manage gestational diabetes

                                </div>


                                <div className='header_btn_sec'>




                                    <button className='header_btn1'>
                                        View Sample Dashboard
                                    </button>



                                    <button className='header_btn2'>
                                        Request Early Access
                                    </button>

                                </div>

                                <div className='header_title' >
                                    <p className='div_placeholder'>
                                        Placeholder
                                    </p>
                                </div>
                            </div>







                        </div>

                    </div>





                </div>




































            </div>



        </>
    )
}

export default Header