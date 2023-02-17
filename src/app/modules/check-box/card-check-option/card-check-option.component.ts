import { Component,Input } from '@angular/core';
import { MultiCheckOption } from '../multi-check-options';
@Component({
  selector: 'app-card-check-option',
  templateUrl: './card-check-option.component.html',
  styleUrls: ['./card-check-option.component.css'],
  providers:[
    {

      provide: MultiCheckOption,
      useExisting: CardCheckOptionComponent
    }

  ]
})
export class CardCheckOptionComponent extends MultiCheckOption  {

@Input() value: any;

@Input() label: any;

}
