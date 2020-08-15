import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }
  api_url = 'http://localhost:8000';


    signupRequest(formdata){
      return this.httpClient.post<any>(this.api_url + '/signup',{formdata})
    }









}
