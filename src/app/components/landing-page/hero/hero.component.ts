import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  clicked:boolean = false;
  cssClass: string = 'unclicked-background'

  constructor() { }

  ngOnInit(): void {
  }

  onclick(){
    if(this.clicked){
      
    }
  }

}
