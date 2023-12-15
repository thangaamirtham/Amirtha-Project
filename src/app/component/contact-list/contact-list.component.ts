import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { contact } from '../contactmodel';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
data:undefined|contact[]

  constructor(private api:ApiService) { }

  ngOnInit(){
this.getcontact();
  }
getcontact()
{
  this.api.getcontact().subscribe(res=>{
    this.data=res;
   } )
  }

  delete(id: number)
{
    console.log('ID',id);
  this.api.deletecontact(id).subscribe(res=>{
   alert("contact deleted successfully!!");
    this.getcontact();
  })
}
logout(){
  localStorage.removeItem("logindata")
}
}
