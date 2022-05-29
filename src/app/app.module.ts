import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlightsService } from './core/services/flights.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthService } from './core/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    CoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    MaterialModule,
    FontAwesomeModule,
    MatFormFieldModule
  ],
  providers: [
    AuthService,
    FlightsService,
    ErrorStateMatcher,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
