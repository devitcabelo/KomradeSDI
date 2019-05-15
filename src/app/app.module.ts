import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoShowComponent } from './produto/produto-show/produto-show.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioShowComponent } from './usuario/usuario-show/usuario-show.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';

import { ReactiveFormsModule } from '@angular/forms';

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
  { path: 'usuarios/edit/:id', component: UsuarioFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutoShowComponent,
    ProdutoFormComponent,
    UsuarioComponent,
    UsuarioShowComponent,
    UsuarioFormComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
