import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MituSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [MituSharedModule, RouterModule.forChild([HOME_ROUTE]), LeafletModule],
  declarations: [HomeComponent]
})
export class MituHomeModule {}
