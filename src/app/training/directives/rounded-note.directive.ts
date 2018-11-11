import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appRoundedNote]'
})
export class RoundedNoteDirective implements OnInit {
  @Input()
  note: number;
  @Input()
  filtered: boolean;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.fontSize = '25px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.fontSize = '15px';
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const green = 'green';
    const red = 'red';
    if (this.filtered) {
      if (this.note > 50) {
        this.el.nativeElement.style.color = green;
      } else if (this.note < 50) {
        this.el.nativeElement.style.color = red;
      }
    }
  }
}
