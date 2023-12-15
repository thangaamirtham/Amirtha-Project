import { Injectable } from '@angular/core';
import { contact } from './component/contactmodel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


addcontact(data:contact){
  return this.http.post<contact>("http://localhost:3000/posts",data)
}
getcontact(){
  return this.http.get<contact[]>("http://localhost:3000/posts")
}

deletecontact(id:any)
{
  return this.http.delete<contact>("http://localhost:3000/posts/"+ id)
}

//fetch data on edit

fetchdata(id:number)
{
return this.http.get<contact>("http://localhost:3000/posts/"+id)
}

//update data

updatecontact(data:contact,id:number)
{
return this.http.put<contact>("http://localhost:3000/posts/"+id,data)
}

}
