import { NgModule } from '@angular/core';

import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShopingListComponent } from './shoping-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ShopingListComponent, ShopingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ShopingListComponent }]),
    SharedModule,
  ],
})
export class ShopingLsitModule {}
