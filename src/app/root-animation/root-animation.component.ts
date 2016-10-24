import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root-animation',
  templateUrl: './root-animation.component.html',
  styleUrls: ['./root-animation.component.css']
})
export abstract class RootAnimationComponent implements OnInit {

  constructor() { }

  show: boolean = false;

  ngOnInit() {
  }

}
