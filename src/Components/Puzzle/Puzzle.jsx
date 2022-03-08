import React from 'react'
import './Puzzle.scss'
import selfie from '../../Images/selfie.png'
import puzzle from '../../Images/puzzle.png'
const Puzzle = () => {
  return (
    <div className='puzzle_sass'>
    


    <div className='main_puzzle'>


<div className='img_sec'>
    <img className='image_puzzle' src={puzzle}/>
</div>





<div className='puzzle_card'>



<div className='card_title'>
Begin logging <br/>
<img src={selfie}/>


</div>


<div className='card_para'>

Now that we have your baseline established and preferences set, let's start logging!



</div>




</div>






    


</div>
    </div>
  )
}

export default Puzzle