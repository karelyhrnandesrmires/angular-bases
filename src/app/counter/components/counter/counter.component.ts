import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h3>Counter: {{ counter }}</h3>

<button (click) = "increaseBy(1)">+1</button>
<button (click) ="resetValue()">Reset</button>
<button (click) ="increaseBy(-1)">-1</button>
    
    
    `
})

export class CounterComponent {
    constructor() { }

    public counter: number = 10;

    increaseBy(value: number): void {
        //this.counter = this.counter + 1;
        this.counter += value;// forma corta
    }

    resetValue(): void {
        this.counter = 10;
    }

}