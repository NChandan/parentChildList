import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lang_list = "";
  @Output() clicked = new EventEmitter<any>();

  selectedListValues: any = [];;
  isModal: boolean = false


  constructor() { }

  ngOnInit(): void {
    console.log(this.lang_list);
  }

  selectedList(language: any) {
    if (!this.selectedListValues.includes(language)) {
      this.selectedListValues.push(language);
    } else {
      this.selectedListValues.splice(
        this.selectedListValues.indexOf(language), 1
      );
    }
    console.log(this.selectedListValues);
  }

  checkSelectedList(language: any) {
    return this.selectedListValues.includes(language);
  }

  submit() {
    this.clicked.emit(this.selectedListValues);
    this.isModal = !this.isModal;
  }
}
