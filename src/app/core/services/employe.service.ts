import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../model/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  url='http://localhost:3000/employes/';

  constructor( private http:HttpClient) { }
  getEmployes(){
    return this.http.get<Employe[]>(this.url);

  }
  deleteEmploye(id:number){
    return this.http.delete(this.url+id);
  }

  addEmploye(employe:Employe){
    return this.http.post(this.url,employe);
  }
  searchEmploye(id:number){
    return this.http.get<Employe>(this.url+id);
  }
  putEmploye(employe:Employe){
    return this.http.put(this.url+employe.id,employe);
  }
}
