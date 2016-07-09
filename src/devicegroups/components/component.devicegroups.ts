import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-devicegroups',
    template: '<div align="center"><h1>Device Groups Placeholder Component</h1></div>',
    inputs: ["data"]
})
export class DeviceGroupsComponent {
    private data:any;
}
