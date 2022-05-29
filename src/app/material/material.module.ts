import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarConfig, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatError } from '@angular/material/form-field';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
    width: '700px',
    disableClose: true,
    hasBackdrop: true,
}

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 4000  ,
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
}


const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  providers: [
    MatError,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG },
  ]
})
export class MaterialModule { }
