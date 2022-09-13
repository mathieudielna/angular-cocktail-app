import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges {

  @Input() private appSelected?: boolean;  
  @HostBinding('style.backgroundColor') private backgroundColor?: String;
  @HostBinding('style.color') private color?: String;
  @HostBinding('style.fontWeight') private fontWeight?: String;
  

  ngOnChanges(): void {
    //this.appSelected ? "":"";
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.fontWeight = "bold";
      this.color = "white";
    } else {
      this.backgroundColor = 'white';
      this.fontWeight = "400";
      this.color = "var(--regular)";
    };
  };

  constructor() {
    this.backgroundColor = 'white';
    this.fontWeight = "400";
    this.color = "var(--regular)";
  }

}
