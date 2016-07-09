import { Injectable } from '@angular/core';
import { SEARCHTYPES, DEVICESSTRING } from '../../general/constants/constant.appConstants';

@Injectable()
export class DevicesConstantStringService {

    private searchTypes: { name:string, displayName:string } [];
    
    constructor() { 
        
        this.searchTypes = [
            {name:SEARCHTYPES.ADDRESS, displayName: "Address"},
            {name:SEARCHTYPES.HOSTNAME, displayName: "Hostname"},
            {name:SEARCHTYPES.DEVICEMODEL, displayName: "Device Model"},
            {name:SEARCHTYPES.SERIALNUMBER, displayName: "Serial Number"},
            {name:SEARCHTYPES.CONTACTNAME, displayName: "Contact Name"},
            {name:SEARCHTYPES.CONTACTLOCATION, displayName: "Contact Location"},
            {name:SEARCHTYPES.PROPERTYTAG, displayName: "Property Tag"}
        ];
        
    }
    
    getSearchTypes() {
        return this.searchTypes;
    }
    
        
}