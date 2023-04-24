import { NgModule } from '@angular/core';
import { AppLibraryComponent } from './app-library.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';



@NgModule({
  declarations: [
    AppLibraryComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
  ],
  exports: [
    AppLibraryComponent
  ]
})
export class AppLibraryModule { }
