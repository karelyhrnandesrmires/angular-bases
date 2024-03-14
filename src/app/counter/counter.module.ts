import { NgModule } from "@angular/core";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
declarations:[
    CounterComponent
], 
exports:[ /*se puede consumir desde otro modulo este CounterComponent */
    CounterComponent
]

})
export class CounterModule {


}