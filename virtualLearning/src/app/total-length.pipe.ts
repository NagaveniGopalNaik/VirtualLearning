import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalLength'
})
export class TotalLengthPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let hour = Math.floor(value / 3600);
    let minute = Math.floor((value % 3600)/60);
    let second = Math.floor((value % 3600) % 60);
    let duration="";
    if(hour ==0){
      if(second == 0){
        duration = String(minute);
      } else {
        duration = minute+"."+second;
      }
    } else if(minute == 0){
      duration = String(second)
    } else{
      duration =hour +"."+minute
    }
    
    return duration;
  }

}
