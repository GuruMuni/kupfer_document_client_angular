import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { MidgardTranslateService } from '@midgard/modules/translation/translation-loader/translate.service';
import { HttpService } from '@midgard/modules/http/http.service';
import { TranslationLoader } from '@midgard/modules/translation/translation-loader/translation-loader.component';


export function createTranslateLoader(http: HttpService) {
  return new TranslationLoader(http, './assets/i18n');
}

@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpService]
      },
      isolate: true
    })  ],
  providers: [
    MidgardTranslateService,
    TranslateService,
    TranslateStore
  ],
  exports: [
    TranslateModule
  ]
})
export class DocumentsTranslationModule {
  constructor( private translate: TranslateService) {
    this.translate.use('en');
  }
}
