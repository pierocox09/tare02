import { Component, Input, OnInit } from '@angular/core';
import { Iautos } from '../interface/interface';

@Component({
  selector: 'app-listaautos',
  templateUrl: './listaautos.component.html',
  styleUrls: ['./listaautos.component.css']
})
export class ListaautosComponent implements OnInit {

  @Input()
 autos:Iautos[]=[];




  constructor() { }

  ngOnInit(): void {
  }

}
