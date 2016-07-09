import { Component, OnInit, ElementRef } from "@angular/core";
import { LMCHeader } from '../general/components/component.header';
import { LMCFooter } from '../general/components/component.footer';
import { LMCAppContainer } from "../general/components/component.appcontainer";
import { GlobalLocalizationStringService } from '../general/services/service.localizationStrings';

declare var $:any;

@Component({
    selector: "app",
    templateUrl: "../../assets/templates/config/app.html",
    directives: [LMCHeader, LMCAppContainer, LMCFooter],
    providers: [ GlobalLocalizationStringService ]
})

export class LMC_App implements OnInit {

    private _elementRef:ElementRef;
    private _localizationService:GlobalLocalizationStringService;
    private user:string;
    private applicationName:string;
    private userDropdownOptions: {id:string,name:string}[];
    
    constructor(elementRef:ElementRef, localizationService:GlobalLocalizationStringService) {
        this._elementRef = elementRef;
        this._localizationService = localizationService;
        this.user = 'Sandeep Mohanty';
        this.applicationName = 'Lexmark Management Console';
        this.userDropdownOptions = [
            {
                "id": "changeusername",
                "name": this._localizationService.getLanguageResourceString("Change Username")
            },
            {
                "id": "changepassword",
                "name": this._localizationService.getLanguageResourceString("Change Password")
            },
            {
                "id": "LogOut",
                "name": this._localizationService.getLanguageResourceString("Logout")
            }
        ];
    }
    
    ngOnInit() {


    }
    
}