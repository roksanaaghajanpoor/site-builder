import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/shared/product.service';
import { ColorType } from '../shared/color-type';
import { TemplateConfig } from '../shared/template-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  templateConfig: TemplateConfig[] = [
    {
      templateName: 'First Template',
      fullPage: '#ffffff',
      cardBg: '#ffd7ed',
      btnBg: '#ffffff',
      textColor: '#6f6f6f',
      btnTextColor: '#ab009d',
      navbarBgColor: '#900076',
      footerBgColor: '#900076',
      font: 'cuntrySide',
      productClass: 'col-md-2'
    },
    {
      templateName: 'Second Template',
      fullPage: '#eaeaea',
      cardBg: '#ffece4',
      btnBg: '#eeeeee',
      textColor: '#6f6f6f',
      btnTextColor: '#8a2900',
      navbarBgColor: '#a93701',
      footerBgColor: '#a93701',
      font: 'love',
      productClass: 'col-md-6'
    },
    {
      templateName: 'Third Template',
      fullPage: '#ffffff',
      cardBg: '#eeeeee',
      btnBg: '#ffffff',
      textColor: '#6f6f6f',
      btnTextColor: '#00ab36',
      navbarBgColor: '#008229',
      footerBgColor: '#008229',
      font: 'cinderella',
      productClass: 'col-md-4'
    }
  ];
  readonly colorType = ColorType;
  selectedSection: number;
  color = '#ffffff';

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.initialStyle();
  }

  colorSectionSelect(value) {
    this.selectedSection = value;
    this.setColors(this.selectedSection);
  }

  colorChange(color) {
    this.setColors(this.selectedSection);
  }

  setColors(value) {
    if (this.colorType.FULL_PAGE == value) {
      document.documentElement.style.setProperty('--body-bg-color', this.color);
    }
    if (this.colorType.BTN_BG == value) {
      document.documentElement.style.setProperty('--bottom-bg-color', this.color);
    }
    if (this.colorType.CARD_BG == value) {
      document.documentElement.style.setProperty('--card-bg-color', this.color);
    }
    if (this.colorType.TEXT_COLOR == value) {
      document.documentElement.style.setProperty('--text-color', this.color);
    }
    if (this.colorType.BTN_TEXT_COLOR == value) {
      document.documentElement.style.setProperty('--button-text-color', this.color);
    }
  }

  changeFont(font) {
    document.documentElement.style.setProperty('--body-font', font);
  }

  setTemplate(item: TemplateConfig) {
    document.documentElement.style.setProperty('--body-bg-color', item.fullPage);
    document.documentElement.style.setProperty('--bottom-bg-color', item.btnBg);
    document.documentElement.style.setProperty('--card-bg-color', item.cardBg);
    document.documentElement.style.setProperty('--text-color', item.textColor);
    document.documentElement.style.setProperty('--button-text-color', item.btnTextColor);
    document.documentElement.style.setProperty('--navbar-bg-color', item.navbarBgColor);
    document.documentElement.style.setProperty('--footer-bg-color', item.footerBgColor);
    document.documentElement.style.setProperty('--body-font', item.font);
    this.service.productClass.next(item.productClass);
  }

  initialStyle() {
    document.documentElement.style.setProperty('--navbar-bg-color', '#6d6d6d');
    document.documentElement.style.setProperty('--footer-bg-color', '#6d6d6d');
    document.documentElement.style.setProperty('--button-text-color', '#000');
    this.service.productClass.next('col-md-3');
  }
}
