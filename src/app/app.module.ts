import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

// Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Material
import {MateriaModule} from './material';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { UsuarioComponent } from './crud/usuario/usuario.component';
import { PedidoComponent } from './crud/pedido/pedido.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'crud', component: CrudComponent },
  {path: 'registrar', component: RegistrarComponent },
  {path: 'usuario', component: UsuarioComponent },
  ];

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      CrudComponent,
      RegistrarComponent,
      UsuarioComponent,
      PedidoComponent,
      ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MateriaModule,
      FormsModule,
      HttpClientModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      RouterModule.forRoot(routes),
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

