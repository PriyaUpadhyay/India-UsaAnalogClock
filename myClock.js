setInterval(() => {
	locTime = new Date();
    locHtime = locTime.getHours();
    locMtime = locTime.getMinutes();
    locStime = locTime.getSeconds();
    locHrotation = 30*locHtime + locMtime/2;
    locMrotation = 6*locMtime;
    locSrotation = 6*locStime;

    hour.style.transform = `rotate(${locHrotation}deg)`;
    minute.style.transform = `rotate(${locMrotation}deg)`;
    second.style.transform = `rotate(${locSrotation}deg)`;


//calculation for usa time
    usaTime = new Date().toLocaleString('en-us',{timeZone : 'America/New_York'} );
    usaTime = usaTime.substring(10);//" 2:05:47 AM"
    usaTime = usaTime.slice(0,-3); //" 2:05:47"

    usaHour = usaTime.slice(0,-5); //" 2:"
    usaHour = usaHour.slice(0,-1);//" 2" 
    usaHour = parseInt(usaHour); //final hour time in integer 2

    usaMin = usaTime.slice(-5,-3); //"05"
    usaMin = parseInt(usaMin); // 5

    usaSec = usaTime.slice(-2,); //"47"
    usaSec = parseInt(usaSec);

    usaHrotation = 30*usaHour + usaMin/2;
    usaMrotation = 6*usaMin;
    usaSrotation = 6*usaSec;

    usHour.style.transform = `rotate(${usaHrotation}deg)`;
    usMinute.style.transform = `rotate(${usaMrotation}deg)`;
    usSecond.style.transform = `rotate(${usaSrotation}deg)`;

    document.getElementById("usTime").innerText = new Date().toLocaleString('en-us',{timeZone : 'America/New_York'} );
    document.getElementById("locTime").innerText = new Date().toLocaleString('en-us',{timeZone : 'Asia/kolkata'} );



	},1000);


