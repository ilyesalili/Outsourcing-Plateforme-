import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import axios from 'axios';
import { WorkerHier } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-user-in-card',
  templateUrl: './user-in-card.component.html',
  styleUrls: ['./user-in-card.component.scss']
})
export class UserInCardComponent implements OnInit{
  counter = 1;
  ngOnInit(): void {
    console.log('data',this.data)
    this.counter=this.data.nbHours
  }
  @Input() data:WorkerHier
 

  increment() {
    this.counter++;
    const token=localStorage.getItem('Token')
    console.log(token)
    axios.put(`http://localhost:7777/clients/card/cardItem/update/${this.data.workerId}/nbHours/${this.counter}`,null,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

    
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
    const token=localStorage.getItem('Token')
    axios.put(`http://localhost:7777/clients/card/cardItem/update/${this.data.workerId}/nbHours/${this.counter}`,null,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  delete(){
    const token=localStorage.getItem('Token');
    axios.delete(`http://localhost:7777/clients/card/cardItem/delete/${this.data.workerId}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(
      res=>{
        location.reload()
      }
    ).catch(err=>{
      console.log(err)
    })
  }
}
