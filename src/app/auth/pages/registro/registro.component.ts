import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private usuariosService: UsuariosService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        Nombre: ['', Validators.required],
        Apellido: ['', Validators.required],
        Linkedin: ['', [Validators.required, Validators.pattern('https?://.+')]],
      }
    )
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.usuariosService.registrarUsuario(this.registerForm.value).subscribe(
        (response: any) => {


          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Usuario registrado exitosamente"
          });
          console.log('Usuario registrado exitosamente:', response);
          this.registerForm.reset();
        },
        (error: any) => {
          console.error('Error registrando el usuario:', error);
        }
      );
    } else {
      console.log('Formulario no válido');
    }
  }

}


