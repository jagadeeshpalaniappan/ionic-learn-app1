import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Menu1Tab1Page } from '../menu1-tab1/menu1-tab1';
import { Menu1Tab2Page } from '../menu1-tab2/menu1-tab2';

/**
 * Generated class for the Menu1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu1',
  templateUrl: 'menu1.html',
})
export class Menu1Page {

  tab1RootPage : any = Menu1Tab1Page;
  tab2RootPage : any = Menu1Tab2Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu1Page');
  }

}
