import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'stream-stream-select',
  templateUrl: './stream-select.component.html',
  styleUrls: ['./stream-select.component.scss']
})
export class StreamSelectComponent implements OnInit {

  @ViewChild('optionContainer', {
    read: ViewContainerRef
  }) optionContainer: ViewContainerRef;
  @Input() options: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
