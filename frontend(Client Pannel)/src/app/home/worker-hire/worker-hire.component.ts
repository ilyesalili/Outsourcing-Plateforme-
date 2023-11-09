import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Skill } from 'src/app/store/Skills/skills.model';
import { WorkerHier, WorkerProjectHier } from 'src/app/store/Worker/worker.model';

@Component({
  selector: 'app-worker-hire',
  templateUrl: './worker-hire.component.html',
  styleUrls: ['./worker-hire.component.scss'],
})
export class WorkerHireComponent implements OnInit {
  @Input() data: WorkerProjectHier = {} as WorkerProjectHier;
  @Output() select: EventEmitter<void> = new EventEmitter<void>();
  constructor(private route:Router) {}
  ngOnInit(): void {}
  changeSelect() {
    
    const worker: WorkerHier = {
      workerId: this.data.userId,
      firstName: this.data.firstName,
      lastName: this.data.lastName,
      publicPrice: this.data.publicPrice,
      category: this.data.category,
      skills: this.data.skills,
      nbHours:1
    };
    const token = localStorage.getItem('Token');
    axios.post<WorkerHier>('http://localhost:7777/clients/new-cardItem', worker, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(res=>{
      console.log(res)
      this.select.emit()
    }).catch(err=>{
      alert('Should Be Connected');
      this.route.navigate(['/signup/COMPANY']);
      // localStorage.clear()
    }
    )
  }
}