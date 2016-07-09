import { Injectable } from '@angular/core';
import { TAB_NAMES } from '../constants/constant.appConstants';
import {GlobalLocalizationStringService} from '../services/service.localizationStrings';

@Injectable()
export class LMCTabsService {

    private _tabs: { name:string, displayName:string } [];
    private _localizationService:GlobalLocalizationStringService;
    private _requiredTabs:string[];
    
    constructor(globalResourceService:GlobalLocalizationStringService) { 
        this._localizationService = globalResourceService;
        this._requiredTabs = this.getTabsBasedOnPrivilege();
        this._tabs = [];
        
        this._requiredTabs.forEach((tabName)=>{
            if ( Object.prototype.hasOwnProperty.call(TAB_NAMES,tabName) ) {
                let displayName = this._localizationService.getLanguageResourceString(TAB_NAMES[tabName]);
                this._tabs.push(
                    {
                        name:TAB_NAMES[tabName],
                        displayName: displayName
                    }
                );
            }
        });
      
    }
    
    getTabs() {
        return this._tabs;
    }
    
    // This could use a http service to get the list of required tabs from the server
    private getTabsBasedOnPrivilege():string[] {
        return [
            "HOME",
            "DEVICE_GROUPS",
            "CLIENT_GROUPS",
            "DEVICES",
            "SOLUTIONS",
            "EFORMS",
            "SERVICES",
            "SYSTEM"
        ];
    }
    
}