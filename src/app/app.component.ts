import { Component } from "@angular/core";

import { ListComponent } from "./list";

@Component({
    selector: 'my-app',
    template: '<my-list></my-list>',
    directives: [ListComponent]
})
export class App {

}