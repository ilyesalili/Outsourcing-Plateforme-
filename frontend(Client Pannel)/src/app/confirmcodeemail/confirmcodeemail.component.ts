import { Component } from '@angular/core';
import { FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmcodeemail',
  templateUrl: './confirmcodeemail.component.html',
  styleUrls: ['./confirmcodeemail.component.scss']
})
export class ConfirmcodeemailComponent {
  form:any 
  constructor(private formbuild:FormBuilder,private route:Router){
    this.form=this.formbuild.group({
      code1:new FormControl([],[Validators.required]),
      code2:new FormControl([],[Validators.required]),
      code3:new FormControl([],[Validators.required]),
      code4:new FormControl([],[Validators.required]),
      code5:new FormControl([],[Validators.required]),
      code6:new FormControl([],[Validators.required]),
  })
  }
  
  send_data(){
    console.log(this.form.value)
  }

  codeFields: any[] = [];

  ngOnInit() {
    this.codeFields = [
      document.getElementById('code1'),
      document.getElementById('code2'),
      document.getElementById('code3'),
      document.getElementById('code4'),
      document.getElementById('code5'),
      document.getElementById('code6'),
    ];
  
    this.codeFields.forEach((field, index) => {
      field.addEventListener('input', (event: any) => {
        this.handleInput(event, index);
      });
    });
  }
  handleInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const pattern = /^[0-9]{1}$/;
  
    if (pattern.test(value)) {
      if (index < this.codeFields.length - 1) {
        this.codeFields[index + 1].focus();
      }
    }
  }

  GoToNewPassword(){
    this.route.navigate(['/login/resetpassword/comfirmcode/newpassword'])
  }
}
