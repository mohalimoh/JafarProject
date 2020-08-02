import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: '[UniqueUsernameValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UniqueUsernameValidatorDirective,
    multi: true
  }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    //Check if username is exist in DB
    return;
  }
  constructor() { }

}
