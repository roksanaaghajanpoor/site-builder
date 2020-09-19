import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorSectionSelectComponent } from './color-section-select/color-section-select.component';
import { FontSelectComponent } from './font-select/font-select.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ColorSectionSelectComponent,
    FontSelectComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ColorPickerModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class GeneralModule { }
