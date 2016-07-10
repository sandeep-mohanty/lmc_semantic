import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-solutions',
    template: '<div align="center" style="min-height:500px;"><h1>Solutions Placeholder Component</h1></div>',
    inputs: ['data']
})
export class SolutionsComponent {
    private data:any;
}
