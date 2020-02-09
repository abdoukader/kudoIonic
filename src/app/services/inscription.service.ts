
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class InscriptionService  {
    tableau=[];
    selectedTrans: any;
  
    constructor(private http: HttpClient,private transa :InscriptionService) { }
    
    private endpoint = 'http://127.0.0.1:8080/user/add';
    
  
    inscription(formData) {
  
  
      const formData1: FormData = new FormData();

      formData1.append('nom',formData.nom);
      formData1.append('email',formData.email);
      formData1.append('tel',formData.tel)
      formData1.append('sousStructure',formData.sousStructure);
      formData1.append('username',formData.username);
      formData1.append('password',formData.password);
      console.log(formData1);
      
      return this.http.post(this.endpoint, formData1);
    }
  }
  