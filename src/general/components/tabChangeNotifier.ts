import {TabViewChangeNotificationService} from '../services/service.tabViewChangeNotification';

export class LMCTabChangeNotifier {
    
    protected notificationService:TabViewChangeNotificationService;
    
    constructor(notificationService:TabViewChangeNotificationService){
        this.notificationService = notificationService;
    }
    
    
}