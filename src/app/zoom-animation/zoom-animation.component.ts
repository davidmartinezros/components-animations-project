import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-zoom-animation',
  templateUrl: './zoom-animation.component.html',
  styleUrls: ['./zoom-animation.component.css'],
  animations: [
    trigger('zoomIn', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 0})), 
        animate(50, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('zoomOutDown', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4})),
        animate(50, style({transform: 'scale3d(.1, .1, .1) translate3d(0, 2000px, 0)', opacity: '0',  transformOrigin: 'center bottom', offset: 1}))
      ])
    ]),
    trigger('zoomOutUp', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1',  transformOrigin: 'center bottom', offset: 0.4})),
        animate(50, style({transform: 'scale3d(.1, .1, .1) translate3d(0, -2000px, 0)', opacity: '0', transformOrigin: 'center bottom', offset: 1}))
      ])
    ]),
    trigger('zoomOutRight', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(-42px, 0, 0)', opacity: '1',  transformOrigin: 'right center', offset: 0.4})),
        animate(50, style({transform: 'scale(.1) translate3d(2000px, 0, 0)', opacity: '0', transformOrigin: 'right center', offset: 1}))
      ])
    ]),
    trigger('zoomOutLeft', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(42px, 0, 0)', opacity: '1',  transformOrigin: 'left center', offset: 0.4})),
        animate(50, style({transform: 'scale(.1) translate3d(-2000px, 0, 0)', opacity: '0', transformOrigin: 'left center', offset: 1}))
      ])
    ]),
    trigger('zoomInDown', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', opacity: '1', offset: 0.6})),
        animate(50, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('zoomInLeft', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', opacity: '1', offset: 0.6})),
        animate(50, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('zoomInRight', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', opacity: '1', offset: 0.6})),
        animate(50, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('zoomInUp', [
      transition('* => *', [
        animate(50, style({transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', opacity: '0',  offset: 0})), 
        animate(50, style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', opacity: '1', offset: 0.6})),
        animate(50, style({transform: 'none', opacity: '1', offset: 1}))
      ])
    ]),
    trigger('zoomOut', [
      transition('* => *', [
        animate(50, style({transform: 'none', opacity: '1', offset: 0})),
        animate(50, style({transform: 'scale3d(.3, .3, .3)  ', opacity: '0', offset: 1}))
      ])
    ]),
  ]
})
export class ZoomAnimationComponent extends RootAnimationComponent {

}
