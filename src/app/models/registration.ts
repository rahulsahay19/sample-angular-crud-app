import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class Registration {
    constructor(
      public firstName: string = "",
      public lastName: string = "",
      public dob: NgbDateStruct = null,
      public doj: NgbDateStruct = null,
      public email: string = "",
      public password: string = "",
      public company: string = "Select company"
    ) {}
  }

