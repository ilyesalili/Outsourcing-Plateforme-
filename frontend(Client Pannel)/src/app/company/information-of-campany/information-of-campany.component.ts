import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CompanyService } from 'src/app/store/Comapny/Company.service';
import { CompanyRegistration, CompanyRegistrationSuccess } from 'src/app/store/Comapny/company.action';
import { Company, Media } from 'src/app/store/Comapny/company.model';
import { Role } from 'src/app/store/Login/login.model';
@Component({
  selector: 'app-information-of-campany',
  templateUrl: './information-of-campany.component.html',
  styleUrls: ['./information-of-campany.component.scss'],
})
export class InformationOfCampanyComponent implements OnInit {
  selectionMade: any;
  form: any;
  openMedia: boolean = false;
  parentmedias: Media[] = [];

  GoToNextInfo() {}
  constructor(private formbuild: FormBuilder,
    private store:Store,
    private srvc:CompanyService,
    private route:Router
    ) {
    this.form = this.formbuild.group({
      name: new FormControl([], Validators.required),
      field: new FormControl([], Validators.required),
      website: new FormControl([], Validators.required),
      // type:new FormControl([Role.Option2],Validators.required),
      size: new FormControl([], Validators.required),
    });
  }
  ngOnInit(): void {

  }
  SendData() {
    const data: Company = {
      name: this.form.value.name,
      field: this.form.value.field,
      website: this.form.value.website,
      type: Role.Option2,
      size: this.form.value.size,
      socialMediaLinks: this.parentmedias,
    };
    console.log(data)
    if(data){
      this.srvc.PostWorker(data)
    
    }
  }
  handlemediaChange(media: Media) {
    this.parentmedias.push(media);
    console.log(this.parentmedias);
  }
}
