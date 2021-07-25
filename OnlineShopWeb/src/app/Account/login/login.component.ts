import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/Operators';
import { ProductService } from "../../services/product.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor
  (public accountServices:ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) 
  { 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    
    

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.accountServices.login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe({
            next: () => {
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                this.router.navigateByUrl(returnUrl);
                console.log("LOgin "+this.f.email.value);
            },
            error:() => {
                //this.alertService.error(error);
                console.log("Login "+this.f.email.value);
                alert("Email or password is incorrect")
                this.loading = false;
            }
        });
}

}
