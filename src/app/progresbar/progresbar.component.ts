import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresbar',
  templateUrl: './progresbar.component.html',
  styleUrls: ['./progresbar.component.scss']
})
export class ProgresbarComponent implements OnInit {

  @Input() progressbar: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
