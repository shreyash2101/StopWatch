import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.backgroundColor = '#7be9e1';
    el.nativeElement.style.fontWeight = 'bold'
    el.nativeElement.style.paddingTop = '10px'
    el.nativeElement.style.paddingTop = '10px'
    el.nativeElement.style.textAlign = 'center'
    el.nativeElement.style.fontSize = '30px'
   }

}
