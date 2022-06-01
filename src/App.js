
import './App.css';
import { useState } from 'react';
import { data } from './data';
import AppSlids  from './AppSlids';


function App() {

  const [sigth, setSigth] = useState(data);
  console.log(data);
  const [showMoreText, setShowMoreText] = useState(false);

 
 

  const visitedDel = (id) => {
    console.log(id);
  let newSigth = sigth.filter(item => item.id !== id);
  console.log(newSigth);
  setSigth(newSigth)
  }

  const showTextClick = (elements) => {
    elements.showMore = !elements.showMore
    setShowMoreText(!showMoreText)
  }

  return (
    <div>
      <div className='containerTitle'>
        <h1>ТОП {sigth.length} ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ ФЛОРЕНЦИИ</h1>
      </div>
        {sigth.map((elements => {
        const {id, name, description, image, source, showMore} = elements;
 
    return (
      <div key={id}>
      <div className='container'>
      <h2>{id} - {name}</h2>
      </div>
      <div className='container'>
      <img src={image} width='500px' alt='photo'/>
      </div>
      <div className='container'>
      <p>{showMore ? description : description.substring(0,200) + '...'}
      <button className='showMore' onClick={() => showTextClick(elements)(!showMore)}> {showMore ? 'show less' : 'show more'}</button></p>
      </div>
      <div className='container'>
      <a className='source'>{source}</a>
      </div>
      <div className='container'>
      <button className='buttonVisited' onClick={() => visitedDel(id)}> ПОСЕТИЛИ</button>
      </div>

      </div>
    )
        }))}

<div className='container'>
      <button className='deletAll' onClick={() => setSigth([])(!sigth)}>УДАЛИТЬ ВСE ПОСЕЩЕННЫЕ</button>
      </div>

        <div>

        </div>

        <div>
    <AppSlids />
    </div>

   
    </div>
  );


}

export default App;


