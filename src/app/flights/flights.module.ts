import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPipe } from './color.pipe';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { FlightsRoutingModule } from './flights-routing.module';



@NgModule({
  declarations: [
    FlightsComponent,
    FlightCardComponent,
    NewFlightComponent,
    FlightFormComponent,
    ColorPipe,
    DetailsComponent,
    EditFlightComponent
  ],
  entryComponents: [NewFlightComponent, DetailsComponent], // komponenty dynamiczne, tworzone w locie
  exports: [FlightsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
