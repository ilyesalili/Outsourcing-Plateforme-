import { Component } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent {
form:any 
constructor(private formbuild:FormBuilder,private route:Router){
  this.form=this.formbuild.group({
    email:new FormControl([],[Validators.required,Validators.email])
})
}

send_data(){
  console.log(this.form.value)
}
GoToConfirmCode(){
this.route.navigate(['/login/resetpassword/comfirmcode'])
}

}
