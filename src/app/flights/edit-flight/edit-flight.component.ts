import { Flight } from './../../models/flight.model';
import { FlightFormComponent } from './../flight-form/flight-form.component';
import { FlightsService } from './../../core/services/flights.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent {

  @ViewChild('flightForm') flightForm!: FlightFormComponent;
  flight!: Flight;

  constructor(
    private router: Router,
    private toast: MatSnackBar,
    private route: ActivatedRoute,
    private flightsService: FlightsService,
  ) { }

    ngAfterViewInit() {
      this.loadFlight();
    }

  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
      .pipe(
        tap(flight => this.flightForm.setFlight(flight))
      )
      .subscribe(flight => this.flight = flight)
  }

  private onEditSuccess() {
    this.toast.open('The date of flight has been modified', '', { panelClass: 'toast-success'})
    this.router.navigate(['/dashboard'])
  }

  private onRemoveSuccess() {
    this.toast.open('The flight has been removed', '', { panelClass: 'toast-success'})
    this.router.navigate(['/dashboard'])
  }

  private onFailure(error: { message: string; }) {
    this.toast.open(error.message, '', { panelClass: 'toast-failure'})
  }

  editFlight() {
    this.flightsService.editFlight(this.flight.key, this.flightForm.form.value)
      .then(() => this.onEditSuccess())
      .catch(this.onFailure.bind(this))
  }

  removeFlight() {
    this.flightsService.removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this))
      .catch(this.onFailure.bind(this))
  }

}
