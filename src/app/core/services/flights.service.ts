import { Flight } from './../../models/flight.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private API_URL = '/flights';

  constructor(private db: AngularFireDatabase) { }


  getFlights() : Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
    .pipe(map(response => {
      //console.log('response', response)
      return response.map(flight => {
      //console.log('flight', flight)
      return this.assignKey(flight);
    })}))
  }

  getFlight(key: string) : Observable<Flight> {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)))
  }

  addFlight(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  editFlight(key: string, flight: Flight) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight)
  }

  removeFlight(key: string) {
    return this.db.object(`${this.API_URL}/${key}`).remove();
  }

  private assignKey(flight: SnapshotAction<any>): Flight {
    return { ...flight.payload.val(), key: flight.key }
  }

}
