import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { EntryComponent } from './components/entry/entry.component';
import { UserStoreModule } from './user-store'


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    UserStoreModule
  ],
  entryComponents: [EntryComponent]
})
export class UserModuleModule { }
