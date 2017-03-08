import { Component, OnInit } from '@angular/core'
import { FactorialService } from './factorial.service';

@Component({
  selector: 'app-root',
  template: `
    <div [hidden]="computingFactorials == false" class="progress-bar">
      <div [style.width.%]="progress" class="progress"></div>
    </div>

    <div class="header">
      <h1>Factorial calculator</h1>
      <label>Compute the next {{numberOfFactorials}} factorials, starting on:</label>
      <input [(ngModel)]="firstFactorial" type="number" placeholder="Set the start number">
      <button (click)="computeFactorials()">Compute factorials</button>
      <button (click)="cleanResults()" [disabled]="computingFactorials == true">Clean results</button>  
    </div>


    <div class="items" *ngFor="let item of items">
      {{item}}
    </div>
  `,
  styles: [
    `
    div label{
        display: block;
    }

    .header{
        padding: 5px;
        padding-bottom: 20px;
        font-size: 20px;
    }

    button:disabled{
        color: #aaa;
        background-color: #777;
    }

    button{
        padding: 10px;
        border: none;
        background-color: #333;
        color: #ccc;
        margin: 5px;
    }

    input{
        padding: 8px;
        margin: 5px;
    }

    .items{
        font-size: 20px;
        color: #333;
        padding: 20px;
    }

    .progress {
        height: 100%;
        background-color: #333;
    }

    .progress-bar {
        height: 20px;
        width: calc(100% - 16px);
        margin: 8px;
        border: 1px solid;
        background-color: white;
        position: fixed;
    }
    `
  ]
})
export class AppComponent implements OnInit {
  items = [];
  progress: number = 0;
  computingFactorials: boolean = false;
  firstFactorial: number = 700;
  numberOfFactorials: number = 50;

  constructor(private factorialService: FactorialService) {}

  ngOnInit() {

  }



  public computeFactorials() {
    this.items = [];
    this.progress = 0;
    this.computingFactorials = true;

    for (let i = this.firstFactorial; i < this.firstFactorial + this.numberOfFactorials; i++) {
      setTimeout(this.getFactorialForN(i), 0);
    }
  }
  
  private getFactorialForN(i: number) {
    return () => {
      let value = this.factorialService.factorial(i);
      this.items = [...this.items, `${i} - ${value}`];
      this.progress += 100.0 / this.numberOfFactorials;
      console.log('progress: ', this.progress);

      if (i === this.firstFactorial + this.numberOfFactorials - 1 ) {
        this.computingFactorials = false;
      }
    };
  }

  public cleanResults() {
    this.items = [];
    this.progress = 0;
  }
}
