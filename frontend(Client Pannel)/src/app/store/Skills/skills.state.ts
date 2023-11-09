import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Skill } from './skills.model';
import { GetAll } from './skills.actions';
import { SkillService } from './skills.service';

export interface SkillStateModel {
  skills: Skill[];
}
@State<SkillStateModel>({
  name: 'skills',
  defaults: {
    skills: [],
  },
})
@Injectable()
export class SkillState {
  constructor(private skillService: SkillService) {}

  @Selector()
  static getAllSkills(state: SkillStateModel) {
    return state.skills;
  }

  @Action(GetAll)
  fetchAllSkills(ctx: StateContext<SkillStateModel>) {
    return this.skillService.getAllSkills().then(res => {
      ctx.patchState({
        skills: res.data,
      });

      console.log(res)
    });
  }
}
