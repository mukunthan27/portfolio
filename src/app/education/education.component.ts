import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  arr=['rotateY(0deg)','rotateY(0deg)','rotateY(0deg)']
  @Input() hiddenProp = '';

  flipper = (value: number) =>{
    setTimeout(()=>{
      this.arr[value] = 'rotateY(0deg)'
    },3000)
    this.arr=['rotateY(0deg)','rotateY(0deg)','rotateY(0deg)']
    this.arr[value] = 'rotateY(180deg)'
  }


}
