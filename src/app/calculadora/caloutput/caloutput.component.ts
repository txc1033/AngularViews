import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caloutput',
  templateUrl: './caloutput.component.html',
  styleUrls: ['./caloutput.component.css']
})
export class CaloutputComponent implements OnInit {
   @Input() resultado: number;
  constructor() { }

  ngOnInit() {
  }

}
