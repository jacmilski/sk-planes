import { Flight, Crew } from './../../models/flight.model';
import { MyErrorStateMatcher } from '../../../utils/error-state.matcher';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flightCodeValidator } from './flight.validator';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {

  matcher = new MyErrorStateMatcher();
  @Input() editMode = false

  form!: FormGroup;
  jobs = [
    { label: 'Stewaredess', value: 'stewaredess'},
    { label: 'Senior Cabin Crew', value: 'senior_cabin_crew'},
    { label: 'Pilot', value: 'Pilot'},
    { label: 'Co-Pilot', value: 'Co-Pilot'},
    { label: 'Mechanic', value: 'Mechanic'},
  ]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  setFlight(flight: Flight) {
    const {key, ...formData} = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember))
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || '',
    });
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }

  buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required]}], // ['', {sync}, {async}]
      destination: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      returnTime: ['', [Validators.required]],
      code: ['SK', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(7),
          flightCodeValidator
        ]
      ],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }
}
