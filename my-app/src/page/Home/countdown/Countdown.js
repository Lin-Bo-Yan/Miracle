import './Countdown.css'
import{useState,useEffect} from 'react'
import{getRemaningTimestamp} from './Utils'



const Countdown=(Timestamp)=>{

const countdownTimer={
second:'00',
hour:'00',
minute:'00'
}

const [remainingTime, setremainingTime] = useState(countdownTimer)

//計時器
useEffect(()=>{
   const intervalID=setInterval(() => {
    updateTime(Timestamp)

   }, 1000);
   return function(){clearInterval(intervalID)}
},[Timestamp])

//倒數計時，以便倒數計時結束的時間戳，計算多少秒分時
function updateTime (countdown){
  setremainingTime(getRemaningTimestamp(countdown))  



}



    return<div className="timerborder">
      <span>倒數計時</span>
      <span>{remainingTime.hour}</span>
      <span>:</span>
      <span>{remainingTime.minute}</span>
      <span>:</span>
      <span>{remainingTime.second}</span>
    </div>
    
    }
    export default Countdown