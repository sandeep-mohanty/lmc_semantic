import { Component, OnInit, EventEmitter } from '@angular/core';
import { LMCTabsComponent } from './component.tabs';
import { TabViewChangeNotificationService } from '../services/service.tabViewChangeNotification';
import { ClientGroupsComponent } from '../../clientgroups/components/component.clientgroups';
import { DeviceGroupsComponent } from '../../devicegroups/components/component.devicegroups';
import { DevicesComponent } from '../../devices/components/component.devices';
import { EformsComponent } from '../../eforms/components/component.eforms';
import { HomeComponent } from '../../home/components/component.home';
import { ServicesComponent } from '../../services/components/component.services';
import { SolutionsComponent } from '../../solutions/components/component.solutions';
import { SystemComponent } from '../../system/components/component.system';
import { TAB_NAMES } from '../constants/constant.appConstants';
import { TabChangeNotificationObject } from '../interfaces/interface.tabChangeNotificationObject';
import { LMCTabChangeNotifier } from './tabChangeNotifier';

@Component({
    selector: 'lmc-app-container',
    templateUrl: '../../assets/templates/general/components/component.appcontainer.html',
    directives: [
        LMCTabsComponent,
        ClientGroupsComponent,
        DeviceGroupsComponent,
        DevicesComponent,
        EformsComponent,
        HomeComponent,
        ServicesComponent,
        SolutionsComponent,
        SystemComponent
    ],
    providers: [TabViewChangeNotificationService]
})
export class LMCAppContainer extends  LMCTabChangeNotifier implements OnInit {
    
    private activeTab:{name:string, data ?: any};
    private updateView:any;
    private TAB_NAMES:any;
    private tabData:any;
    
    constructor(notificationService:TabViewChangeNotificationService) { 
        
        super(notificationService);
        this.updateView = (activeTabInfo:TabChangeNotificationObject) => {
            this.activeTab.name = activeTabInfo.tabName;
            this.activeTab.data = activeTabInfo.data;
            if (this.activeTab.data) {
                this.tabData[this.activeTab.name] = this.activeTab.data;
            }
        };
        this.TAB_NAMES = TAB_NAMES;
        
        // Initialize all data for the tabs to null
        this.tabData = {};
        for (let tabName in TAB_NAMES) {
            
            if ( Object.prototype.hasOwnProperty.call(TAB_NAMES, tabName) ) {
                this.tabData[TAB_NAMES[tabName]] = null;
            }
        }
        
        this.notificationService.subscribe(this.updateView);
        this.activeTab = {
            name: TAB_NAMES.HOME,
            data: null
        };

    }
    
    ngOnInit() { }

}