import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean | any {
    //const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}
