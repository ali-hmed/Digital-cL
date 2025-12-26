

function updateClock(){
    const now=new Date();
    const hours=String(now.getHours()).padStart(2, '0');
    const minutes=String(now.getMinutes()).padStart(2, '0');
    const seconds=String(now.getSeconds()).padStart(2, '0');
    const ampm=hours>=12?'PM':'AM';

    document.querySelector('.hours-min-sec').textContent=`${hours}:${minutes}:${seconds} ${ampm}`;



const option={
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
}
document.querySelector('.date').textContent=now.toLocaleDateString(undefined, option);



}
// updateClock()
setInterval(updateClock, 1000);