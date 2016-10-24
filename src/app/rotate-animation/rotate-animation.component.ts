import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-rotate-animation',
  templateUrl: './rotate-animation.component.html',
  styleUrls: ['./rotate-animation.component.css'],
  animations: [
    trigger('rotateIn', [
      transition('* => *', [
        animate(50, style({transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', transformOrigin: 'center', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 1}))
      ])
    ]),
    trigger('rotateInDownLeft', [
      transition('* => *', [
        animate(50, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInDownRight', [
      transition('* => *', [
        animate(50, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInUpLeft', [
      transition('* => *', [
        animate(50, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateInUpRight', [
      transition('* => *', [
        animate(50, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutDownLeft', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0})),
        animate(50, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutDownRight', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0})),
        animate(50, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutUpLeft', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'left bottom', offset: 0})),
        animate(50, style({transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', transformOrigin: 'left bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOutUpRight', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'right bottom', offset: 0})),
        animate(50, style({transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', transformOrigin: 'right bottom', offset: 1}))
      ])
    ]),
    trigger('rotateOut', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', transformOrigin: 'center', offset: 0})), 
        animate(50, style({transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', transformOrigin: 'center', offset: 1}))
      ])
    ]),
  ]
})
export class RotateAnimationComponent extends RootAnimationComponent {

}
