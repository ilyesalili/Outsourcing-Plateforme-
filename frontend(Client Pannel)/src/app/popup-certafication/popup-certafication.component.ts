import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Certification, Skill } from '../store/Worker/worker.model';
@Component({
  selector: 'app-popup-certafication',
  templateUrl: './popup-certafication.component.html',
  styleUrls: ['./popup-certafication.component.scss']
})
export class PopupCertaficationComponent{
  @Input() isOpen:boolean=false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() arrayCertafications:Certification[]=[]
  @Output() ChangeCertafication=new EventEmitter<Certification>();
  myform:any
  isModalOpenskill = false;
  certaficationOpen=false;
  constructor(private formbuild:FormBuilder){
    this.myform=this.formbuild.group({
      title: new FormControl([], Validators.required),
      url: new FormControl([], Validators.required),
      date_taken: new FormControl([], Validators.required),
      company: new FormControl([], Validators.required),
      // skills:[]
     })
  }
  back(){
    this.close.emit()
    }
    parentSkills:Skill[]=[]
    handleSkillsChange(skills: Skill[]) {
      this.parentSkills=skills;
      this.myform.value.skills=this.parentSkills
      console.log(this.parentSkills)
    }
  send_Data(){
    let finalobject:Certification={
      title: this.myform.value.title,
      url: this.myform.value.url,
      issuedAt: this.myform.value.date_taken,
      companyName: this.myform.value.company,
      skills:this.parentSkills
    };
   
    this.ChangeCertafication.emit(finalobject)
    this.back();
  }
}
