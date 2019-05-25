import { sandboxOf } from 'angular-playground';
import { RegistrationComponent } from './registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

const sandboxConfig = {
    imports: [
        FormsModule,
        BrowserModule,
        NgbModule.forRoot()
    ]
   // bootstrap: [RegistrationComponent]
};
export default sandboxOf(RegistrationComponent, sandboxConfig)
  .add('Registration Component', {
    template: `<app-registration></app-registration>`
  });
