import { InjectionToken } from '@angular/core';

export interface MathFns {
  square: (number) => number;
  add: (number) => number;
  subtract: (number) => number;
}

export class MyMathFns implements MathFns {
  square(number: any) {
    return 0
  }
  add(number: any) {
    return 0
  }
  subtract(number: any) {
    return 0
  }

}
export const MathToken = new InjectionToken<MathFns>('Something');

