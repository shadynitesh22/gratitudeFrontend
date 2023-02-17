import { Component,Input } from '@angular/core';
import { MultiCheckOption } from '../multi-check-options';

@Component({
  selector: 'app-simple-check-option',
  templateUrl: './simple-check-option.component.html',
  styleUrls: ['./simple-check-option.component.css'],
  providers:[
    {
      provide: MultiCheckOption, 
      useExisting: SimpleCheckOptionComponent
    
    }

  ]
})
export class SimpleCheckOptionComponent extends MultiCheckOption {
  @Input() value: any;
  @Input() label: any;

  
}
