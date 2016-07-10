import { Component} from '@angular/core';

@Component({
    selector: 'lmc-app-devicegroups',
    template: '<div align="center" style="min-height:500px;"><h1>Device Groups Placeholder Component</h1></div>',
    inputs: ["data"]
})
export class DeviceGroupsComponent {
    private data:any;
}
