import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  @Input() seconds: number = 0;
  intervalId: any;
  @Output() complete: EventEmitter<any> = new EventEmitter();
  @Output() progress: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000)
  }

  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
      this.complete.emit(null);
    }
    this.progress.emit(this.seconds);
  }

  ngOnInit() {
  }

}
