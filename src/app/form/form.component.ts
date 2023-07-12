import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent {
    form!: FormGroup
    constructor(private fb: FormBuilder) {

    }

    ngOnInit() {

        this.form = this.fb.group({
            password: ['', [Validators.required, Validators.minLength(8), this.upperCase(), this.digit(), this.specialCaracter()]]
        })
        console.log('ok')
    }



    upperCase() {
        return (control: any) => {
            const password = control.value as string;

            if (!/[A-Z]/.test(password)) {
                return { uppercase: true }; // Validation échoue si pas de lettre majuscule
            }

            return false;
        };
    }

    digit() {
        return (control: any) => {
            const password = control.value as string;

            if (!/\d/.test(password)) {
                return { digit: true }; // Validation échoue si pas de chiffre
            }

            return false;
        };
    }
    specialCaracter() {
        return (control: any) => {
            const password = control.value as string;

            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                return { specialCharacter: true }; // Validation échoue si pas de caractère spécial
            }

            return false;
        };
    }

    onSubmit() { }
}
