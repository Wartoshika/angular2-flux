import { Component } from "@angular/core";

import { ListStore, ListItem } from "./list.store";

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