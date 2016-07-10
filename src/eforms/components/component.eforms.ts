import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-eforms',
    template: '<div align="center" style="min-height:500px;"><h1>Eforms Placeholder Component</h1></div>',
    inputs: ["data"]
})
export class EformsComponent {
    private data:any;
}
