import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-image-comparison',
  templateUrl: './image-comparison.component.html',
  styleUrls: ['./image-comparison.component.css']
})
export class ImageComparisonComponent implements OnInit {

  @ViewChild('slider') slider!: ElementRef;
  @ViewChild('image') image!: ElementRef;
  @ViewChild('dragLine') dragLine!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // This function will be triggered when the input range value changes
  adjustImage(event: any): void {
    const sliderVal = event.target.value;
    this.renderer.setStyle(this.dragLine.nativeElement, 'left', `${sliderVal}%`);
    this.renderer.setStyle(this.image.nativeElement, 'width', `${sliderVal}%`);
  }

}
