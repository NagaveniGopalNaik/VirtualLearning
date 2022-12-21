import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

const material =[
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatStepperModule,
  MatTreeModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  
  imports: [
material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
