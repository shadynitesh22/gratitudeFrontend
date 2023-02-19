
import { Component, OnInit, Input, forwardRef, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';


import * as moment from 'moment';



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
  public typeAttr:any;

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
  convertedPattern:any  = false;
  maskPattern: any = false;

  @Input() parentEvents !: Observable<any>;
  private parentEventsSubscription: any;
  

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

    
    }
    this.control = new FormControl("",Validators.compose([
      this.required ? Validators.required : null,
      this.required ? this.noWhitespaceValidator : null,
      this.validators && this.validators.includes("minLength") && this.minLength ? Validators.minLength(this.minLength) : null,
      this.validators && this.validators.includes("maxLength") && this.maxLength ? Validators.maxLength(this.maxLength) : null,
      this.validators && this.validators.includes("min") && this.minVal ? Validators.min(this.minVal) : null,
      this.validators && this.validators.includes("max") && this.maxVal ? Validators.max(this.maxVal) : null,
      this.validators && this.validators.includes("email")  ? Validators.email : null,
      this.validators && this.validators.includes("pattern") && this.validatorPattern ? Validators.pattern(this.validatorPattern) : null,
      



    ]));
    this.typeAttr = this.valueType === "number" ? "number":null;
    this.subscriptions.push(
      this.control.valueChanges.subscribe(value =>{

        if(this.dynamicData && this.dynamicData.config && this.dynamicData.upercase && this.dynamicData.valueType == 'google_address'){

          if (typeof value.formatted ==="string"){
            value.formatted_address = value.formatted_address.toUpperCase();
            value.address.addr1 = value.address.addr1.toUpperCase();
            value.address.city = value.address.city.toUpperCase();
            value.address.state = value.address.state.toUpperCase();
            value.address.zip = value.address.zip.toUpperCase();
          }

        }

        if (typeof value === 'string'){

          value = value.trim();
        }
        if (this.control.invalid){
          this.control.markAllAsTouched();
        }
        this.onChange(value);
        this.onTouched();

      })


    );
    this.cdRef.detectChanges();
    // if (!this.new_isMobile) {
    //   //   this.renderer.selectRootElement('.ctrl').focus();
    //   // }



  }
  ngDoCheck():void{
    if (this.mask && this.valueType == 'text'&& ! this.new_isMobile){
      if(! this.virtualKeyboardButton){
        this.virtualKeyboardButton == document.querySelector('[data-indopt="virtual-keyboard"]');

      }
      if (this.virtualKeyboardButton){

        if(this.virtualKeyboardButton.getAttrivute("aria-pressed") === 'ture'&& this.maskPattern){
          this.maskPattern = false;
        } 
        if(this.virtualKeyboardButton.getAttrivute("aria-pressed") === 'false'&& !this.maskPattern){
          this.maskPattern = this.convertedPattern;
        }
      }
      


    }
    if (this.curentInput && this.curentInput.nativeElement.value ! == this.control.value ){
      this.control.setValue(this.curentInput.nativeElement.value);
    }

  }

  ngAfterViewInit(): void {
    this.curentInput = this.inputNum || this.inputStr;
    if (this.parentEvents)
     {

      this.parentEventsSubscription = this.parentEvents.subscribe(res=>{

        if (res == 'makeControlsTouched')
        {
          this.control.markAllAsTouched();
          this.control.setErrors(this.control.errors);

          if (!this.control.errors){

            this.control.setValue(this.control.value);

          }
          

        }
      });

    }
  }




  hasError = (controlName:any,errorName:String) =>{
    return controlName['errors'] && controlName['errors'].hasOwnProperty(errorName) && controlName['errors']['errorName'];
  }

  noWhitespaceValidator(control: FormControl) {
    if (control.value instanceof moment) {
      const isValid = true;
      return isValid ? null : { 'whitespace': true };
    }
    const isWhitespace = ((control.value && control.value.toString()) || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
 registerOnChange(fn: any): void {
   this.onChange = fn;
 }
 writeValue(value:any): void {
  if (value){
   this.value = value;
  }

  }

registerOnTouched(fn: any): void {
  this.onTouched = fn;
}
validate(_:FormControl):any{
  return this.control.valid ? null:{[this.formControlName]:{valid:false}};
}

public new_updateCurrencyCtrl = () => {
  if (isNaN(this.control.value)) {
    this.control.setValue(null);
    this.control.markAsTouched();
  }
}


// public new_getMask = (p) => {
//   const inArray = p.toString().split(',');
//   const convertedPattern = [];
//   inArray.forEach(element => {
//     if (element.indexOf('\\') > -1 || element.indexOf('[') > -1) {
//       const dd = new RegExp(element);
//       convertedPattern.push(dd);
//     } else {
//       convertedPattern.push(element);
//     }
//   });
  
//   return convertedPattern;
// }
// async onFocusAddress() {
//   const googleAddressEnabled = await this.locationService.getGooglePlacesApiKey();
//   if (googleAddressEnabled) {
//     this.control.setErrors({ 'incorrect': true });
//   }
// }x

// registerAddressChange(address: any) {
//   const parsedAddress = this.locationService.parseGoogleLocation(address);
//   const output = {
//     formatted_address: parsedAddress.raw.location.formatted_address,
//     address: {
//       addr1: parsedAddress.name,
//       city: parsedAddress.city,
//       state: parsedAddress.state,
//       zip: parsedAddress.postalCode
//     }
//   };
//   this.control.setValue(output);
//   this.onAddressChange.next(output);


// }
// enterManaually(){

//   this.enterAddressManually =$event.checked;
// }


ngOnDestroy(): void {
  if (this.parentEventsSubscription) {
      this.parentEventsSubscription.unsubscribe();
  }
}

}













