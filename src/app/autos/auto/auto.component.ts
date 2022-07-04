import { Component, OnInit } from '@angular/core';
import { Iautos } from '../interface/interface';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {

  autos:Iautos[]=[
    {
     marca: 'LEXUS',
     modelo:'LS',
     precio:50000,
    },
    { 
     marca: 'MAZDA ',
     modelo:'3MZ',
     precio:782000,
    },
    {
     marca: 'TOYOTA',
     modelo:'C‑HR',
     precio:80000,
    }
 
  ] ;

  nuevoAutos:Iautos={
    marca: '',
    modelo:'',
    precio:0,

  }
  agregar(){
   
    if(this.nuevoAutos.marca.trim().length===0)
    {
      return;
    }
    if(this.nuevoAutos.modelo.trim().length===0)
    {
      return;
    }
    if(this.nuevoAutos.precio===0)
    {
      return;
    }

    this.autos.push(this.nuevoAutos);

        
    this.nuevoAutos={
      marca: '',
      modelo:'',
      precio:0,
  
  };
  }
  constructor() { }



  ngOnInit(): void {
  }

}
