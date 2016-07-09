import { Component } from "@angular/core";

@Component({
    selector:"lmc-footer",
    templateUrl: "../../../assets/templates/general/components/component.footer.html"
})

export class LMCFooter {
    private help: string = "Help";
    private copyright: string = " 2016 All rights reserved";

    constructor () {
    }
}