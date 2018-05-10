import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Sevices
import { ListaDeseosService } from './services/lista-deseos.service';

//Pipes
import { PlaceHolderPipe } from './pipes/placeholder.pipe';

//Componentes
import { PendientesComponent } from '../pages/pendientes/pendientes';
import { TerminadosComponent } from '../pages/terminados/terminados';
import { AgregarListaComponent } from '../pages/agregar-lista/agregar';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PlaceHolderPipe,
    PendientesComponent,
    TerminadosComponent,
    AgregarListaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    AgregarListaComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaDeseosService
  ]
})
export class AppModule {}
