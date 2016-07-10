import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-services',
    template: '<div align="center" style="min-height:500px;"><h1>Services Placeholder Component</h1></div>',
    inputs: ['data']
})
export class ServicesComponent {
    private data:any;
}
