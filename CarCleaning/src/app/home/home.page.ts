import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CarSelectionComponent } from '../car-selection/car-selection.component';  // Import the modal component

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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
  ngOnInit() {
    return
  }

}
