import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  Certification,
  EducationDetail,
  PortfolioProject,
  Skill,
  WorkExperience,
  WorkerStep3,
} from '../store/Worker/worker.model';
import { Store } from '@ngxs/store';
import { RegisterWorkerStep3 } from '../store/Worker/worker.actions';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-work-and-ducation-form',
  templateUrl: './work-and-ducation-form.component.html',
  styleUrls: ['./work-and-ducation-form.component.scss'],
})
export class WorkAndDucationFormComponent implements OnInit{
  form: any;
  parentSkills: Skill[] = [];
  parentWorkExperiences: WorkExperience[] = [];
  parentEducation: EducationDetail[] = [];
  parentCertaficats: Certification[] = [];
  parentProtfolio: PortfolioProject[] = [];
  employementOpen = false;
  educationOpen = false;
  certafucation = false;
  portfolio = false;
  isModalOpen = false;
  data: WorkerStep3;
  isModalOpenskill = false;

  constructor(private formbuild: FormBuilder, private store: Store, private route: Router) {
    this.form = this.formbuild.group({
      title: new FormControl([], Validators.required),
      skills: new FormControl([], Validators.required),
      category: new FormControl([], Validators.required),
      rate: new FormControl([], Validators.required),
    });
  }
  listOfCategories:any
  ngOnInit(): void {
   axios.get('http://localhost:7777/workers/categories')
   .then(res=>{
      this.listOfCategories=res.data
    }
   ).catch(
    err=>console.log(err)
   )
  }

  openSkillsPopup(): void {
    this.isModalOpen = true;
  }
  closeSkillsPopup(): void {
    this.isModalOpen = false;
  }
  handleSkillsChange(skills: Skill[]) {
    this.parentSkills = skills;
    this.form.value.skills = this.parentSkills;
    console.log(this.parentSkills);
  }
  handleWorkExperiencesChange(updatedWorkExperiences: WorkExperience) {
    this.parentWorkExperiences.push(updatedWorkExperiences);
    console.log(this.parentWorkExperiences);
  }
  deleteWorkExperience(index: number): void {
    this.parentWorkExperiences.splice(index, 1);
  }

  handleEducationChange(updatedEducation: EducationDetail) {
    this.parentEducation.push(updatedEducation);
    console.log(this.parentEducation);
  }
  deleteEducation(index: number) {
    this.parentEducation.splice(index, 1);
  }
  handleCertaficatChange(updatedEcertafication: Certification) {
    this.parentCertaficats.push(updatedEcertafication);
    console.log(this.parentCertaficats);
  }
  deleteCertafication(index: number) {
    this.parentCertaficats.splice(index, 1);
  }
  handleProetfolioChange(updatedPortfolio: PortfolioProject) {
    this.parentProtfolio.push(updatedPortfolio);
    console.log(this.parentProtfolio);
  }
  deleteProjet(index: number) {
    this.parentProtfolio.splice(index, 1);
  }
  send_data() {
    const info: WorkerStep3 = {
      workExperiences: this.parentWorkExperiences,
      educationDetails: this.parentEducation,
      portfolioProjects: this.parentProtfolio,
      certifications: this.parentCertaficats,
      skills: this.parentSkills,
      publicPrice: this.form.value.rate,
      title:this.form.value.title,
      category: this.form.value.category,
    };
    if(
      this.store.dispatch(new RegisterWorkerStep3(info))){
        this.route.navigate(['/worker/upload_cv'])
      }
  }
}
