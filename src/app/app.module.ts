import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Menu1Page } from '../pages/menu1/menu1';
import { Menu2Page } from '../pages/menu2/menu2';


const MyAppRoutes = {
  links: [
    {component: HomePage, name: 'HomePage', segment: 'home'},
    {component: Menu1Page, name: 'Menu1Page', segment: 'menu1'},
    {component: Menu2Page, name: 'Menu2Page', segment: 'menu2'}
  ]
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Menu1Page,
    Menu2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, MyAppRoutes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Menu1Page,
    Menu2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
