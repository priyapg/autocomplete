import { Component, OnInit } from '@angular/core';
import { FormControl,NgForm} from '@angular/forms'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators'

export interface User {
  name: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projects: string[] = ['project1', 'project2', 'project3'];
  builds: string[] = ['build1', 'build2', 'build3'];
  subBuilds: string[] = ['subbuild1', 'subbuild2', 'subbuild3'];
  

  options: string[] = ['Priya', 'Prateek', 'Arun', 'Neha','Shakshi','Vishal'];
  myFormControl = new FormControl();
  filteredValues;

  ngOnInit() {
    
    this.myFormControl.valueChanges.subscribe(newValue => {
      this.filteredValues = this.filterValues(newValue);
    })
  }
  filterValues(search: string) {
    return this.options.filter(value =>
      value.toLowerCase().indexOf(search.toLowerCase()) === 0);
  }
  onSubmit(userForm){
    console.log("form submitted");
  }

  onCancel(userForm:NgForm){
userForm.reset();
console.log("form reset");
  }


}
