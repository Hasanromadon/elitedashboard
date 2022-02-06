import React from 'react';
import { easeBackInOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';
import Button from '../button/Button';
import TimeBox from '../timebox/Timebox';
import ButtonHeart from '../button/ButtonHeart';

const CardList = ({colections}) => {

    const showMatches = () => (
        colections ?
            <NodeGroup
                data={colections}
                keyAccessor={(d)=> d.id}

                start={()=>({
                    opacity:0,
                    x:-10
                })}

                enter={(d,i)=>({
                    opacity:[1],
                    x:[0],
                    timing:{ duration: 300,delay: i * 50, ease:easeBackInOut}
                })}

                update={(d,i)=>({
                    opacity:[1],
                    x:[0],
                    timing:{ duration: 0,delay: i * 50, ease:easeBackInOut}
                })}

                leave={(d,i)=>({
                    opacity:[0],
                    scale: [0],
                    x:[-10],
                    timing:{ duration: 400,delay: i * 50, ease:easeBackInOut}
                })}
            >
                { (nodes)=> (
                    <div className='grid  grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-6'>
                        { nodes.map(({key,data,state:{x,opacity}})=>(
                                <div key={key} style={{
                                    opacity,
                                    transform:`scale(${opacity})`
                                }} className='border border-violet-500 p-2 rounded-2xl transition-transform ease-linear duration-500 '>
                                <div className='mb-2 relative'>
                                    <img src={`./card/${data.id}.png`} alt=''/>
                                    <div className='absolute top-3 left-3'>
                                    <TimeBox small/>
                                    </div>
                                </div>
                                <div>
                                <div className='flex items-center justify-between mb-2'>
                                        <span className='flex items-center text-xs text-gray-50'><img  className='mr-2 w-5' src='./icons/profile-hero.png' alt=''/>Paula Haris</span>
                                        <ButtonHeart/>
                                    </div>
                                    <p className='mb-2'>3D Cube Art</p>
                                    <div className='flex items-center justify-between mb-2'>
                                        <span className='text-gray-50 text-[10px]'>Current Bids:</span>
                                        <span className='flex items-center text-xs'><img className='mr-1' src='./icons/eth.png' alt=''/>2.5ETH</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <Button small primary>Place a Bids</Button>
                                        <Button small>History</Button>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                        }
                    </div>
                )}
            </NodeGroup>

        :null
    )


    return(
        <div>
            {showMatches()}
        </div>
    )

} 

export default CardList;