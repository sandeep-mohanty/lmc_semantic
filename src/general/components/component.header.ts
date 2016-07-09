import { Component, OnInit } from '@angular/core';

@Component({
    selector:"lmc-header",
    templateUrl: "../../../assets/templates/general/components/component.header.html",
    inputs: ["pageTitle:applicationName","userDropdownOptions","user"]
})

export class LMCHeader implements OnInit {
    private pageTitle: string ;
    private user: string;
    private userDropdownOptions: {id:string,name:string}[];

    constructor () {
    }
    
    ngOnInit() {
    }
}