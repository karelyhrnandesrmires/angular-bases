// a-module + tab (crear module con snnipets)
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';


@NgModule({
    imports: [CommonModule],
    exports: [HeroComponent, ListComponent],
    declarations: [HeroComponent, ListComponent],
})
export class HeroesModule { }


//forma manual
// import { NgModule } from "@angular/core";
// import { HeroComponent } from "./hero/hero.component";
// import { ListComponent } from "./list/list.component";


// @NgModule({
//     declarations: [HeroComponent, ListComponent],
//     exports: [HeroComponent, ListComponent]


// })

// export class HeroesModule {



// }