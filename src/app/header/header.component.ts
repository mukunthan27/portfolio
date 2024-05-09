import {Output, EventEmitter,Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  headerProp = 'unset';
  navProp = 'none';

  controlNav = () =>{
    if(this.headerProp === 'none'){
      this.navProp = 'none';
      this.headerProp = 'unset';
      this.newItemEvent.emit('unset');
    }
    else{
      this.navProp = 'unset';
      this.headerProp = 'none';
      this.newItemEvent.emit('none');
    }
  }
}
