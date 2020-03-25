import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    collapsed = true;
    @Output() tabSelected = new EventEmitter<number>();
    constructor() {}

    selectTab(number) {
      this.tabSelected.emit(number);
    }
}
