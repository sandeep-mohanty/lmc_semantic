import { Component, ElementRef, OnInit} from '@angular/core';

declare var $:any;
@Component({
    selector: 'lmc-app-home',
    template: `
        <div align="center" style="min-height:500px;"><h1>Home Placeholder Component</h1></div>
    `,
    inputs: ['data']
})
export class HomeComponent implements OnInit {
    private data:any;
    private _elementRef:ElementRef;
    
    constructor(elementRef:ElementRef){
        this._elementRef = elementRef
    }
    
    ngOnInit(){
        let sideBar = $(this._elementRef.nativeElement).find('.ui.left.wide.sidebar.visible.vertical')[0];
        let context = $(this._elementRef.nativeElement).find('section')[0];
        $(sideBar).sidebar({
            context:$(context),
            closable:true
        });
    }
}
