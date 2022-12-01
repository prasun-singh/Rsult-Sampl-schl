import { Component } from '@angular/core';
import studentsDataQ from './Quaterly.json';
import studentsDataH from './Hy.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  jsonDataKeys: any = [];
  rollNumber = '';
  studentName = '';
  studentResult: any;
  studentResultQ: any;
  studentResultH: any;
  classnumber = '';

  jsonData: any = [];
  constructor() {
    console.log('Constructor');
    for (let arr of this.jsonData) {
      Object.keys(arr) &&
        Object.keys(arr).map((key) => {
          console.log('push');
          this.jsonDataKeys.push(key);
        });
    }
  }

  convert(obj) {
    return Object.keys(obj).map((key) => ({
      name: key,
      value: obj[key],
    }));
  }

  checkResults() {
    console.log('Hello');
    this.studentResultQ = studentsDataQ;
    this.studentResultH = studentsDataH;
    console.log(this.studentResultH);
    console.log(this.studentResultQ);

    for (let result of this.studentResultQ[this.classnumber]) {
      if (this.rollNumber.valueOf() == result['RollNo']) {
        // console.log(result['Name']);
        // this.studentName = result['Name'];
        result = this.convert(result);
        console.log(this.studentResultQ);
        result = result.slice(2, result.keys().length);
        console.log(result);
        this.studentResultQ = result;
      }
    }
    for (let result of this.studentResultH[this.classnumber]) {
      if (this.rollNumber.valueOf() == result['RollNo']) {
        // console.log(result['Name']);
        // this.studentName = result['Name'];
        result = this.convert(result);
        console.log(this.studentResultH);
        result = result.slice(2, result.keys().length);
        console.log(result);
        this.studentResultH = result;
      }
    }
  }
}
