import React from 'react'
import './Fees.scss'
import tick from '../../Images/tick.png'
const Fees = () => {
  return (
    <div className='fee_sass'>


      <div className='main_fee'>


        <div className='fee_title'>
          No Out of Pocket fees.
        </div>

        <div className='fee_para'>
          We work with providers and insurance plans to ensure you are covered.

        </div>


        <div className='price_card'>



          <div className='p_card1'>


            <div className='p1_title1'>
              Digital Assistant
            </div>



            <div className='p1_title2'>

              Get insights from your data


            </div>


            <div className='price_m' style={{ textAlign: 'center', fontSize: '25px', color: 'white' }}>

              <span style={{ fontSize: '100px' }}>0</span> /mo

            </div>


            <div className='card_paras1'>


              <div className='p_para'> <img src={tick} /> Daily reminders to log   </div>
              <div className='main_par'>
                <div className='image_tick'>
                <img src={tick} /> 

                </div>
               <div className='p_para'>
               Weekly visualizations and personalized insights 

               </div>

               
                </div>
              <div className='p_para'> <img src={tick} />  Triggers and tips  </div>


            </div>

            <button className='fee_btn'> Sign up</button>






          </div>























          <div className='p_card2'>


            <div className='p1_title1'>
              Human Interface
            </div>



            <div className='p1_title2'>

              1:1 nutrition with a prenatal RN


            </div>


            <div className='price_m' style={{ textAlign: 'center', fontSize: '25px', color: 'white' }}>

              <span style={{ fontSize: '100px' }}>200</span> /Initial Consult

            </div>


            <div className='card_paras'>


              <div className='p_para1'> <img src={tick} /> Personalized Consults   </div>
              <div className='p_para_special1'> <img src={tick} />  Virtual Visits </div>
              <div className='p_para1'> <img src={tick} />  Reimbursement Support  </div>

            </div>


            <button className='fee_btn1'> Sign up</button>






          </div>
















        </div>









      </div>


    </div>
  )
}

export default Fees