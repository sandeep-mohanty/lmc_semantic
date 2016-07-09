import { Component, OnInit } from '@angular/core';
import { LMCTabsService } from '../services/service.tabs';
import { TabViewChangeNotificationService } from '../services/service.tabViewChangeNotification';
import { TAB_NAMES } from '../constants/constant.appConstants';
import { LMCTabChangeNotifier } from './tabChangeNotifier';

@Component({
    selector: 'lmc-app-tabs',
    templateUrl: '../../assets/templates/general/components/component.tabs.html',
    providers: [LMCTabsService ],
    styleUrls: ['../../assets/css/general/components/component.tabs.css']
})
export class LMCTabsComponent extends LMCTabChangeNotifier implements OnInit {
    
    private tabs: { name: string, displayName: string } [];
    private tabsService: LMCTabsService;
    private selectedTab:string;
    
    constructor( tabsService: LMCTabsService, tabViewNotificationService:TabViewChangeNotificationService) {
        super(tabViewNotificationService);
        this.tabsService = tabsService;
        this.tabs =  this.tabsService.getTabs();
        this.selectedTab = TAB_NAMES.HOME;
        
    }
    ngOnInit() {
        console.dir(this.tabs);
    }
    
    getTabs():{ name: string, displayName: string } []{
        return this.tabs;
    }
    
    getSelectedTab(): string {
        return this.selectedTab;
    }
    
    setSelectedTab(tab:string): void {
        this.selectedTab = tab;
        this.notificationService.broadcast({
            tabName: this.selectedTab,
            data: null
        });
    }
    
}