import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css'],
})
export class NoteCardComponent implements AfterViewInit {
  @ViewChild('truncator')
  truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText')
  bodyText!: ElementRef<HTMLElement>;
  @Input('title') title!: string;
  @Input('body') body!: string;
  @Input() link!: string;

  @Output('delete') deleteEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue('height'), 10);
    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onXButtonClick() {
    this.deleteEvent.emit();
  }
}
