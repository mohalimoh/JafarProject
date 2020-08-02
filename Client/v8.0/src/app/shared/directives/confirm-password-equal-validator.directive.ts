import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordEqualValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmPasswordEqualValidatorDirective,
    multi:true
  }]

})
export class ConfirmPasswordEqualValidatorDirective implements Validator {
@Input() appConfirmPasswordEqualValidator :string;
  validate(control: AbstractControl): ValidationErrors {
    const controlToCompare = control.parent.get(this.appConfirmPasswordEqualValidator);
    if (controlToCompare && controlToCompare.value !== control.value) 
    {
      return{'notEqual':true};
    }
    return null
  }
  constructor() { }

}
