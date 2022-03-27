import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})


export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
  
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   nearMaxMass: string = "plain";
   remainingSpace: number = 2000;

   belowMaxMass: boolean []= [true,true,true,true,true,true,true,true,true]
   belowMaxItems: boolean = true;
   alreadySelected: boolean []= [false,false,false,false,false,false,false,false,false]

   constructor() { }

   ngOnInit() { }

   addItem(equipment: object){
     let objKeys = Object.keys(equipment);
    this.cargoHold.push(equipment);
    this.cargoMass += equipment[objKeys[1]];
    this.checkMaxItems();
    this.calculateMassRemaining()

    for (let i=0; i < this.equipmentItems.length; i++){
    this.checkMaxMass(this.equipmentItems[i]);
    this.checkAlreadySelected(this.equipmentItems[i]);
    }

    if (this.cargoMass + 200 >= this.maximumAllowedMass){
      this.nearMaxMass = "nearMaxMass";
    }
   }

   checkMaxMass(equipment: object){
     let index = this.equipmentItems.indexOf(equipment);
     let objKeys = Object.keys(equipment);
      if (equipment[objKeys[1]] + this.cargoMass > this.maximumAllowedMass){
        this.belowMaxMass[index] = false;
      } else {
        this.belowMaxMass[index] = true;
      }
  }

  checkMaxItems(){
    if (this.cargoHold.length === this.maxItems){
      this.belowMaxItems = false;
    } else {
      this.belowMaxItems = true;
    }
}

checkAlreadySelected(equipment: object){
  let index = this.equipmentItems.indexOf(equipment);
    if (this.cargoHold.includes(equipment)){
      this.alreadySelected[index]= true;
    } else {
      this.alreadySelected[index]= false;
    }
  
}
calculateMassRemaining(){
 this.remainingSpace = this.maximumAllowedMass - this.cargoMass;
}

emptyHold(){
  this.cargoHold = [];
  this.cargoMass = 0;
  this.nearMaxMass = "plain";
  this.checkMaxItems();
  this.calculateMassRemaining()

  for (let i=0; i < this.equipmentItems.length; i++){
  this.checkMaxMass(this.equipmentItems[i]);
  this.checkAlreadySelected(this.equipmentItems[i])
  }
}

removeItem(equipment: object){
  let objKeys = Object.keys(equipment);
  let index = this.equipmentItems.indexOf(equipment);
 this.cargoHold.splice(index,1);
 this.cargoMass -= equipment[objKeys[1]];
 this.checkMaxItems();
 this.calculateMassRemaining()

 for (let i=0; i < this.equipmentItems.length; i++){
 this.checkMaxMass(this.equipmentItems[i]);
 this.checkAlreadySelected(this.equipmentItems[i]);
 }
}

}
