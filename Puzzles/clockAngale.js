// Clock Angle Problem
// Clock Angle Problem: Given time in hh:mm format in 24-hour notation, 
// calculate the shorter angle between the hour and minute hand in an analog clock.


function clockAngle(hour, minute){

    if(hour < 0 || hour >12 || minute < 0 || minute > 59){
        return "Invalide Inpute";
    }

    let hourAngle = (hour * 30 + minute * 0.5);
    let minuteAngle = minute *6
    
    let angle = Math.abs(hourAngle - minuteAngle);

    return angle % 360;


}

const hour = 6
const minute = 15


const result = clockAngle(hour, minute);
console.log(`The angle between the hour and minute hands at ${hour}:${minute} is ${result} degrees.`);