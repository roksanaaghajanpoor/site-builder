import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ColorType } from '../shared/color-type';

@Component({
  selector: 'app-color-section-select',
  templateUrl: './color-section-select.component.html',
  styleUrls: ['./color-section-select.component.scss']
})
export class ColorSectionSelectComponent implements OnInit {

  @Output() sectionEmitter = new EventEmitter<number>();
  readonly colorType = ColorType;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(color) {
    this.sectionEmitter.next(color);
  }
}
