import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BibliotecaUtilitariosComponent } from './biblioteca-utilitarios/biblioteca-utilitarios.component';
import { ButtonComponent } from './biblioteca-utilitarios/button/button.component';
import { MenuComponent } from './biblioteca-utilitarios/menu/menu.component';
import { WidgetPerfilComponent } from './biblioteca-utilitarios/widget-perfil/widget-perfil.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaUtilitariosComponent,
    ButtonComponent,
    MenuComponent,
    WidgetPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
