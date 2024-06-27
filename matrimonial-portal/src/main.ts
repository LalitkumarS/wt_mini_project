import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export* from './app/profile-detail/profile-detail.component';
export* from './app/profile-list/profile-list.component';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
