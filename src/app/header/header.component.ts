import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { employeModel } from './employe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formValue !: FormGroup;

  employeModelobj : employeModel =new employeModel();
  employeData ! : any;
  showAdd !:boolean;
  showUpdate! :boolean;


  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  public ngOnInit(): void {



    this.formValue = this.formbuilder.group(
      {
        name : [''],
        email : [''],
        date : [''],
        country : [''],
        avatar : ['']




      })
      this.getAllEmploye();
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  }
  
 clickClient_Registration()
 {
   this.formValue.reset();
   this.showAdd =true;
   this.showUpdate=false;
 }
  postEmployeDetails()
{
  this.employeModelobj.name=this.formValue.value.name;
  this.employeModelobj.email=this.formValue.value.email;
  this.employeModelobj.date=this.formValue.value.date;
  this.employeModelobj.country=this.formValue.value.country;

  this.employeModelobj.avatar=this.formValue.value.avatar;

  this.api.postEmploye(this.employeModelobj)
  .subscribe(res=>{
    console.log(res);
    alert("Employe Add SuccessFully")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmploye();

  },
     err=>{
    alert("something went wrong");
  })
    
 


  
 
  

}
getAllEmploye()
{
  this.api.getEmploye(this.employeData)
  .subscribe(res=>
  {
this.employeData = res;
  })
}
deleteEmploye( card:any)
{
  this.api.deleteEmploye(card.id)
  .subscribe(res=>
    {
      alert("Employe Delete Successfully..!");
      this.getAllEmploye();
    })
}
onEdit(card:any)
{
  this.showAdd =false;
  this.showUpdate=true;
  this.employeModelobj.id= card.id;
  this.formValue.controls["name"].setValue(card.name);
  this.formValue.controls["email"].setValue(card.email);
  this.formValue.controls["date"].setValue(card.date);
  this.formValue.controls["country"].setValue(card.country);
  this.formValue.controls["avatar"].setValue(card.avatar);
}
updateEmployeDetails()
{
  this.employeModelobj.name=this.formValue.value.name;
  this.employeModelobj.email=this.formValue.value.email;
  this.employeModelobj.date=this.formValue.value.date;
  this.employeModelobj.country=this.formValue.value.country;
  this.employeModelobj.avatar=this.formValue.value.avatar;

  this.api.updateEmploye(this.employeModelobj,this.employeModelobj.id)
  .subscribe(res=>
    {
      alert("update Successfully Done!")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmploye();
      

    })
}
}






