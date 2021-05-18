import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { }  

  ngOnInit(): void {

    this.startCountdown();
  }

  ngOnDestroy():void{
    this.clearTimeout();
  }

  ngOnChanges(changes):void{
    console.log("init value update to: ", changes.init.currentValue);
    this.startCountdown();
  }

  public counter:number = 0;
  private countdownTimerRef: any = null;

  @Input() init:number = null;  

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();



  startCountdown(){
    if(this.init && this.init > 0){
      this.counter = this.init;
      this.doCountdown();
    }
  }

  

  doCountdown(){
    this.countdownTimerRef = setTimeout(()=>{
      this.clearTimeout();
      this.counter = this.counter -1;
      this.processCountdown();
    }, 1000);
  }

  private clearTimeout(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  processCountdown(){
    this.onDecrease.emit(this.counter)
    console.log("count is", this.counter);

    if(this.counter == 0){
      this.onComplete.emit();
      console.log("--counter end--");
  
    } else {
      this.doCountdown();
    }
  }

  
}
