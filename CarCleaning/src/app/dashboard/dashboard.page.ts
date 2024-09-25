import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarSelectionComponent } from '../car-selection/car-selection.component';  // Import the modal component
import { CarPopupComponent } from '../car-popup/car-popup.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  selectedCarType: string = 'Hatchback';
  constructor(private modalCtrl: ModalController) {}
  // Function to open the modal
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CarSelectionComponent,
      cssClass: 'car-selection-modal'  // Optional custom class for the modal
    });

    // Handle the data returned from the modal
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        this.selectedCarType = data.data.selectedCarType || 'None';
      }
    });

    return await modal.present();
  }
  async openPopup() {
    const modal = await this.modalCtrl.create({
      component: CarPopupComponent,
      cssClass: 'custom-modal-class'
    });
    return await modal.present();
  }
  ngOnInit() {
    return
  }
 
}
