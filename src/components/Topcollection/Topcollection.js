import React, { useReducer, useState } from 'react';
import Button from '../button/Button';
import CardCollection from '../cardcollection/CardCollection';
import Sectionwrapper from '../sectionwrapper/Sectionwrapper';
import CardList from './CollectionAnimate';

const collectionData = [{
    id: 1,
    category : 'art'
},
{
    id: 2,
    category : 'games'
},
{
    id: 3,
    category : 'games'
},
{
    id: 4,
    category : 'sport'
},
{
    id: 5,
    category : 'music'
},
{
    id: 6,
    category : 'art'
},

];


const Topcollection = () => {

const [activeButton, setActiveButton] = useState('all');

const [state, dispatch] = useReducer((prevState, nextState)=>{
    return {...prevState,...nextState}
},{
    filterColletion: collectionData,
});

const showfilter = (category) => {
    
    setActiveButton(category);

    const list = collectionData.filter((collection)=>{
        return collection.category === category
    });

    dispatch({
        ...state,
        filterColletion: category === 'all' ? collectionData : list,
    });

};

  return(
      <Sectionwrapper more title='Top Collectibles'>
          <div className='flex gap-4 mb-4'>
              <Button primary={activeButton === 'all' ? true : ''} onClick={()=> showfilter('all') } >All</Button>
              <Button primary={activeButton === 'art' ? true : ''} onClick={()=> showfilter('art') }>Art</Button>
              <Button primary={activeButton === 'games' ? true : ''}  onClick={()=> showfilter('games') }>Games</Button>
              <Button primary={activeButton === 'sport' ? true : ''} onClick={()=> showfilter('sport') }>Sport</Button>
              <Button primary={activeButton === 'music' ? true : ''} onClick={()=> showfilter('music') }>Music</Button>
          </div>
          <div className=''>
                {
                    <CardList colections={state.filterColletion}/>
                }
          </div>
      </Sectionwrapper>
  );
};

export default Topcollection;
