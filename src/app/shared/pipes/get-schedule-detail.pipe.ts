import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'getScheduleDetail'
})
export class GetScheduleDetailPipe implements PipeTransform {
  day = null;
  constructor(private datePipe: DatePipe) { }

  transform(value: any, args?: any): any {
    if (value) {
      this.day = this.datePipe.transform(value, 'EEEE');
      if (typeof this.day == 'string') {
        this.day = this.day.substr(0, 3);
        if (args && args.data && args.data[this.day] && args.data[this.day][args.get]) {
          return args.data[this.day][args.get];
        }
      }
    }

    return null
  }

}
