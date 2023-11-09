import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { PaginatedWorkerResponse, User, Worker, WorkerProjectHier
 } from './worker.model';
import { RouteApiService } from 'src/app/services/route-api.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  constructor(private http: HttpClient, private baseUrl: RouteApiService) {}

  // registerWorker(worker: Worker): Observable<any> {
  //   return this.http.post(this.baseUrl.baseUrl_auth, worker);
  // }
  LoginUser(worker: User): Observable<any> {
    return this.http.post(this.baseUrl.baseUrl_auth, worker);
  }

  getAllWorkers(page: number, pageSize: number = 4): Observable<PaginatedWorkerResponse> {
    const url = `http://localhost:7777/workers?page=${page}&pageSize=${pageSize}`;

    return new Observable<PaginatedWorkerResponse>((observer) => {
      axios
        .get(url)
        .then((response) => {
          const workers: WorkerProjectHier[] = response.data;

          // Create a dummy paginated response with only the worker list
          const paginatedResponse: PaginatedWorkerResponse = {
            workers: workers,
          };

          observer.next(paginatedResponse);
          observer.complete();
        })
        .catch((error) => {
          observer.error(error);
        });
    });
  }
  PostWorker(worker:Worker){
    const token=localStorage.getItem('Token')
    return axios.post<Worker>('http://localhost:7777/auth/registration/user/worker',worker,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}
