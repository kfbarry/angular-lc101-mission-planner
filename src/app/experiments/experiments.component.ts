import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

 chosenExperiment: string = null;
  experiments: string[] = ["Mars soil sample","Plant growth in habitat","Human bone density"];

  constructor() { }

  ngOnInit() {
  }

  add(trial:string){
    this.experiments.push(trial);
  }

  save(newTrial:string, trial:string){
    let index = this.experiments.indexOf(trial);
    this.experiments[index] = newTrial;
    this.chosenExperiment = null;
  }

  edit(trial: string){
    this.chosenExperiment = trial;
  }

  remove(trial:string){
    let index = this.experiments.indexOf(trial);
    this.experiments.splice(index,1)
  }

}
