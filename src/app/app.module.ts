import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule,NgForm } from '@angular/forms';
import { MatToolbarModule,MatFormFieldModule, MatButtonModule,MatCardModule,MatInputModule,MatSelectModule,MatAutocompleteModule} from '@angular/material';
import  { BrowserAnimationsModule,NoopAnimationsModule  } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({

  imports:      [ BrowserModule, FormsModule, MatToolbarModule,
  MatFormFieldModule,MatButtonModule,MatCardModule,MatInputModule,MatSelectModule,MatAutocompleteModule, BrowserAnimationsModule,ReactiveFormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
