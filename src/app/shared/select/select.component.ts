import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
 @Input() categories_title:string = '';
 @Input() data:any[] = [];
 @Output() selection = new EventEmitter;
 filter(event:any){
  this.selection.emit(event);
 }
}
