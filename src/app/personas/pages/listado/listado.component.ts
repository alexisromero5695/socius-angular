import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: any[] = [];
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuariosService.obtenerUsuarios().subscribe(
      (resp) => {
        this.personas = resp; // Asigna la respuesta a una variable del componente
        console.log(resp); // Maneja la respuesta aquí
      },
      (err) => {
        console.log("Error en el listado component", err); // Maneja el error aquí
      }
    );
  }

}
