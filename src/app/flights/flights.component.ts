import { DetailsComponent } from './details/details.component';
import { Observable } from 'rxjs';
import { FlightsService } from './../core/services/flights.service';
import { Component } from '@angular/core';
import { Flight } from '../models/flight.model';
import { MatDialog } from '@angular/material/dialog';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent {

  isOpen: boolean = false;

  constructor(
    private flightsService: FlightsService,
    private dialog: MatDialog,
  ) { }

  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  openNewFlightModal() {
    this.isOpen = !this.isOpen;
    this.dialog.open(NewFlightComponent).afterClosed().subscribe(a => {
      console.log(a)
      if (a === '') {
        this.isOpen = false;
      }
    });
  }

  showDetails(flight: Flight) {
    this.dialog.open(DetailsComponent, {data: flight});
  }

}
