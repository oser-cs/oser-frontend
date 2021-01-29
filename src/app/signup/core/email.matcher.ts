import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

// From: https://stackoverflow.com/a/51606362
export class EmailErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (control && control.dirty && invalidParent);
    }
}