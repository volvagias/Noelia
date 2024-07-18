import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'; /* AbstractControl, ValidationErrors sirven para el validator del phone */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public form!: FormGroup;

  constructor(public formBuilder: FormBuilder, ) {}

  ngOnInit():void {
    
  this.form = this.formBuilder.group({
    name: ['' , Validators.required],
    email: ['' , [Validators.required, Validators.email]],
    phone: ['' , [Validators.required, this.numericValidator]],
    message: ['' , Validators.required]
  })
  
  }

  /* Función para hacer validator que acepte solo números (phone) */
  numericValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const isValid = /^[0-9]+$/.test(value);
    return isValid ? null : { numeric: true };
  }

  /* Función para enviar emails */ 
  sendEmail() {
    prompt("Consulta enviada!");
  }

}
