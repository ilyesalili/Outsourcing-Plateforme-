import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesteComponent } from './requeste.component';

describe('RequesteComponent', () => {
  let component: RequesteComponent;
  let fixture: ComponentFixture<RequesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
