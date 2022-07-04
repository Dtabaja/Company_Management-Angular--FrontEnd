import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./../public.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  submit():void{
    this.authService.login(this.form.getRawValue()).subscribe(res=>{
      this.router.navigate(['/'])
    console.log(res)
    })
    }

}
