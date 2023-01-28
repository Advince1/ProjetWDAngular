import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/signup';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  error: boolean = false;
  signup: Signup = { pseudo: '', password: '' };

  constructor(private signupService: SignupService, private router: Router) {}

  submit():void {
/*    this.signupService.signup(this.signup).subscribe({
      next: () => { this.router.navigate(['taches']) },
      error: () => { this.error = true; }
    });*/
}
}
