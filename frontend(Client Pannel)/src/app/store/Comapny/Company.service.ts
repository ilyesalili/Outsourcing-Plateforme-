import { Injectable } from '@angular/core';
import axios from 'axios';
import { Company } from './company.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
    constructor(private route:Router){

    }
    PostWorker(data:Company){
        const token=localStorage.getItem('Token')
        return axios.post<Company>('http://localhost:7777/auth/registration/user/company',data,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        )  .then(
            res=>{console.log(res);
              alert('Thanks For Your Registration You Will Recive An email Of Confermition next time')
              localStorage.clear()
              this.route.navigate(['/'])
            }
          ).catch(err=>console.log(err))
      }
    }