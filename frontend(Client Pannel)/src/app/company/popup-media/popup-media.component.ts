import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder,FormControl,Validators } from '@angular/forms';
import { Media } from 'src/app/store/Comapny/company.model';
export enum SocialMedia {
  Option1 ="facebook",
 Option2 = "twitter",
 Option3="instagram",
 Option4="linkedin"
}

@Component({
  selector: 'app-popup-media',
  templateUrl: './popup-media.component.html',
  styleUrls: ['./popup-media.component.scss']
})
export class PopupMediaComponent  implements OnInit{
  @Input() isOpen:boolean=false
  @Output() close:EventEmitter<void>=new EventEmitter<void>()
  @Input() media:Media[]=[]
  @Output() mediaChange=new EventEmitter<Media>()
  socialMediaOptions: string[] = Object.values(SocialMedia);

  myform:any
  mediaOpen:boolean=false
  constructor(private formbuild:FormBuilder){
    this.myform=this.formbuild.group({
      name:new FormControl([],Validators.required),
      url:new FormControl([],Validators.required)
    })
  }
  ngOnInit(): void {
  }
  back(){
    this.close.emit()
  }
  send_Data(){
    console.log(this.myform.value)
    this.mediaChange.emit(this.myform.value)
    this.back()
  }

}
