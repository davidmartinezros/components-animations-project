import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-others-animation',
  templateUrl: './others-animation.component.html',
  styleUrls: ['./others-animation.component.css'],
  animations: [
    trigger('flash', [
      transition('* => *', [
        animate(150, style({opacity: '1', offset: 0})), 
        animate(150, style({opacity: '0', offset: 0.25})), 
        animate(150, style({opacity: '1', offset: 0.5})), 
        animate(150, style({opacity: '0', offset: 0.75})), 
        animate(150, style({opacity: '1', offset: 1}))
      ])
    ]),
    trigger('pulse', [
    transition('* => *', [
        animate(300, style({transform: 'scale3d(1, 1, 1)', offset: 0})), 
        animate(300, style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5})), 
        animate(300, style({transform: 'scale3d(1, 1, 1)', offset: 1}))
      ])
    ]),
    trigger('rubberBand', [
      transition('* => *', [
        animate(100, style({transform: 'scale3d(1, 1, 1)', offset: 0})), 
        animate(100, style({transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3})), 
        animate(100, style({transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4})), 
        animate(100, style({transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5})), 
        animate(100, style({transform: 'scale3d(.95, 1.05, 1)', offset: 0.65})), 
        animate(100, style({transform: 'scale3d(1.05, .95, 1)', offset: 0.75})), 
        animate(100, style({transform: 'scale3d(1, 1, 1)', offset: 1}))
      ])
    ]),
    trigger('lightSpeedInRight', [
      transition('* => *', [
        animate(200, style({transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0})), 
        animate(200, style({transform: 'skewX(20deg)', opacity: '1', offset: 0.6})), 
        animate(200, style({transform: 'skewX(-5deg)', opacity: '1', offset: 0.8})), 
        animate(200, style({transform: 'none', opacity: '1 ', offset: 1}))
      ])
    ]),
    trigger('lightSpeedOutRight', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1 ', offset: 0})), 
        animate(450, style({transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('lightSpeedInLeft', [
      transition('* => *', [
        animate(200, style({transform: 'translate3d(-100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0})), 
        animate(200, style({transform: 'skewX(20deg)', opacity: '1', offset: 0.6})), 
        animate(200, style({transform: 'skewX(-5deg)', opacity: '1', offset: 0.8})), 
        animate(200, style({transform: 'none', opacity: '1 ', offset: 1}))
      ])
    ]),
    trigger('lightSpeedOutLeft', [
      transition('* => *', [
        animate(450, style({transform: 'none', opacity: '1 ', offset: 0})), 
        animate(450, style({transform: 'translate3d(-100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1}))
      ])
    ]),
    trigger('shake', [
      transition('* => *', [
        animate(100, style({transform: 'translate3d(0, 0, 0)', offset: 0})), 
        animate(100, style({transform: 'translate3d(-10px, 0, 0)', offset: 0.1})), 
        animate(100, style({transform: 'translate3d(10px, 0, 0)', offset: 0.2})), 
        animate(100, style({transform: 'translate3d(-10px, 0, 0)', offset: 0.3})), 
        animate(100, style({transform: 'translate3d(10px, 0, 0)', offset: 0.4})), 
        animate(100, style({transform: 'translate3d(-10px, 0, 0)', offset: 0.5})), 
        animate(100, style({transform: 'translate3d(10px, 0, 0)', offset: 0.6})), 
        animate(100, style({transform: 'translate3d(-10px, 0, 0)', offset: 0.7})), 
        animate(100, style({transform: 'translate3d(10px, 0, 0)', offset: 0.8})), 
        animate(100, style({transform: 'translate3d(-10px, 0, 0)', offset: 0.9})), 
        animate(100, style({transform: 'translate3d(0, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('swing', [
      transition('* => *', [
        animate(150, style({transform: 'translate(0%)', offset: 0})), 
        animate(150, style({transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2})), 
        animate(150, style({transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4})), 
        animate(150, style({transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6})), 
        animate(150, style({transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8})), 
        animate(150, style({transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1}))
      ])
    ]),
    trigger('tada', [
      transition('* => *', [
        animate(100, style({transform: 'scale3d(1, 1, 1)', offset: 0})), 
        animate(100, style({transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.1})), 
        animate(100, style({transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)', offset: 0.2})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8})), 
        animate(100, style({transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9})), 
        animate(100, style({transform: 'scale3d(1, 1, 1)', offset: 1}))
      ])
    ]),
    trigger('wobble', [
      transition('* => *', [
        animate(150, style({transform: 'translate(0%)', offset: 0})), 
        animate(150, style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.15})), 
        animate(150, style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45})), 
        animate(150, style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6})), 
        animate(150, style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75})), 
        animate(150, style({transform: 'translateX(0%)', offset: 1}))
      ])
    ]),
  ]
})
export class OthersAnimationComponent extends RootAnimationComponent {

}
