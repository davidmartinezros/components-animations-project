import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-roll-animation',
  templateUrl: './roll-animation.component.html',
  styleUrls: ['./roll-animation.component.css'],
  animations: [
    trigger('rollIn', [
      transition('* => *', [
        animate(450, style({transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0})), 
        animate(450, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('rollOut', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1', offset: 0})), 
        animate(450, style({transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 1}))
      ])
    ]),
  ]
})
export class RollAnimationComponent extends RootAnimationComponent {

}
