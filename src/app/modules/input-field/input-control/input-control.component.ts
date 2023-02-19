
import { Component, OnInit, Input, forwardRef, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { randexp } from 'randexp';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as moment from 'moment';
import { MatBottomSheet } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true

    },
    {

      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputControlComponent),
      multi: true,

    }

  ], changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputControlComponent implements ControlValueAccessor , AfterViewInit, OnDestroy, OnInit {

  @Input('appearance') appearance = 'standard';
  @Input('floatLabel') floatLabel = 'auto';
  @Input('label') label !: string;
  @Input('placeholder') placeholder!: string;

  @Input('hint') hint !: string;
  @Input('formControlName') formControlName!: string;
  @Input('options') options: any;
  @Input('icon') icon !: string;
  @Input('fieldClass') fieldClass !: string;
  @Input('required') required !: boolean;
  @Input('validators') validators !: [string];
  @Input('minLength') minLength !: number;
  @Input('maxLength') maxLength !: number;
  @Input('minVal') minVal !: number;
  @Input('maxVal') maxVal !: number;
  @Input('validatorPattern') validatorPattern !: string;
  @Input('validatorPatternSample') validatorPatternSample !: string;
  @Input('valueType') valueType !: string;
  @Input('errorMessage') erroMsg !: string;
  @Input('dfd') dynamicData: any;
  @Input('mask') mask: any;

  public control ! : FormControl;
  
  @Input() set controlErrors(errors: any) {
    if (this.control) {
      this.control.setErrors(errors || null);
    }
  }
  virtualKeyboardButton: any;
  @ViewChild('inputStr') inputStr !: ElementRef;
  @ViewChild('inputNum') inputNum !: ElementRef;
  curentInput!: ElementRef;
  convertedPattern: any = false;
  maskPattern: any = false;

  @Input() parentEvents !: Observable<any>;
  private parentEventsSubscription: any;
  public typeAttr = null;

  subscriptions: Subscription[] = [];
  new_isMobile = false;

  private onChange: any = () => {
    // NOSONAR
  };
  onTouched: any = () => {
    // NOSONAR
  };


  // Here you can get the value of the input field:
  get value():any {
    return this.control.value;


  }
  @Output () onAddressChange = new EventEmitter();
  
  // Here you can set the value of the input field:
  set value (value:any){
    this.control.setValue(value);
    this.onChange(value);
    this.onTouched();
  }


  // Init Values here 
  constructor(private cdRef:ChangeDetectorRef){
    // this option will resize the inputs for mobile this.options accordingly to the device type
      // this.new_isMobile = this.deviceService.isMobile();


  }
  ngOnInit(): void {
    if (this.validatorPatternSample){
      if (this,this.validatorPattern){

        this.placeholder = this.validatorPatternSample;
      }

      if(this.mask && this.valueType == "text"){
        this.convertedPattern = this.new_getMask(this.mask);
        if (this.convertedPattern){
          this.maskPattern = this.convertedPattern;
        }
      }
    }
    this.control = new FormControl("",Validators.compose([
      this.required ? Validators.required : null,
      



    ]))
  }

  
 

  public new_getMask = (p) => {
    const inArray = p.toString().split(',');
    const convertedPattern = [];
    inArray.forEach(element => {
      if (element.indexOf('\\') > -1 || element.indexOf('[') > -1) {
        const dd = new RegExp(element);
        convertedPattern.push(dd);
      } else {
        convertedPattern.push(element);
      }
    });
    return convertedPattern;
  }



}
