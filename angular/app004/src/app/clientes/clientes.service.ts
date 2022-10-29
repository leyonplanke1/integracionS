import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('http://apis.integracion.com/api/v1/clientes');
  }
}
