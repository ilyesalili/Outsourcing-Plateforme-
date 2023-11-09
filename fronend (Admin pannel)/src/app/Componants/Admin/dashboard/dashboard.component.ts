import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/Animations/fade-in.animation';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInAnimation]
})
export class DashboardComponent implements OnInit{
  statistics={
    nb_clients: 0,
    nb_workers: 0,
    nb_workers_baned: 0,
    nb_admins: 0
  };
  nb_jobs=[];



  constructor() {
   
  }
  ngOnInit(): void {
    this.fetchStatistics();
    this.fetchNbJobs();
  }

  fetchStatistics() {
    const token=localStorage.getItem('Token')
    axios.get('http://localhost:7777/auth/admin/statistics',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // Handle the response
        this.statistics = response.data;
        console.log(this.statistics);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }
  fetchNbJobs() {
    const token=localStorage.getItem('Token')
    axios.get('http://localhost:7777/job-request/all',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        this.nb_jobs = response.data;
        console.log(this.nb_jobs);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  }
}
