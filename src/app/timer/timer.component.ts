import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  counter = 0;
  min: any = '00';
  sec: any = '00';
  msec: any = '00';
  timeRef: any;
  running = false;
  buttonText = 'Start';
  laps: any = [];
  constructor() {}

  ngOnInit(): void {}

  handleTimer() {
    this.running = !this.running;
    if (this.running) {
      this.buttonText = 'Stop';
      const startTime = Date.now() - this.counter;
      this.timeRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      this.buttonText = 'Resume';
      clearInterval(this.timeRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.buttonText = 'Start';
    this.counter = 0;
    this.laps = [];
    this.min = "00";
    this.sec = "00";
    this.msec = "00";
    clearInterval(this.timeRef);
  }

  addLaps() {
    const lapTime = this.min + ":" + this.sec + ":" + this.msec;
    this.laps.push(lapTime);
  }

  format() {
    if (this.counter) {
      this.msec = Math.floor((this.counter % 1000) / 10).toFixed(0);
      this.min = Math.floor(this.counter / 60000).toFixed(0);
      this.sec = Math.floor((this.counter % 60000) / 1000).toFixed(0);
      if (Number(this.min) < 10) {
        this.min = '0' + this.min;
      } else {
        this.min = '' + this.min;
      }
      if (Number(this.msec) < 10) {
        this.msec = '0' + this.msec;
      } else {
        this.msec = '' + this.msec;
      }
      if (Number(this.sec) < 10) {
        this.sec = '0' + this.sec;
      } else {
        this.sec = '' + this.sec;
      }
    }
    return this.min + ':' + this.sec + ":" + this.msec;
  }
}
