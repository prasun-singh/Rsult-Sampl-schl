import { Component } from '@angular/core';
import studentsDataQ from './Quaterly.json';
import studentsDataH from './Hy.json';
import { Http, Response } from '@angular/http';

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
  studentResultQG: any;
  studentResultHG: any;
  studentResultQ: any;
  studentResultH: any;
  classnumber = '';

  jsonData: any = [];
  constructor(private http: Http) {
    console.log('Constructor');
    for (let arr of this.jsonData) {
      Object.keys(arr) &&
        Object.keys(arr).map((key) => {
          console.log('push');
          this.jsonDataKeys.push(key);
        });
    }
    this.http
      .get(
        'https://raw.githubusercontent.com/prasun-singh/Rsult-Sampl-schl/main/app/Quaterly.json'
      )
      .subscribe(
        (studentsDataQ) =>
          (this.studentResultQG = JSON.parse(studentsDataQ._body))
      );
    this.http
      .get(
        'https://raw.githubusercontent.com/prasun-singh/Rsult-Sampl-schl/main/app/Hy.json'
      )
      .subscribe(
        (studentsDataH) =>
          (this.studentResultHG = JSON.parse(studentsDataH._body))
      );
    console.log(this.studentResultH);
    // this.studentResultQ = JSON.parse(this.studentResultQ);
    // this.studentResultH = JSON.parse(this.studentResultH);

    //
  }

  convert(obj) {
    return Object.keys(obj).map((key) => ({
      name: key,
      value: obj[key],
    }));
  }

  checkResults() {
    console.log('Hello');
    this.studentResultQ = this.studentResultQG;
    this.studentResultH = this.studentResultHG;

    // console.log(this.studentResultH);
    // console.log(this.studentResultQ);

    for (let result of this.studentResultQ[this.classnumber]) {
      if (this.rollNumber.valueOf() == result['RollNo']) {
        // console.log(result['Name']);
        this.studentName = result['Name'];
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
        this.studentName = result['Name'];
        result = this.convert(result);
        console.log(this.studentResultH);
        result = result.slice(2, result.keys().length);
        console.log(result);
        this.studentResultH = result;
      }
    }
  }
}
