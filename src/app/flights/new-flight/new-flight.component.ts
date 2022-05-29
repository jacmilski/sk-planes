import { FlightsService } from './../../core/services/flights.service';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {

  @ViewChild('flightForm') flightForm!: FlightFormComponent;

  constructor(
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private flightService: FlightsService,
  ) { }

  createFlight() {
    console.log(this.flightForm.form)
    this.flightService.addFlight(this.flightForm.form.value)
      .then(() => this.onCreateSuccess())
      .catch((err) => this.onCreateFailure(err))
  }

  onCreateSuccess() {
    this.dialogRef.close();
    this.toast.open('Flight has been successfuly created', '', {panelClass: 'toast-success'})
  }

  onCreateFailure(error: { message: string; }) {
    console.log('Some error');
    this.toast.open(error.message, '', { panelClass: 'toast-failure' })
  }
}
