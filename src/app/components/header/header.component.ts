import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(public translate: TranslateService){
        this.translate.addLangs(['es','ca','en']);
        this.translate.setDefaultLang('es');
      
      
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/es|ca|en/) ? browserLang : 'es');
      
      
        }
}


