import React,{ useState,useEffect,useCallback } from 'react';

const TimeBox = () => {
    const [time,setTime] = useState({
        days:'0',
        hours:'0',
        minutes:'0',
        seconds :'0'
    })

    const renderItem = (time,value) => (
        <div className='time-box inline-block'>
            {`${time} ${value}`}
        </div>
    )

    const getTimeUntil = useCallback( (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0){
            console.log('Date passed')
        } else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor((time/(1000*60*60*24)));

            setTime({
                days,
                hours,
                minutes,
                seconds
            })
        }  
    },[])
    
    useEffect(()=>{
        setInterval(()=> getTimeUntil('Dec, 20, 2022, 01:20:00'),1000)
    },[getTimeUntil])


    return(
        <div className='flex gap-2 items-center'>
            {renderItem(time.hours,'H')}
            {renderItem(time.minutes,'M')}
            {renderItem(time.seconds,'S')}
        </div>
    )

}

export default TimeBox;