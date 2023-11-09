import { WorkerJobRequest } from './../../store/Worker/worker.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { WorkerHier} from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  workers: WorkerHier[] = [];
  constructor(private route:Router){}
  ngOnInit(): void {
    const token = localStorage.getItem('Token');
    axios
      .get('http://localhost:7777/clients/card', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.workers = res.data.cardItems;
        console.log(res);
        // localStorage.setItem()
      })
      .catch((err) => console.log(err));
  }
  currentPage = 1;

  Submit() {
    let array:WorkerJobRequest[]=[]
    this.workers.forEach(e=>
      array.push({workerId:e.workerId,nbHours:e.nbHours})
      )
      const data={
        workers:array
      }
      console.log(array)

    const token = localStorage.getItem('Token');
    console.log(token)
    axios
      .post<WorkerJobRequest[]>('http://localhost:7777/job-request/', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
      alert('Your Request Are Add Sucessfully');
      console.log(res)
      this.route.navigate(['/home'])
    }
      )
      .catch((err) =>  alert('Pleas Confirm Your card'));

      // axios.delete('')
  }
}
