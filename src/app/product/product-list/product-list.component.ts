import { Component, OnInit } from '@angular/core';
import { ProductListModel } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productsList: ProductListModel[] = [
    {
      _id: "5f619ffcd27ac42100001094",
      name: "instaB",
      description: "This is product B",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/119578016_800498220783662_6521952618506233760_n.jpg",
      id: 1
    },
    {
      _id: "5f61a04ed27ac42100001097",
      name: "instaA",
      description: "wow!! This is product A",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/119391448_1049134348897260_8174189386221464735_n.jpg",
      id: 2
    },
    {
      _id: "5f61a0a7d27ac42100001099",
      name: "instaC",
      description: "This is product C",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119464546_325596682110762_862078812814913567_n.jpg",
      id: 3
    },
    {
      _id: "5f61a0c2d27ac4210000109b",
      name: "instaD",
      description: "Hi this is test",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.159.1440.1440a/s640x640/119474535_328757391792350_5515762725280609868_n.jpg",
      id: 4
    },
    {
      _id: "5f61a1c2d27ac4210000129c",
      name: "instaI",
      description: "product I",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119344439_836775617066056_6002818240140856687_n.jpg",
      id: 9
    },
    {
      _id: "5f61a1a1d27ac42100001296",
      name: "instaH",
      description: "New product",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/119370186_3366666650119292_5435647698734515490_n.jpg",
      id: 8
    },
    {
      _id: "5f61a15dd27ac4210000128e",
      name: "instaF",
      description: "Test Test",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.177.1440.1440a/s640x640/119432386_1158996491167459_9109260134531877531_n.jpg",
      id: 6
    },
    {
      _id: "5f61a180d27ac42100001290",
      name: "instaG",
      description: "product G",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.1.752.752a/s640x640/119379263_1187056065008496_5140313018039463165_n.jpg",
      id: 7
    },
    {
      _id: "5f61a1e5d27ac4210000129e",
      name: "instaK",
      description: "product K",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.167.1440.1440a/s640x640/119227119_1831230417030243_5489374190536610365_n.jpg",
      id: 10
    },
    {
      _id: "5f61a13ed27ac4210000128c",
      name: "instaE",
      description: "Test for product E",
      imageLink: "https://instagram.fyvr4-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.169.1349.1349a/s640x640/119442122_232454681651665_7046027554810242529_n.jpg",
      id: 5
    }
  ];
  modalRef: BsModalRef;
  productClass = '';

  constructor(
    private service: ProductService,
    private modalService: BsModalService) {
    service.productClass.subscribe((res) => {
      this.productClass = res;
    });
  }

  ngOnInit(): void {
    this.service.getProductList().subscribe((res) => {
      this.productsList = res;
    });
  }

  productDetail(product: ProductListModel) {
    const config: ModalOptions = {
      initialState: {
        productItem: product
      }
    };

    this.modalRef = this.modalService.show(ProductDetailComponent, config);
  }
}
