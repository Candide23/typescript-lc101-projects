import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";


export class Rocket {
   // properties and methods

     totalCapacityKg: number;
    name: string;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(totalCapacityKg: number, name: string){
        this.name = name;
        this.totalCapacityKg =totalCapacityKg;
    }

    sumMass( items: Payload[] ): number{

      let myTotalMass = 0;
      for(let i =0; i < items.length;i++){
         myTotalMass+=items[i].massKg;

      }
      return myTotalMass;     
    }

    currentMassKg(): number {
       //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems.

       let cargoMassTotal = this.sumMass(this.cargoItems);
       let astronautMassTotal = this.sumMass(this.astronauts);
       let massTotal = cargoMassTotal + astronautMassTotal;
       return massTotal;

    }


     canAdd(item: Payload): boolean {
        let canIAdd: boolean = false;
        
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            canIAdd = true;
        }
        
        return canIAdd;
    }

    addCargo(cargo: Cargo): boolean {
        let canAddCargo: boolean = false;
        
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            canAddCargo = true;
        }

        return canAddCargo;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let canAddAstronaut: boolean = false;
        
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            canAddAstronaut = true;
        }

        return canAddAstronaut;
    }
}