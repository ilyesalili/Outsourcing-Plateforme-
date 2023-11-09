import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSkillsComponent } from './popup-skills.component';

describe('PopupSkillsComponent', () => {
  let component: PopupSkillsComponent;
  let fixture: ComponentFixture<PopupSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
