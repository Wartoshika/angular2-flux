import { EventEmitter } from "@angular/core";

export class FluxEventEmitter extends EventEmitter<any> {

    constructor() {

        // yes it is async
        super(true);
    }
}