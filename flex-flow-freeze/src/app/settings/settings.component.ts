import { Component, ElementRef, ViewChild } from '@angular/core';
import {SharedNameService} from "../shared/shared-name.service";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @ViewChild('photo') photo: ElementRef | undefined;
  @ViewChild('file') file: ElementRef | undefined;
  userName: string = '';
  constructor(private sharedNameService: SharedNameService, private router: Router) {}

  ngOnInit() {
    this.sharedNameService.currentName.subscribe((name: string) => {
      this.userName = name;
    });
  }
  onFileChange(event: any): void {
    const choosedFile = event.target.files[0];

    if (choosedFile) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        // @ts-ignore
        this.photo.nativeElement.src = e.target.result;
      };

      reader.readAsDataURL(choosedFile);
    }
  }
  goBack():void {
    this.router.navigate(['/menu'])
  }
}
