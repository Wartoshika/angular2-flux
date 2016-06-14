import { FluxEventEmitter } from "./FluxEventEmitter";

export abstract class FluxStore<T> extends FluxEventEmitter {

    // stackholder of the store items
    private storeRepository: Array<T> = [];

    /**
     * adds an item to the stack
     */
    public addItem(item: T): boolean {

        // adds the item to the stack and checks if the amount changes
        this.storeRepository.push(item);

        // emits the eventemitter and triggers the flux
        this.emit(item);

        // success!
        return true;
    }

    /**
     * remove item by item itself or via numeric index
     */
    public removeByItem(item: T): boolean {

        // set index
        let index = -1;

        // search the index
        index = this.storeRepository.indexOf(item);

        // found?
        if (index === -1) {

            // not found
            return false;
        }

        // remove by index
        return this.removeByIndex(index);
    }

    /**
     * removes an item by its numeric index
     */
    public removeByIndex(index: number): boolean {

        // item entfernen
        let removed = this.storeRepository.splice(index, 1);

        // emits the eventemitter and triggers the flux
        this.emit(removed);

        // erfolg?
        return removed.length === 1;
    }

    public resetStore(): boolean {

        // zurücksetzen
        this.storeRepository = [];

        return true;
    }

    /**
     * gibt den aktuellen store zurück
     */
    public getStore(): Array<T> {
        return this.storeRepository;
    }

}