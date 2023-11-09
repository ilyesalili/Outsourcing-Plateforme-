import { Component, Input, OnInit } from '@angular/core';
import { Media } from 'src/app/store/Comapny/company.model';
@Component({
  selector: 'app-media-cart',
  templateUrl: './media-cart.component.html',
  styleUrls: ['./media-cart.component.scss']
})
export class MediaCartComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.data)
  }
  @Input() data:Media
  getIconClass(name: string): string {
    switch (name) {
      case 'facebook':
        return 'fab fa-facebook';
      case 'twitter':
        return 'fab fa-twitter';
      case 'instagram':
        return 'fab fa-instagram';
      case 'linkedin':
        return 'fab fa-linkedin' ;
      default:
        return 'fab fa-unknown'; // Replace with the default icon class for unknown social media
    }
  }

}
