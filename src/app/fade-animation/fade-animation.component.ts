import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { RootAnimationComponent } from '../root-animation/root-animation.component';

@Component({
  selector: 'app-fade-animation',
  templateUrl: './fade-animation.component.html',
  styleUrls: ['./fade-animation.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('* => *', [
        animate(50, style({opacity: '0', offset: 0})), 
        animate(50, style({opacity: '1', offset: 1}))
      ])
    ]),
    trigger('fadeOut', [
      transition('* => *', [
        animate(50, style({opacity: '1', offset: 0})), 
        animate(50, style({opacity: '0', offset: 1}))
      ])
    ]),
    trigger('fadeInDown', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutDown', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutUp', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutUpBig', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInUp', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInDownBig', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutDownBig', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInUpBig', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInRightBig', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutLeftBig', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})), 
        animate(50, style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeInLeft', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInLeftBig', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeInRight', [
      transition('* => *', [
        animate(50, style({opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0})), 
        animate(50, style({opacity: '1', transform: 'none', offset: 1}))
      ])
    ]),
    trigger('fadeOutLeft', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})), 
        animate(50, style({opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutRight', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1}))
      ])
    ]),
    trigger('fadeOutRightBig', [
      transition('* => *', [
        animate(50, style({opacity: '1', transform: 'none', offset: 0})),
        animate(50, style({opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1}))
      ])
    ]),
  ]
})
export class FadeAnimationComponent extends RootAnimationComponent {

}
