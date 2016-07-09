import {ES} from '../language_resources/global.language.strings.es';
import {EN} from '../language_resources/global.language.strings.en';
import {DE} from '../language_resources/global.language.strings.de';
import {FR} from '../language_resources/global.language.strings.fr';
import {IT} from '../language_resources/global.language.strings.it';
import {JA} from '../language_resources/global.language.strings.ja';
import {KO} from '../language_resources/global.language.strings.ko';
import {PT} from '../language_resources/global.language.strings.pt';
import {ZH} from '../language_resources/global.language.strings.zh';
import {ZH_TW} from '../language_resources/global.language.strings.zh_tw';

export class GlobalLocalizationStringService {
    private supportedLanguageResources: any;
    private supportedLanguageXMLResourceStrings: any;
    private DOMParser:DOMParser;
    private supportedLanguages: string[];
    private appLanguage:string;
    
    constructor() {
        this.supportedLanguageXMLResourceStrings = {
            'EN':EN,
            'ES':ES,
            'DE':DE,
            'FR':FR,
            'IT':IT,
            'JA':JA,
            'KO':KO,
            'PT':PT,
            'ZH':ZH,
            'ZH_TW':ZH_TW
        };
        this.supportedLanguages = ['ES','EN','DE','FR','IT','JA','KO','PT','ZH','ZH_TW'];
        this.supportedLanguageResources = {};
        this.DOMParser = new DOMParser();
        
        this.supportedLanguages.forEach((lang:string)=>{
            this.parseAndCreateResourceJSON(lang);
        });
        
        this.appLanguage = window.sessionStorage.getItem("lmc-app-language") || "EN";
        
    }
    
    private parseAndCreateResourceJSON(language:string):void {

        let list = this.DOMParser.parseFromString(this.supportedLanguageXMLResourceStrings[language],"application/xml").documentElement.childNodes;
        let length = list.length;
        let resource = {};
        for ( let i = 0; i < length ; i += 2 ) {
            let value = '';
            let key = '';
            
            if (list[i] && list[i+1]) {
                try {
                    if ( list[i].nodeName && (list[i].nodeName === '#text') && list[i].nextSibling ) {
                        value = list[i].nextSibling.textContent;
                    }
                    
                    if ( list[i + 1].nodeName && (list[i + 1].nodeName === "string") ) {
                        
                        key = list[i + 1].attributes[0].value;
                        if (key) {
                            resource[key] = value;
                        }
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }

        }
        
        this.supportedLanguageResources[language] = resource;
    }
    
    getLanguageResourceString(key:string):string {
        
        if (!this.supportedLanguageResources[this.appLanguage.toUpperCase()]) {
            this.appLanguage = "EN";
        }
        return this.supportedLanguageResources[this.appLanguage.toUpperCase()][key];
    }
}