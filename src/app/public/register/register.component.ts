import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css','./../public.component.css']
})
export class RegisterComponent implements OnInit {

  first_name = '';

  last_name = '';

  email = '';

  password = '';

  password_confirm = '';
  
  constructor(
    private http: HttpClient, 
    private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
  }

    submit():void{
      
        console.log({
         
        });
      this.authService.register({first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm})
          .subscribe(res=>{this.router.navigate(['/login'])})
    }
}
