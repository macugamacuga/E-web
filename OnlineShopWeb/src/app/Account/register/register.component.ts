import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/Operators';
import { ProductService } from "../../services/product.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor
  (
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: ProductService,
  ) 
  {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
   }

  ngOnInit(): void {
  }
   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }

   onSubmit() {
       this.submitted = true;

       // reset alerts on submit
      

       // stop here if form is invalid
       if (this.form.invalid) {
           return;
       }

       this.loading = true;
       console.log("form "+JSON.stringify(this.form.value));

       this.accountService.register(this.form.value)
           .pipe(first())
           .subscribe({
               next: () => {
                   
                   this.router.navigate(['../login'], { relativeTo: this.route });
               },
               error:error => {
                alert(JSON.stringify(error.error.text))
                   this.loading = false;
               }
           });
   }

}
