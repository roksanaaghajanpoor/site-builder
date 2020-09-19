import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProductListModel } from '../shared/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() productItem: ProductListModel;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
