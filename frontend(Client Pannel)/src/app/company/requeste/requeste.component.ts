import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { jobrequest } from 'src/app/store/Comapny/company.model';

@Component({
  selector: 'app-requeste',
  templateUrl: './requeste.component.html',
  styleUrls: ['./requeste.component.scss'],
})
export class RequesteComponent implements OnInit {
  array: jobrequest[] = [];
  

  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    console.log('gggg', token);
    axios
      .get('http://localhost:7777/job-request/company', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.array = res.data;
        console.log('ffd', this.array);
        // this.calculateTotalHoursAndPrice();
      })
      .catch((err) => console.log(err));
  }

  
}
