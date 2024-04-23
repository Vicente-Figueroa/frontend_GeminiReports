import { Component } from '@angular/core';
import { FinancesComponent } from './finances/finances.component';
import { AccountsComponent } from '../accounts/accounts.component';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [FinancesComponent, AccountsComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css'
})
export class OnboardingComponent {

}
