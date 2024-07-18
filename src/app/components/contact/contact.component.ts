import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'; /* AbstractControl, ValidationErrors sirven para el validator del phone */

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  public form!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    
  this.form = this.formBuilder.group({
    name: ['' , Validators.required],
    email: ['' , [Validators.required, Validators.email]],
    phone: ['' , [Validators.required, this.numericValidator]],
    message: ['' , Validators.required]
  })
  
  }

  /* Getters para sintetizar los validators en el html */
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }

  get message() {
    return this.form.get('message');
  }

  /* Función para hacer validator que acepte solo números (phone) */
  numericValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // Verifica si el valor no es solo números
    const isValid = /^[0-9]*$/.test(value); // Permite campos vacíos, ajusta según sea necesario
    return isValid ? null : { numericValidator: true };
  }

  /* Función para enviar emails */ 
  sendEmail() {
    if (this.form.invalid) {
      prompt('Datos incorrectos en el formulario');
    } else {
      prompt('Datos enviados, prueba');
      this.form.reset();
    }
  }

}
