import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car-popup',
  templateUrl: './car-popup.component.html',
  styleUrls: ['./car-popup.component.scss'],
})
export class CarPopupComponent  implements OnInit {

  constructor(private modalCtrl: ModalController) {}

  dismissPopup() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
    return
  }

}
