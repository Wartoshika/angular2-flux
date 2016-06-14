import { Injectable } from "@angular/core";

import { FluxStore } from "../_flux";

export interface ListItem {
    text: string;
}

@Injectable()
export class ListStore extends FluxStore<ListItem> {

}