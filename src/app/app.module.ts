import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PiepaginaComponent } from './componentes/piepagina/piepagina.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    PiepaginaComponent,
    EncabezadoComponent,
    CategoriaComponent,
    ProductosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
