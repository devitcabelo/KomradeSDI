import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoShowComponent } from './produto/show/produto-show.component';
import { ProdutoFormComponent } from './produto/form/produto-form.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioShowComponent } from './usuario/show/usuario-show.component';
import { UsuarioFormComponent } from './usuario/form/usuario-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './usuario/login/login.component';

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: "/produtos",
    pathMatch: 'full'
  },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'produto/:id', component: ProdutoShowComponent },
  { path: 'produtos/new', component: ProdutoFormComponent },
  { path: 'produtos/edit/:id', component: ProdutoFormComponent },

  { path: 'usuarios', component: UsuarioComponent },
  { path: 'usuario/:id', component: UsuarioShowComponent },
  { path: 'usuarios/new', component: UsuarioFormComponent },
  { path: 'usuarios/edit/:id', component: UsuarioFormComponent },

  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoShowComponent,
    ProdutoFormComponent,
    UsuarioComponent,
    UsuarioShowComponent,
    UsuarioFormComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
