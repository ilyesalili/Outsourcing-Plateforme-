import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, map, of } from 'rxjs';
import { Address, WorkerStep1 } from '../store/Worker/worker.model';
import { OtpState } from '../store/SignUp/otp.state';
import { RegisterWorkerStep1 } from '../store/Worker/worker.actions';
import axios from 'axios';

interface Country {
  name: string;
  code: string;
  dial_code: string;
}

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  myform: any;
  selectionMade: boolean = false;
  selectedCountry: string = '';
  countries$: Observable<Country[]> = of([]);
  path:string
  // @Select(OtpState.getUser_id) user_id$:Observable<string>;
  constructor(
    private formbuild: FormBuilder,
    private http: HttpClient,
    private route: Router,
    private store: Store
  ) {
    this.myform = this.formbuild.group({
      firstname: new FormControl([], Validators.required),
      lastname: new FormControl([], Validators.required),
      country: new FormControl([], Validators.required),
      phonenumber: [[], [Validators.required,]],
      address: new FormControl([], Validators.required),
      region: new FormControl([], Validators.required),
      zip_code: new FormControl([], Validators.required),
      city: new FormControl([], Validators.required),
    });
  }
  id:string;
  ngOnInit(): void {
    this.countries$ = this.http.get<Country[]>('assets/CountryCodes.json');
    // this.user_id$.pipe(
    //   map((tokenId: string) => {
    //     this.id=tokenId
    //     console.log('Token ID:', tokenId);
    //   })
    // ).subscribe();
  }

  send_data() {
    console.log(this.myform.value);
    const address: Address = {
      wilaya: this.myform.value.region,
      commune: this.myform.value.city,
      code_postal: this.myform.value.zip_code,
      addressDomissile: this.myform.value.address,
      numRue: '123',
    };
    const info: WorkerStep1 = {
      firstName: this.myform.value.firstname,
      lastName: this.myform.value.lastname,
      phoneNumber: this.myform.value.phonenumber,
      address: address,
      photo: this.path,
    };
    if(
    this.store.dispatch(new RegisterWorkerStep1(info))){
      this.route.navigate(['/worker/national_cart'])
    }
    console.log('adr',info);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const img = document.getElementById('img_file') as HTMLImageElement;
      const lable_p = document.getElementById('name_image') as HTMLElement;
      this.selectionMade = true;
      img.onload = () => {
        this.uploadFile(file);
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(file);
      lable_p.innerHTML = 'Change Picture';
    }
  }
  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('File', file);
    const token= localStorage.getItem('Token')
    axios.post('http://localhost:7777/storage/upload/photo',
     formData,
     {
      headers: {
        Authorization: `${token}`,
      },
    },
    ).then(
      (response) => {
        this.path=response.data
        console.log(this.path)
      },
      (error) => {
        // Handle any error that occurred during the file upload
      }
    );
  }
  

  phoneNumberControl: any;
  onCountryChange(event: any) {
    const selectedCountryIso = event.target.value;
    this.countries$.subscribe((countries) => {
      const selectedCountryObj = countries.filter(
        (country) => country.code === selectedCountryIso
      )[0];
      this.phoneNumberControl = this.myform.get('phonenumber');
    });
  }

  phonenumberValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const phonenumber = control.value;
    if (phonenumber && phonenumber.charAt(0) === '0') {
      return { phonenumberinvalid: true };
    }
    return null;
  }

  GoToCard() {
    const adr: Address | null = null;

    this.send_data();
  }
}
