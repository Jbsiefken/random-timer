export class TimeFormatter {

    static formatTime(time: number): string{
        let hrsTime = time / 3600000;
        let hrs = Math.floor(hrsTime);
        let minTime = (hrsTime - hrs) * 60;
        let min = Math.floor(minTime);
        let secTime = (minTime - min) * 60;
        let sec = Math.floor(secTime);
        let msTime = (secTime - sec) * 100;
        let ms = Math.floor(msTime);
    
        let strHrs = hrs.toString().padStart(2, "0");
        let strMin = min.toString().padStart(2, "0");
        let strSec = sec.toString().padStart(2, "0");
        let strMs = ms.toString().padStart(2, "0");
    
        if(hrs == 0){
          return `${strMin}:${strSec}:${strMs}`;
        }
        else{
          return `${strHrs}:${strMin}:${strSec}:${strMs}`;
        }
      }

}
