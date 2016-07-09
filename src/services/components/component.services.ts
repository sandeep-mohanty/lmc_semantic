import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-services',
    template: '<div align="center"><h1>Services Placeholder Component</h1></div>',
    inputs: ['data']
})
export class ServicesComponent {
    private data:any;
}
