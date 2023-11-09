import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EducationDetail } from '../store/Worker/worker.model';
@Component({
  selector: 'app-popup-education',
  templateUrl: './popup-education.component.html',
  styleUrls: ['./popup-education.component.scss'],
})
export class PopupEducationComponent {
  @Input() isOpen: boolean = false;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() arrayEducation:EducationDetail[]=[]
  @Output() Changeeducaion=new EventEmitter<EducationDetail>();
  myform: any;
  educationOpen = false;
  data: EducationDetail;
  constructor(
    private formbuild: FormBuilder,
    ) {
    this.myform = this.formbuild.group({
      school: new FormControl([], Validators.required),
      // degree: new FormControl([], Validators.required),
      country: new FormControl([], Validators.required),
      field: new FormControl([], Validators.required),
      from: new FormControl([], Validators.required),
      to: new FormControl([], Validators.required),
      description: new FormControl([], [Validators.required,Validators.minLength(100)]),
    });
  }
  ngOnInit(): void {
    // this.educationOpen = true;
  }
  back() {
    this.close.emit();
  }
  send_Data() {
    this.data = {
      description: this.myform.value.description,
      startDate: this.myform.value.from,
      endDate: this.myform.value.to,
      school: this.myform.value.school,
      location: this.myform.value.country,
      field: this.myform.value.field,
    };
    this.Changeeducaion.emit(this.data)
    console.log(this.myform.value);
    this.back();
  }
}
