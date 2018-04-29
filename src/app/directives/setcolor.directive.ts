import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[setcolor]'
})
export class SetcolorDirective {

  constructor(private element:ElementRef) {
    element.nativeElement.style.backgroundColor = "#00cccc";
  }

  @HostListener('mouseover') setbtncol(){
    this.setColor("#009999")
  }

  @HostListener('mouseleave') resetbtncol(){
    this.setColor("#00cccc")
  }

  private setColor(color:String){
    this.element.nativeElement.style.backgroundColor = color;
  }

}
