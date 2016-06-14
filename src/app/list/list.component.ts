import { Component } from "@angular/core";

import { ListStore, ListItem } from "./list.store";
import { FluxViewRender } from "../_flux";

@Component({
    selector: 'my-list',
    template: require('./list.html'),
    providers: [ListStore]
})
export class ListComponent {

    constructor(private listStore: ListStore) {

    }

    addRandom(): void {


        this.listStore.addItem({
            text: Math.random().toString()
        });

    }

}