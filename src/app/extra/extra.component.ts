import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.sass']
})
export class ExtraComponent implements OnInit {



  public someData:string;

  constructor() 
  {
    this.someData = "YOu entered the extra component!";
   }

  ngOnInit(): void {
  }

}
