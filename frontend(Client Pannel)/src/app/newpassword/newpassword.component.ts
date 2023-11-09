import { Component } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.scss']
})
export class NewpasswordComponent {
  constructor(private route:Router,private formbuild:FormBuilder){
    this.form=this.formbuild.group({
      password:new FormControl([], Validators.required),
    })

  }

  form:any

  show: boolean = false;

  send_data(){
    console.log(this.form.value)
  }

  toggleShow() {
    this.show = !this.show;
  }
  GoToLogin(){
    this.route.navigate(['/login'])
  }
}
