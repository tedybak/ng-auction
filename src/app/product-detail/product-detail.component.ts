import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  route_id:number;

  product:Product;

  constructor(private router: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.route_id = parseInt(this.router.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(this.route_id);





   }

}
