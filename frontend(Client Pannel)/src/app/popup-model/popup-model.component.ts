import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Skill, WorkExperience } from '../store/Worker/worker.model';

@Component({
  selector: 'app-popup-model',
  templateUrl: './popup-model.component.html',
  styleUrls: ['./popup-model.component.scss'],
})
export class PopupModelComponent  {
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() workExperiences: WorkExperience[]=[];
  @Output() workExperiencesChange = new EventEmitter<WorkExperience>();
  myform: any;
  parentSkills:Skill[]=[]
  isModalOpenskill = false; //for skills inside employement popup
  selectedOptionsskills: string[] = [];
  constructor(
    private formbuild: FormBuilder,
  ) {
    this.myform = this.formbuild.group({
      title: new FormControl([], Validators.required),
      company: new FormControl([], Validators.required),
      city: new FormControl([], Validators.required),
      country: new FormControl([], Validators.required),
      position: new FormControl([], Validators.required),
      from: new FormControl([], Validators.required),
      to: new FormControl([], Validators.required),
      // skills:new FormControl([],Validators.required),
      description: new FormControl([], Validators.required),
    });
  }
  
  handleSkillsChange(skills: Skill[]) {
    this.parentSkills=skills;
    this.myform.value.skills=this.parentSkills
    console.log(this.parentSkills)
  }
  back(): void {
    this.close.emit();
  }
  valide:boolean=false
  send_Data(): void {
    let finalobject: WorkExperience;
    finalobject = {
      title:this.myform.value.title,
      startDate: this.myform.value.from,
      endDate: this.myform.value.to,
      companyName: this.myform.value.company,
      description: this.myform.value.description,
      location: this.myform.value.country,
      type: this.myform.value.position,
      // skills:this.parentSkills,
    };
    this.workExperiencesChange.emit(finalobject);
    this.back()
  }
}
