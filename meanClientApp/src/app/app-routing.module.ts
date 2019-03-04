import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';

const appRoutes: Routes = [
  {path: '' , component : ListComponent} ,
  {path: 'createUpdate' , component : CreateUpdateComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
