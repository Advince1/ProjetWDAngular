import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Signup } from '../model/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private url:string = 'http://localhost:3000/signup/';

  constructor(private http: HttpClient) {}
}
