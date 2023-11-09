import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerStep2 } from '../store/Worker/worker.model';
import { Store } from '@ngxs/store';
import { RegisterWorkerStep2 } from '../store/Worker/worker.actions';
import axios from 'axios';

@Component({
  selector: 'app-loding-card',
  templateUrl: './loding-card.component.html',
  styleUrls: ['./loding-card.component.scss'],
})
export class LodingCardComponent {
  selectionMade = false;
  constructor(private route: Router, private store: Store) {}
  name: String = '';
  cart: WorkerStep2;
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const input = event.target;
    console.log(file);
    if (file) {
      this.uploadFile(file);
      this.name = file.name;
    }
  }

  uploadFile(file: File): void {
    const formData = new FormData();
    formData.append('File', file);
    const token= localStorage.getItem('Token')
    axios
      .post(
        'http://localhost:7777/storage/upload/photo',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        const cart: WorkerStep2 = {
          carteIdentity: res.data,
        };
        this.cart = cart;
        console.log(this.cart);
        const label_p = document.getElementById(
          'name_file'
        ) as HTMLParagraphElement;
        const img = document.getElementById('img_file') as HTMLImageElement;
        const src = './../../assets/done.png';
        label_p.innerText = file.name;
        img.src = src;
        this.selectionMade = true;
      })
      .catch((err) => alert('worng Format,Accepte only PDF' + err));
  }
  GoBackToPersonalInfo() {
    this.route.navigate(['/worker/personal_information']);
  }
  GoToNextInfo() {
    console.log(this.name);
    if (this.store.dispatch(new RegisterWorkerStep2(this.cart))) {
      this.route.navigate(['worker/work_and_education']);
    }
  }
}
