import { EventEmitter } from '@angular/core';
import { TabChangeNotificationObject } from '../interfaces/interface.tabChangeNotificationObject';

export class TabViewChangeNotificationService {

    private tabChanged: EventEmitter<TabChangeNotificationObject>;
    
    constructor() {
       this.tabChanged = new EventEmitter<TabChangeNotificationObject>();
    }
    
    broadcast(broadcastObject:TabChangeNotificationObject):void {
        this.tabChanged.emit(broadcastObject);
    }
    
    subscribe(eventHandlerFunction):any {
        return this.tabChanged.subscribe(eventHandlerFunction);
    }
    
}
