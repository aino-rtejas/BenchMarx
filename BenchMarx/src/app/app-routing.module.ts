import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { BGraphComponent } from './bgraph/bgraph.component';

const routes: Routes = [
  {path:'',component:ChartComponent},
  {path:'graph/:id',component:BGraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
