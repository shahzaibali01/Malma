import React from 'react'
import './Testimonail.scss'
import quote from '../../Images/quote.png'
import StarIcon from '@mui/icons-material/Star';

const Testimonail = () => {
  return (
    <div className='testi_sass'>
    
    

<div className='testi_main'>




<div className='testi_title'>

breathe in-2-3-4 ... and out-2-3-4-5-6-7-8
</div>



<div className='testi_para'>
you're in great company

</div>




{/* Quotes */}
<div className='quotes_main'>





<div className='quote_1'>
<img src={quote} className='img_quote'/> <img src={quote}/>
<div className='main_content'>
<div className='testi_icons'>

<StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
</div>
<div className='main_content_para1'>

learn about my food triggers and get tips for improving my time-in-range
</div>


<div className='main_content_para2' >

Amanda G. - Mom of 2 (GD in both pregnancies)
    

</div>




</div>



</div>




<div className='quote_2'>
<img src={quote} className='img_quote'/> <img src={quote}/>
<div className='main_content'>
<div className='testi_icons'>

<StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
 <StarIcon className='yellow'/>
</div>
<div className='main_content_para1'>

learn about my food triggers and get tips for improving my time-in-range
</div>


<div className='main_content_para2' >

Amanda G. - Mom of 2 (GD in both pregnancies)
    

</div>




</div>



</div>






</div>






</div>






    
    
    
    </div>
  )
}

export default Testimonail