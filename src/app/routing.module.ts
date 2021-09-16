import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';

const appRoutes: Routes = [
  {path : '', component: LoginComponent},
  {path : '/lista', component: ListaProductosComponent},
  {path : '/alta', component: AltaProductoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
  
})
export class RoutingModule { }
