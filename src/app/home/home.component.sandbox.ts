import { sandboxOf } from 'angular-playground';
import { HomeComponent } from './home.component';

export default sandboxOf(HomeComponent)
  .add('Home Component', {
    template: `<app-home></app-home>`
  });
