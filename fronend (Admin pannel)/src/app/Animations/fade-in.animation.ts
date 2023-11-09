import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

const fadeInAnimation = trigger('scrollFromRight', [
  state('in', style({ transform: 'translateX(0)' })), // Initial state
  transition(':enter', [
    style({ transform: 'translateX(100%)' }), // Starting position
    animate('1s ease-out', style({ transform: 'translateX(0)' })), // Animation styles
  ]),
]);
const fadeInNavAnimation = trigger('scrollFromRight', [
  state('in', style({ transform: 'translateY(0%)' })), // Initial state
  transition(':enter', [
    style({ transform: 'translateY(100%)' }), // Starting position
    animate('0.8s ease-out', style({ transform: 'translateX(0)' })), // Animation styles
  ]),
]);



export {fadeInAnimation,fadeInNavAnimation}
