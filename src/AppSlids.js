
import { useState } from 'react';
import { dataSlides } from './dataSlides';


function AppSlids() {


  const [slids, setSlids] = useState(0)
  const {photoName, photo} = dataSlides[slids];
  console.log(dataSlides[slids]);


  const previousSlids =() => {
    setSlids((slids => {
      slids--;
      if (slids < 0) {
        slids = dataSlides.length - 1;
      }
    return slids;
  }))
  }

  const nextSlids =() => {
    setSlids((slids => {
      slids++;
      if (slids > dataSlides.length - 1) {
        slids = 0;
      }
    return slids;
  }))
  }


  return(
  
<div className='slideAllContainer'>
<br></br>
<br></br>
<div className='slidshowContainer'>
      <img src={photo} width='100%' height='500px' alt='photo'/>
     
      
      <a onClick={previousSlids} className='prev'>❮</a>
      <a onClick={nextSlids} className='next'>❯</a>
</div>
  
      <div className='container'>
      <h2>{photoName}</h2>
      </div>

    
      </div>
      

  );
}

export default AppSlids;