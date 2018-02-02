import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'iphone-card',
  templateUrl: './iphone-card.component.html',
  styleUrls: ['./iphone-card.component.css']
})
export class IphoneCardComponent implements OnInit {

  @Input() iphone;

  constructor() { }

  ngOnInit() {
  }

}
