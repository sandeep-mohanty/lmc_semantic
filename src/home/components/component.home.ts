import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-home',
    template: '<div align="center"><h1>Home Placeholder Component</h1></div>',
    inputs: ['data']
})
export class HomeComponent {
    private data:any;
}
