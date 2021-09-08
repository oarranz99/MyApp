import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  minutes;
  seconds;
  isPaused = false;
  buttonLabel = 'Stop';
  running;
  timeout;
   languageCode: string ='fr';
  constructor() {
    this.reset();
    this.running = setInterval(() => this.tick(), 1000);
  }
  reset() {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePause();
  }
  public tick() {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.reset();
        }
      }
    }
  }
  togglePause() {
    this.isPaused = !this.isPaused;
    // if countdown has started
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
  localizedLabelsMap: any = {
    'en' : 'Start timer',
    'es' : 'Comenzar temporizador',
    'fr' : 'Demarrer une sequence',
    'other' : 'Start timer' 
  }

  ngOnInit() {
  }
  onCountdownCompleted(): void {
  alert('Time up !');
  }

}
