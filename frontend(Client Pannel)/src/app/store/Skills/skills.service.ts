import { Injectable } from '@angular/core';
import axios from 'axios';
import { Skill } from './skills.model';
import { RouteApiService } from 'src/app/services/route-api.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private baseUrl: RouteApiService) {}

  getAllSkills() {
    const url = `${this.baseUrl.baseUrl_worker}/skills`;
    const token = localStorage.getItem('Token');
    const response = axios.get<Skill[]>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
}
