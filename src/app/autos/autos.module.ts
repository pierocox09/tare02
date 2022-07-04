import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto/auto.component';
import { ListaautosComponent } from './listaautos/listaautos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AutoComponent,
    ListaautosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AutoComponent,
    ListaautosComponent
  ]
})
export class AutosModule { }
