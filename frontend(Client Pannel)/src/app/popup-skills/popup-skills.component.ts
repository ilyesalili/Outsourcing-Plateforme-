import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { Skill } from '../store/Skills/skills.model';
import { GetAll } from '../store/Skills/skills.actions';
import { SkillService } from '../store/Skills/skills.service';

@Component({
  selector: 'app-popup-skills',
  templateUrl: './popup-skills.component.html',
  styleUrls: ['./popup-skills.component.scss'],
})
export class PopupSkillsComponent implements OnInit {
  skills: Skill[] = [];
  selectedOptions: Skill[] = [];
  @Input()  isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input()  skillsSelected:Skill[];
  @Output() skillsChange = new EventEmitter<Skill[]>();
 
  constructor(private store: Store, private get: SkillService) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAll());  
    this.get
      .getAllSkills()
      .then((res) => {
        this.skills = res.data;
      })
      .catch((err) => console.log(err));
  }
  isSelected(skill: Skill): boolean {
    return this.selectedOptions.some((option) => option === skill);
  }
  toggleOptionSelection(skill: Skill): void {
    const index = this.selectedOptions.findIndex(
      (option) => option === skill
    );
    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(skill);
    }
  }
  
  SaveSkills(): void {
    this.skillsChange.emit(this.selectedOptions);
    this.close.emit()
  }
  
  deleteSelect(): void {
    this.close.emit();
  }
}
