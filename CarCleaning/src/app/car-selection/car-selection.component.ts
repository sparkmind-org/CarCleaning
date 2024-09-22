import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car-selection',
  templateUrl: './car-selection.component.html',
  styleUrls: ['./car-selection.component.scss'],
})
export class CarSelectionComponent {

  constructor(private modalCtrl: ModalController) {}

  // Function to select a car type and dismiss the modal
  selectCarType(carType: string) {
    // Dismiss the modal and send the selected car type back
    this.modalCtrl.dismiss({
      selectedCarType: carType
    });
  }

  // Function to close the modal without selecting a car
  closeModal() {
    this.modalCtrl.dismiss();
  }
}
