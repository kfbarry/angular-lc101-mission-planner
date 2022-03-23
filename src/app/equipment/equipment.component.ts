import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

itemBeingEdited: string = null;
 equipment: string [] = ["Habitat dome","Drones","Food Containers","Oxygen Tanks"];

  constructor() { }

  ngOnInit() {
  }

  add(item: string){
    this.equipment.push(item);
  }

  edit(item: string){
    this.itemBeingEdited = item;
  }

  save(updatedItem:string, item: string){
    let index = this.equipment.indexOf(item)
    this.equipment[index] = updatedItem; 
    this.itemBeingEdited = null;
  }

  remove(item:string){
    let index = this.equipment.indexOf(item)
    this.equipment.splice(index,1);
  }
}
