
import { Component, Input, input } from '@angular/core';
import { PromptResponse } from '../../../models/promtpResponse';

@Component({
  selector: 'app-ia-container',
  standalone: true,
  imports: [],
  templateUrl: './ia_container.component.html',
  styleUrl: './ia_container.component.css'
})
export class IaContainerComponent {
@Input() promptMessage: any;
}
