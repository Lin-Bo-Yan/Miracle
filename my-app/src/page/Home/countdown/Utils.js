import dayjs from 'dayjs'

//接受以毫秒為單位的時間戳，然後回傳一個JS對象
export function getRemaningTimestamp(TimestampMS){
//創立一個新的時間戳  

const newtimestamp=dayjs(1643673000000000);   //(Nan) 當我丟 Timestamp參數進來會轉換失敗，但丟數字就正常功能
//再創一個長量變數代表當前時刻
const nowDayjs =dayjs();   //這個正常





//console.log(getRemaningSecond(nowDayjs,newtimestamp));
return{

   
    // second:getRemaningSecond(newtimestamp,nowDayjs),
    // hour:getRemaningHour(newtimestamp,nowDayjs),
    // minute:getRemaningMinute(newtimestamp,nowDayjs)


    second:getRemaningSecond(nowDayjs,newtimestamp),
    hour:getRemaningHour(nowDayjs,newtimestamp),
    minute:getRemaningMinute(nowDayjs,newtimestamp)
    }
}





//獲取剩餘秒數，現在時間-過去時間
function getRemaningSecond(nowDayjs,newtimestamp){
    //80s 
    const second=newtimestamp.diff(nowDayjs,'second')%60
    return second
}

function getRemaningHour(nowDayjs,newtimestamp){
    const hour=newtimestamp.diff(nowDayjs,'hour')%60
    return hour
}

function getRemaningMinute(nowDayjs,newtimestamp){
    const minute=newtimestamp.diff(nowDayjs,'minute')%60
    return minute
}