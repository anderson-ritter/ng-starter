import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';

import { environment as env } from '../../../environments/environment';

@Injectable()
export class TitleService {

  constructor(
    private translateService: TranslateService,
    private title: Title
  ) { }

  setTitle(title: string) {
    if (title) {
      this.translateService
        .get(title)
        .pipe(
          filter(translatedTitle => translatedTitle !== title)
        )
        .subscribe(translatedTitle =>
          this.title.setTitle(`${translatedTitle} / ${env.app.name}`)
        );

    } else {
      this.title.setTitle(env.app.name);
    }
  }
}
