
import { MultiCheckOption } from '../multi-check-options';
import { Component, OnInit, Input, forwardRef, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { randexp } from 'randexp';
import { DeviceDetectorService } from 'ngx-device-detector';

import * as moment from 'moment';


import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-simple-check-option',
  templateUrl: './simple-check-option.component.html',
  styleUrls: ['./simple-check-option.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleCheckOptionComponent),
      multi: true
    
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SimpleCheckOptionComponent),
      multi: true,
    }

  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleCheckOptionComponent extends MultiCheckOption {
  @Input('appearance') appearance = 'standard';
  @Input('floatLabel') floatLabel = 'auto';
  @Input('label') label !: string;
  @Input('placeholder') placeholder!: string;
  @Input() value: any;
  @Input('hint') hint !: string;
  @Input('formControlName') formControlName!: string;


  
}
