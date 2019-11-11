import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-seller-info',
  templateUrl: './seller-info.component.html',
  styleUrls: ['./seller-info.component.css']
})
export class SellerInfoComponent implements OnInit {

  seller:string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.seller = this.router.snapshot.paramMap.get('id');
  }

}
