import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-system',
    template: '<div align="center" style="min-height:500px;"><h1>System Placeholder Component</h1></div>',
    inputs: ['data']
})
export class SystemComponent {
    private data:any;
}
