import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { EntryComponent } from './components/entry/entry.component';


@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ],
  entryComponents: [EntryComponent]
})
export class UserModuleModule { }
