import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from "@angular/http";
//import {ROUTER_PROVIDERS} from "@angular/router";
import {LMC_App} from "./app";
//import {enableProdMode} from '@angular/core';

// Set the language for the application so that it fetches all the relevant language strings for the application
// The following piece of code will be removed once the login page sets the language in the session storage for the application
if (! window.sessionStorage) {
    console.log("Your browser do not support session storage, hence language can't be set");
} else {
    let lang = window.location.pathname.split("/")[1];
    console.log(lang);
    window.sessionStorage.setItem("lmc-app-language",lang);
}

//enableProdMode();
bootstrap(LMC_App,[HTTP_PROVIDERS]);
