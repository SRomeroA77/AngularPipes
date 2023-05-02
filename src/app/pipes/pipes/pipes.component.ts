import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  nombre = "Jose Carlos";
  num = 2;
  vector = [1,2,3,4];

  constructor(){}

  ngOnInit(){}


}
