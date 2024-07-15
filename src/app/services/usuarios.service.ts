import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }



  obtenerUsuarios() {
    let params = new HttpParams().append("page", 1);
    params = params.append("nombre", "alexis romero");

    return this.http.get(`https://www.codigo-alfa.cl/aglo/Angular/listPersona`, {
      params
    }).pipe(
      map((resp: any) => resp.personas)
    );
  }

  registrarUsuario(usuario: { nombre: string, apellido: string, link: string }): Observable<any> {
    const url = 'https://www.codigo-alfa.cl/aglo/Angular/savePersona';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, usuario, { headers });
  }

  login(email: string): void {
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

}
