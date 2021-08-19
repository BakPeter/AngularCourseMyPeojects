import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elemtRef: ElementRef) {}

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleDocOpen(event: Event) {
    this.isOpen = this.elemtRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
