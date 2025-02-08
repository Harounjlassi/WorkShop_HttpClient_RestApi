import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../core/services/employe.service';
import { Employe } from '../core/model/employe';

@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  
  constructor( private service:EmployeService) { }
  listEmployes!:Employe[];
  employe!:Employe ;
  val:string = "Ajouter";
  ngOnInit(): void {
    this.service.getEmployes().subscribe(
      (data:Employe[]) => {
        this.listEmployes = data
      }
    );
    this.employe = new Employe();

  }
  deletEmp(id:number){
    this.service.deleteEmploye(id).subscribe(
      () => {
        this.listEmployes = this.listEmployes.filter(employe => employe.id !== id);}
    );

  }
  
  save(){
    console.log(this.employe);
 this.service.addEmploye(this.employe).subscribe(
  ()=> 
    this.listEmployes=[this.employe,...this.listEmployes]
 );

  }
  Modif(id:number){
    this.val = "Modifier";
    this.employe.id = id;


  }

}
