import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  category:boolean = false;
  brands:boolean = false;
  features:boolean =false;
  priceRange:boolean =false;
  condition:boolean = false;
  productRating: string = 'fourStars';


  constructor() { }

  ngOnInit(): void {
  }

  // this function toggle the sidenav drop down
  drop(dropdown:string){
    if(dropdown=='category'){
      this.category = !this.category
    }
    else if(dropdown =='brands'){
      this.brands = !this.brands
    }
    else if(dropdown=='features'){
      this.features = !this.features
    }
    else if(dropdown=='price-range'){
      this.priceRange = !this.priceRange
    }
    else if(dropdown=='condition'){
      this.condition = !this.condition
    }
  }

}
