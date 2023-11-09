import { PortfolioProject } from './../store/Worker/worker.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder, 
  FormControl,
  Validators,
} from '@angular/forms';
import { Skill } from '../store/Skills/skills.model';
@Component({
  selector: 'app-popup-portfolio',
  templateUrl: './popup-portfolio.component.html',
  styleUrls: ['./popup-portfolio.component.scss']
})
export class PopupPortfolioComponent {
  @Input() isOpen:boolean=false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() ArrayOfProject:PortfolioProject[]=[]
  @Output() changeArrayOfProject=new EventEmitter<PortfolioProject>
  myform:any
  isModalOpenskill = false;
  portfolioOpen=false;
  parentSkills:Skill[]=[]
  constructor(private formbuild:FormBuilder){
    this.myform=this.formbuild.group({
      title: new FormControl([], Validators.required),
      role: new FormControl([], Validators.required),
      project_goal: new FormControl([], [Validators.required,Validators.minLength(2000)]),
      project_solution: new FormControl([], [Validators.required,Validators.minLength(2000)]),
     })
  }

  back(){
    this.close.emit()
  }
  handleSkillsChange(skills: Skill[]) {
    this.parentSkills=skills;
    console.log(this.parentSkills)
  }
  send_Data(){
    let finalobject:PortfolioProject={
      imageUrl:'',
      title: this.myform.value.title,
      role: this.myform.value.role,
      projectGoal: this.myform.value.project_goal,
      projectSolution: this.myform.value.project_solution,
      skills: this.parentSkills
    };
    this.changeArrayOfProject.emit(finalobject)
    this.back();
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const input = event.target;
    if (file) {
      const label_p = document.getElementById('name_file')as HTMLParagraphElement;
      const img=document.getElementById('img_file') as HTMLImageElement;
      const src="./../../assets/done.png"
      label_p.innerText = file.name;
      img.src=src;
    }
  }
}
