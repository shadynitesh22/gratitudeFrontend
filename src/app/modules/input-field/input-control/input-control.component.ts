
import { Component, OnInit, Input, forwardRef, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators, FormControl, NG_VALIDATORS, FormGroup } from '@angular/forms';
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
  @Input('fromgroup') fromgroup !: any;

  public control ! : string;
  public controlValue !: FormControl;

  @Input('id') set setFormControl(control: any) {
    if (control) {
      console.log(control)
      this.control = control;
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
  // get value():any {
  //   // return this.control.value;


  // }
  @Output () onAddressChange = new EventEmitter();
  
  // Here you can set the value of the input field:
  set value (value:any){
    // this.control.setValue(value);
    this.onChange(value);
    this.onTouched();
  }


  // Init Values here 
  constructor(private cdRef:ChangeDetectorRef){
  


  }
  ngOnInit(): void {
    if (this.validatorPatternSample){
      if (this,this.validatorPattern){

        this.placeholder = this.validatorPatternSample;
      }

    
    }
    this.controlValue = new FormControl("",Validators.compose([
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
      this.controlValue.valueChanges.subscribe(value =>{

        if (this.valueType === 'number' && typeof value === 'string'){
          value = parseInt(value, 10);
        }
        if (this.valueType === 'text' && typeof value === 'string'){
          value = value.trim();
        }

        if (typeof value === 'string'){

          value = value.trim();
        }
        if (this.controlValue.invalid){
          this.controlValue.markAllAsTouched();
        }
        this.onChange(value);
        this.onTouched();

      })


    );
    
    this.fromgroup.addControl(this.control, this.controlValue);
   
    console.log('this.fromgroup',this.fromgroup)



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
    if (this.curentInput && this.curentInput.nativeElement.value ! == this.controlValue.value ){
      this.controlValue.setValue(this.curentInput.nativeElement.value);
    }

  }

  ngAfterViewInit(): void {
    this.curentInput = this.inputNum || this.inputStr;
    if (this.parentEvents)
     {

      this.parentEventsSubscription = this.parentEvents.subscribe(res=>{

        if (res == 'makeControlsTouched')
        {
          this.controlValue.markAllAsTouched();
          this.controlValue.setErrors(this.controlValue.errors);

          if (!this.controlValue.errors){

            this.controlValue.setValue(this.controlValue.value);

          }
          

        }
      });

    }
  }




  hasError = (controlName:any,errorName:String) =>{
    return controlName['errors'] && controlName['errors'].hasOwnProperty(errorName) && controlName['errors']['errorName'];
  }
// Fix this in bugfix branch
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
  return this.controlValue.valid ? null:{[this.formControlName]:{valid:false}};
}



ngOnDestroy(): void {
  if (this.parentEventsSubscription) {
      this.parentEventsSubscription.unsubscribe();
  }
}

}













