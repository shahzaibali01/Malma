import React from 'react'
import './Work.scss'
import Flower from '../../Images/flower.png'
import bg_img from '../../Images/workbg.png'
const Work = () => {
    return (
        <div className='work_main_sass'>


          <div className='work_text'>


            <div className='work_title'>

                HOW IT WORKS

            </div>



            <div className='work_para'>

                Get started in less than 5 minutes

            </div>


          </div>






            <div >
            <div className=''>
            <img  className='image_bg' src={bg_img}></img>

            </div>
   



                <div className='work_card'>

                    <div className='card_title'>
                        Request early access <br/>
                      <img src={Flower} />
                    </div>


                  <div className='card_para'>
                  Request early beta access to receive a unique link for onboarding and set up.
                  </div>








                </div>


            </div>

























        </div>
    )
}

export default Work