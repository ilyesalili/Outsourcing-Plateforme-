import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role, User } from '../store/Login/login.model';
import { Select } from '@ngxs/store';
import { UserState } from '../store/SignUp/signup.state';

@Component({
  selector: 'app-profiltype',
  templateUrl: './profiltype.component.html',
  styleUrls: ['./profiltype.component.scss'],
})
export class ProfiltypeComponent {
  constructor(private route:Router){

  }
  selectionMade = false;
  role:string;

  onSelectionChange() {
    this.selectionMade =
      document.querySelector('input[name="account-type"]:checked') !== null;
  }

  onDivClick(input: String) {
    this.onSelectionChange();
    let checkbox = document.getElementById(`${input}`) as HTMLInputElement;
    this.role=checkbox.value
    checkbox.checked = !checkbox.checked;
    this.selectionMade=true
  }

  GoToSignUp(role:string){
    console.log(this.role)
    this.route.navigate(['/signup',role])
    localStorage.setItem('Role',role)
  }
}
