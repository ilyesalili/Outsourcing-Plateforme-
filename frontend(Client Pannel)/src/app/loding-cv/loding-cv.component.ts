import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {
  Worker,
  WorkerStep1,
  WorkerStep2,
  WorkerStep3,
  WorkerStep4,
} from '../store/Worker/worker.model';
import { Select, Store } from '@ngxs/store';
import {
  RegisterWorkerFailure,
  RegisterWorkerStep4,
  RegisterWorkerSuccess,
} from '../store/Worker/worker.actions';
import { WorkerState } from '../store/Worker/worker.state';
import { Observable, async, take } from 'rxjs';
import { WorkerService } from '../store/Worker/worker.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loding-cv',
  templateUrl: './loding-cv.component.html',
  styleUrls: ['./loding-cv.component.scss'],
})
export class LodingCvComponent implements OnInit {
  selectionMade = false;
  worker: Worker;
  payth: WorkerStep1;
  @Select(WorkerState.getworkerStep1)
  workerStep1$!: Observable<WorkerStep1 | null>;
  @Select(WorkerState.getworkerStep2)
  workerStep2$!: Observable<WorkerStep2 | null>;
  @Select(WorkerState.getworkerStep3)
  workerStep3$!: Observable<WorkerStep3 | null>;
  @Select(WorkerState.getworkerStep4)
  workerStep4$!: Observable<string>;

  constructor(
    private store: Store,
    private workerService: WorkerService,
    private route: Router
  ) {}
  ngOnInit() {
    this.workerStep1$.subscribe((workerStep1) => {
      console.log(workerStep1);
    });

    this.workerStep2$.subscribe((workerStep2) => {
      console.log(workerStep2);
    });

    this.workerStep3$.subscribe((workerStep3) => {
      console.log(workerStep3);
    });
    this.workerStep4$.subscribe((workerStep4) => {
      console.log('path', workerStep4);
    });

    // this.saveWorker()
  }

  saveWorker() {
    this.workerStep1$.pipe(take(1)).subscribe((workerStep1) => {
      this.workerStep2$.pipe(take(1)).subscribe((workerStep2) => {
        this.workerStep3$.pipe(take(1)).subscribe((workerStep3) => {
          this.workerStep4$.pipe(take(1)).subscribe((workerStep4) => {
            const worker: Worker = {
              firstName: workerStep1?.firstName || '',
              lastName: workerStep1?.lastName || '',
              pictureUrl: workerStep1?.photo || '',
              address: workerStep1?.address || {
                numRue: workerStep1?.address.numRue || '',
                code_postal: workerStep1?.address.code_postal || '',
                commune: workerStep1?.address.commune || '',
                wilaya: workerStep1?.address.wilaya || '',
                addressDomissile: workerStep1?.address.addressDomissile || '',
              },
              phoneNumber: workerStep1?.phoneNumber || '',
              cardIdUrl: workerStep2?.carteIdentity || '',
              title: workerStep3?.title || '',
              skills: workerStep3?.skills || [],
              category: workerStep3?.category || '',
              publicPrice: workerStep3?.publicPrice || 0,
              workExperiences: workerStep3?.workExperiences || [],
              educationDetails: workerStep3?.educationDetails || [],
              portfolioProjects: workerStep3?.portfolioProjects || [],
              certifications: workerStep3?.certifications || [],
              cvUrl: workerStep4,
            };
            // this.store.dispatch(new RegisterWorkerSuccess(worker))
            console.log('hhhh', worker);
            this.workerService
              .PostWorker(worker)
              .then((res) => {
                console.log('response', res);
                alert(
                  'votre demande sera Traiter ,Vous recevie Un Email Altereorement'
                );
                this.route.navigate(['/']);
              })
              .catch((err) => console.log('error', err));
          });
        });
      });
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.uploadFile(file);
  }
  async uploadFile(file: File): Promise<any> {
    const formData = new FormData();
    formData.append('File', file);
    const token = localStorage.getItem('Token');
    await axios
      .post('http://localhost:7777/storage/upload/cv', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (file) {
          const label_p = document.getElementById(
            'name_file'
          ) as HTMLParagraphElement;
          const img = document.getElementById('img_file') as HTMLImageElement;
          const src = './../../assets/done.png';
          label_p.innerText = file.name;
          img.src = src;
          this.selectionMade = true;
          this.store.dispatch(new RegisterWorkerStep4(response.data));
          console.log(response.data);
          this.ngOnInit();
        }
      });
  }

  logout(): void {
    localStorage.removeItem('Token');
    // console.log('Logout clicked');
  }

  GoToNextInfo() {
    this.saveWorker();
    console.log('click');
  }
}
