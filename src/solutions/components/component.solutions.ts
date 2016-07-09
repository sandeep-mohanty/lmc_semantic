import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-solutions',
    template: '<div align="center"><h1>Solutions Placeholder Component</h1></div>',
    inputs: ['data']
})
export class SolutionsComponent {
    private data:any;
}
