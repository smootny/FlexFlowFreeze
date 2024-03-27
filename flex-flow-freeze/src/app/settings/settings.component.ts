import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @ViewChild('photo') photo: ElementRef | undefined;
  @ViewChild('file') file: ElementRef | undefined;

  constructor() { }

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
}
