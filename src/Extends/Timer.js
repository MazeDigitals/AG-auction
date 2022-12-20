import React, { useState } from 'react';

import timer from './../images/timer.png';


function Timer({date}) {
    // "Jan 5, 2024 15:37:25"
    const countDownDate = new Date(date).getTime();
    // console.log(date)
    const [sec, setSec] = useState('');
    const [min, setMin] = useState('');
    const [hour, setHour] = useState('');
    const [days, setDays] = useState('');
    const [isExpired, setIsExpired] = useState(false);
    var x = setInterval(()=>{
        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";
        setDays(days)
        setSec(seconds)
        setHour(hours)
        setMin(minutes)
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            setIsExpired(true)
            // document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <div className='timer-home'>
            <div className='adays'> {days}<span>Days</span></div>
            <div className='ahrs'>{hour} <span>Hrs</span></div>
            <div className='amin'> {min} <span>Min</span></div>
            <div className='asec'>  {sec} <span>Sec</span></div>
            {/* {isExpired===false && ({days} d {hour} h {min} m {sec} s): 'Expired'}   */}
        </div>
    );
}

export default Timer;
