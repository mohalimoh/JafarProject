import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS,AbstractControl,ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appCheckMelliCode]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:CheckMelliCodeDirective,
    multi:true
  }]
})
export class CheckMelliCodeDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return !this.checkMelliCode(control.value)?{'notValidMelliCode': true} : null;
    }
  constructor() { } 

  checkMelliCode(input):boolean {
    
    if (!/^\d{10}$/.test(input) )
    {
     return false;
    }
    if (!/[1-4]+/.test(input) )
    {
     return false;
    }
    if (!/[5-9]+/.test(input) )
    {
     return false;
    }
    
    var check = parseInt(input[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
    }
    sum %= 11;
    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
  }
}
