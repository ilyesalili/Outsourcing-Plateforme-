import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCartComponent } from './media-cart.component';

describe('MediaCartComponent', () => {
  let component: MediaCartComponent;
  let fixture: ComponentFixture<MediaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
