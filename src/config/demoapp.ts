import {Component, OnInit, ElementRef} from "@angular/core";
declare var $:any;
@Component({
    selector: "app",
    template: `
    `
})


export class Demo_App implements OnInit {

    private _elementRef:ElementRef;
    
    constructor(elementRef:ElementRef) {
        this._elementRef = elementRef;
    }
    
    ngOnInit(){

    }
    

}