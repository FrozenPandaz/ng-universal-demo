import { Injectable } from '@angular/core';

let Big = require('big.js');


@Injectable()
export class FactorialService {

  constructor() {
    Big.E_POS = 5;
  }

  private factorialize(n: number) {
    if (n === 0 || n === 1) {
        return 1;
    }else {
      let bigNum = new Big(n);
      return bigNum.mul(this.factorialize(n - 1));
    }
  }

  public factorial(n: number) {
    return  this.factorialize(n).toPrecision(5);
  }
}
