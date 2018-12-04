import { Component, OnInit } from "@angular/core";
import { Registration } from '../models/registration';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
    registrations: Registration[] = [];
    regModel: Registration;
    showNew: Boolean = false;
    submitType: string = "Save";
    selectedRow: number;
    companies: string[] = ["Company A", "Company B", "Company C", "Company D", "Company E"];
  constructor() {
      this.registrations.push(
      new Registration(
        "Dave",
        "Black",
        { year: 1986, month: 1, day: 19 },
        { year: 2008, month: 4, day: 1},
        "daveblack@companya.com",
        "pass123",
        "Company A"
      )
    );

    this.registrations.push(
      new Registration(
        "Thomas",
        "Tele",
        { year: 1980, month: 4, day: 19 },
        { year: 2004, month: 5, day: 1},
        "thomastele@companyb.com",
        "pass234",
        "Company B"
      )
    );

    this.registrations.push(
      new Registration(
        "John",
        "Richards",
        { year: 1988, month: 7, day: 11 },
        { year: 2010, month: 1, day: 3},
        "johnrichards@companyc.com",
        "pass345",
        "Company C"
      )
    );
  }

  
onNew() {
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }

onSave() {
  if (this.submitType === 'Save') {
    this.registrations.push(this.regModel);
  } else {
  
  // Update existing 
  
  this.registrations[this.selectedRow].firstName = this.regModel.firstName;  
  this.registrations[this.selectedRow].lastName = this.regModel.lastName;  
  this.registrations[this.selectedRow].dob = this.regModel.dob;
  this.registrations[this.selectedRow].doj = this.regModel.doj;  
  this.registrations[this.selectedRow].email = this.regModel.email;  
  this.registrations[this.selectedRow].password = this.regModel.password;  
  this.registrations[this.selectedRow].company = this.regModel.company;
}
  
  this.showNew = false;
  
}

onEdit(index: number) {
  this.selectedRow = index;
  this.regModel = new Registration();
  // Retrieve selected 
  this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
  this.submitType = 'Update';
  this.showNew = true;
  
}

onDelete(index: number) {
  this.registrations.splice(index, 1);
}

onCancel() {
  this.showNew = false;
}

onChangeCompany(company: string) {
  this.regModel.company = company;
}
  ngOnInit() {}
}


