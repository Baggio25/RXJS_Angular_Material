import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';



@NgModule({
  declarations: [
    ToolbarTitleComponent 
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    ToolbarTitleComponent
  ]
})
export class SharedModule { }
