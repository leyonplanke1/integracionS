import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  tipoDocumento: string="";
  tipos_documentos: any[] = [
    {valor: 'DNI', texto: 'DNI'},
    {valor: 'PASAPORTE', texto: 'PASAPORTE'},
    {valor: 'CE', texto: 'CARNET DE EXTRANGERÍA'}
  ];

  tipoCliente: string="";
  tipos_clientes: any[] = [
    {valor: 'PERSONA', texto: 'PERSONA'},
    {valor: 'EMPRESA', texto: 'EMPRESA'}
  ];

  constructor() { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
  }

}
