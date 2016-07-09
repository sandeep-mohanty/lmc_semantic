import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-system',
    template: '<div align="center"><h1>System Placeholder Component</h1></div>',
    inputs: ['data']
})
export class SystemComponent {
    private data:any;
}
