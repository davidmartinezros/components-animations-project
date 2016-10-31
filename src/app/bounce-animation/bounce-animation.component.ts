import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-bounce-animation',
  templateUrl: './bounce-animation.component.html',
  styleUrls: ['./bounce-animation.component.css'],
  animations: [
    trigger('bounceIn', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(0,0,0)', offset: 0})), 
        animate(100, style({transform: 'translate3d(0,0,0)', offset: 0.2})),
        animate(100, style({transform: 'translate3d(0,-30px,0)', offset: 0.4})),
        animate(100, style({transform: 'translate3d(0,-30px,0)', offset: 0.43})),
        animate(100, style({transform: 'translate3d(0,0,0)', offset: 0.53})),
        animate(100, style({transform: 'translate3d(0,-15px,0)', offset: 0.7})),
        animate(100, style({transform: 'translate3d(0,0,0)', offset: 0.8})),
        animate(100, style({transform: 'translate3d(0,-15px,0)', offset: 0.9})),
        animate(100, style({transform: 'translate3d(0,0,0)', offset: 1}))
      ])
    ]),
    trigger('bounceOut', [
      transition('* => *', [
        animate(100, style({transform: 'scale3d(.3, .3, .3)', opacity: '0', offset: 0})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2})),
        animate(100, style({transform: 'scale3d(.9, .9, .9)', offset: 0.4})),
        animate(100, style({transform: 'scale3d(1.03, 1.03, 1.03)', opacity: '1', offset: 0.6})),
        animate(100, style({transform: 'scale3d(.97, .97, .97)', offset: 0.8})),
        animate(100, style({transform: 'scale3d(1, 1, 1)', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('bounceInDown', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0})), 
        animate(100, style({transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6})),
        animate(100, style({transform: 'translate3d(0, -100px, 0)', offset: 0.75})),
        animate(100, style({transform: 'translate3d(0, 5px, 0)', offset: 0.9})),
        animate(100, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('bounceOutDown', [
      transition('* => *', [
        animate(100, style({transform: 'none', opacity: '1', offset: 0})),
        animate(100, style({transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2})),
        animate(100, style({transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.4})),
        animate(100, style({transform: 'translate3d(0, -20px, 0)', opacity: '1', offset: 0.45})),
        animate(100, style({transform: 'translate3d(0, 2000px, 0)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('bounceInUp', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(0, 3000px, 0)', opacity: '0', offset: 0})),
        animate(100, style({transform: 'translate3d(0, -25px, 0)', opacity: '1', offset: 0.6})),
        animate(100, style({transform: 'translate3d(0, 100px, 0)', offset: 0.75})),
        animate(100, style({transform: 'translate3d(0, -5px, 0)', offset: 0.9})),
        animate(100, style({transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('bounceOutUp', [
      transition('* => *', [
        animate(100, style({transform: 'none', opacity: '1', offset: 0})),
        animate(100, style({transform: 'translate3d(0, 50px, 0)', opacity: '1', offset: 0.2})),
        animate(100, style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.4})),
        animate(100, style({transform: 'translate3d(0, 20px, 0)', opacity: '1', offset: 0.45})),
        animate(100, style({transform: 'translate3d(0, -2000px, 0)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('bounceInLeft', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(-3000px, 0, 0)', opacity: '0', offset: 0})), 
        animate(100, style({transform: 'translate3d(25px, 0, 0)', opacity: '1', offset: 0.6})),
        animate(100, style({transform: 'translate3d(-100px, 0, 0)', offset: 0.75})),
        animate(100, style({transform: 'translate3d(5px, 0, 0)', offset: 0.9})),
        animate(100, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('bounceOutLeft', [
      transition('* => *', [
        animate(100, style({transform: 'none', opacity: '1', offset: 0})),
        animate(100, style({transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2})),
        animate(100, style({transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4})),
        animate(100, style({transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45})),
        animate(100, style({transform: 'translate3d(-2000px, 0, 0)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('bounceInRight', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(3000px, 0, 0)', opacity: '0', offset: 0})), 
        animate(100, style({transform: 'translate3d(-25px, 0, 0)', opacity: '1', offset: 0.6})),
        animate(100, style({ transform: 'translate3d(100px, 0, 0)', offset: 0.75})),
        animate(100, style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9})),
        animate(100, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('bounceOutRight', [
      transition('* => *', [
        animate(100, style({transform: 'none', opacity: '1', offset: 0})),
        animate(100, style({transform: 'translate3d(100px, 0, 0)', opacity: '1', offset: 0.2})),
        animate(100, style({transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.4})),
        animate(100, style({transform: 'translate3d(-20px, 0, 0)', opacity: '1', offset: 0.45})),
        animate(100, style({transform: 'translate3d(2000px, 0, 0)', opacity: '0', offset: 1}))
      ])
    ]),
  ]
})
export class BounceAnimationComponent extends RootAnimationComponent {

}
