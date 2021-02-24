import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';

  formularioIncorrecto = false;
  @Output() nuevaCita = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(): void {
    if (this.nombre === '' || this.fecha === '' || this.hora === '' || this.sintomas === ''){
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;

    const CITA = {
      nombre: this.nombre,
      fecha: this.fecha,
      hora: this.hora,
      sintomas: this.sintomas
    };

    this.nuevaCita.emit(CITA);

    this.resetCampos();
  }

  resetCampos(): void {
  this.nombre = '';
  this.fecha = '';
  this.hora = '';
  this.sintomas = '';
  }

}
