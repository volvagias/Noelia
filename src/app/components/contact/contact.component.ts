import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'; /* AbstractControl, ValidationErrors sirven para el validator del phone */
import emailjs from '@emailjs/browser'; /* Para usar el envío de email (previamente instale el paquete de emailJS */
import Swal from 'sweetalert2';


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
   async sendEmail() {
    if (this.form.invalid) {
      Swal.fire({
        icon: "error",
        title: "No se ha podido enviar su consulta.",
        text: "Datos incompletos o incorrectos.",
        confirmButtonText: 'ACEPTAR',
        /* Los estilos los puse en el style general para que funcionen */
      });
    } else {
      emailjs.init('94i5NU6N3xpeSwrO0'); // Inicializa emailjs con tu usuario ID
      let response = await emailjs.send("service_evsmi8f","template_h343t1r",{   // Espera la respuesta de emailjs.send
        name: this.form.value.name,
        email: this.form.value.email,
        phone: this.form.value.phone,
        message: this.form.value.message,
      });

      prompt('Su consulta ha sido enviada.');
      this.form.reset();
    }
  }
  /* async y await se utilizan para manejar el envío del correo electrónico de manera asíncrona y esperar la respuesta de emailjs.send antes de proceder con el siguiente código. */

}
