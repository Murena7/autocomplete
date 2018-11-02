import { Directive, ElementRef, HostListener, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

const returnDataLimiter = 100;

@Directive({
  selector: '[appAutocomplete]',
})
export class AutocompleteDirective implements OnInit {
  private element: HTMLInputElement;
  namesArray: string[];
  temporaryNames: string[];
  previousInputValue: string;
  @Output() filterNames = new EventEmitter<any>();

  constructor(private elRef: ElementRef, private route: ActivatedRoute) {
    this.element = elRef.nativeElement;
  }

  ngOnInit() {
    this.namesArray = this.route.snapshot.data.data;
  }

  @HostListener('keyup')
  search() {
    if (!(this.previousInputValue === this.element.value)) {
      this.arrayFilter(this.element);
      this.previousInputValue = this.element.value;
      this.emitUtils(this.element.value);
    }
  }

  arrayFilter(data: HTMLInputElement) {
    this.temporaryNames = this.namesArray.filter(item => {
      return item.toLowerCase().indexOf(data.value.toLowerCase()) !== -1;
    }).slice(0, returnDataLimiter);
  }

  emitUtils(inputValue: string) {
    if (inputValue.length > 0) {
      this.filterNames.emit(this.temporaryNames);
    } else {
      this.filterNames.emit([]);
    }
  }
}
