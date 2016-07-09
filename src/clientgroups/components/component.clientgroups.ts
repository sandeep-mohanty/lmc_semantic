import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-clientgroups',
    template: `
        <div align="center"><h1>Client Groups Placeholder Component</h1></div>
    `,
    inputs: ["data"]
})
export class ClientGroupsComponent {
    private data:any;
}
