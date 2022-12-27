setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour >= 12) {
        hour = hour - 12;
        am_pm = "PM";
    }

    let wakeup__time = document.getElementById("time__section__wakeup").innerHTML;
    let lunch__time = document.getElementById("time__section__lunch").innerHTML;
    let nap__time = document.getElementById("time__section__nap").innerHTML;
    let night__time = document.getElementById("time__section__night").innerHTML;

    let currentTime = hour+am_pm;


    if(currentTime === "0AM"){
        currentTime = "12AM";
    }

    let timeMatched = false;

    if(night__time.split("-")[0].trim() === currentTime){
        document.getElementById("alarm__text").innerHTML = "GOOD NIGHT !!";
        document.getElementById("alarm__msg").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("display__image").style.backgroundImage = "url('night.svg')";
        timeMatched = true;
        
    }else if(lunch__time.split("-")[0].trim() === currentTime){
        document.getElementById("alarm__text").innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
        document.getElementById("alarm__msg").innerHTML = "LET'S HAVE SOME LUNCH!!!";
        document.getElementById("display__image").style.backgroundImage = "url('noon.png')";
        timeMatched = true;
    }else if(nap__time.split("-")[0].trim() === currentTime){
        document.getElementById("alarm__text").innerHTML = "GOOD EVENING !!";
        document.getElementById("alarm__msg").innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("display__image").style.backgroundImage = "url('evening.png')";
        timeMatched = true;
    }else if(wakeup__time.split("-")[0].trim() === currentTime){
        document.getElementById("alarm__text").innerHTML = "GOOD MORNING!! WAKE UP !!";
        document.getElementById("alarm__msg").innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("display__image").style.backgroundImage = "url('morning.svg')";
        timeMatched = true;
    }
    
   


    // 2nd div according to real-time

    if(!timeMatched){
        document.getElementById("alarm__text").innerHTML = '"YOU WILL FIND THE KEY TO SUCCESS UNDER THE ALARM CLOCK"';
        document.getElementById("display__image").style.backgroundImage = "url('default_img.jpg')"
     if(hour>4 && hour <=9 && am_pm === "PM" ){
        document.getElementById("alarm__msg").innerHTML = "GOOD EVENING BUDDY!!";
    }
    
    else if((hour >=0 && hour <=4 && am_pm === "PM")){
        document.getElementById("alarm__msg").innerHTML = "GOOD AFTERNOON BUDDY!!";
    }
       
    else if((hour >=7   && hour <0 && am_pm === "AM")){
        document.getElementById("alarm__msg").innerHTML = "GOOD MORNING BUDDY!!";
    }
   else{
        document.getElementById("alarm__msg").innerHTML = "GOOD NIGHT BUDDY!!";
}
    }
     
    
    
     

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    document.getElementById("hour")
            .innerHTML = hour;
            document.getElementById("minute")
            .innerHTML = min;
            document.getElementById("second")
            .innerHTML = sec;
            document.getElementById("amPm").innerHTML = am_pm;

}
showTime();

const setAlarm = () =>{
    let wake_up_value = document.getElementById("wakeup__dropdown").value;
    let lunch_value = document.getElementById("lunch__dropdown").value;
    let nap_value = document.getElementById("nap__dropdown").value;
    let night_value = document.getElementById("night__dropdown").value;

    document.getElementById("time__section__wakeup").innerHTML = wake_up_value;
    document.getElementById("time__section__lunch").innerHTML = lunch_value;
    document.getElementById("time__section__nap").innerHTML = nap_value;
    document.getElementById("time__section__night").innerHTML = night_value;

}