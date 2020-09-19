import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FontType } from '../shared/font-type';

@Component({
  selector: 'app-font-select',
  templateUrl: './font-select.component.html',
  styleUrls: ['./font-select.component.scss']
})
export class FontSelectComponent implements OnInit {

  @Output() fontEmitter = new EventEmitter<string>();
  readonly fontType = FontType;

  constructor() { }

  ngOnInit(): void {
  }

  changeFont(font) {
    this.fontEmitter.next(font);
  }
}
