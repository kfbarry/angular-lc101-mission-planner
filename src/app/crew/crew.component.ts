import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean[] = [false,false,false,false,false,false,false];
  crew: object[] = [];
  crewFullness: string = "Crew";
  crewSelector: boolean [] = [false,false,false];
  crewPhoto: object;

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() { }

  ngOnInit() { }

  addCrewMember(candidate: object){
    let index = this.candidates.indexOf(candidate);
    if (!this.crew.includes(candidate) && this.crew.length < 3){
      this.crew.push(candidate);
      this.inCrew[index] = true;
      this.checkCrewSize();
    } else if (this.crew.includes(candidate)){
      this.crew.splice(this.crew.indexOf(candidate),1);
      this.inCrew[index] = false;
      this.checkCrewSize();
    }
  }

  checkCrewSize(){
    if(this.crew.length >= 3){
      this.crewFullness = "Crew Full";
    } else {
      this.crewFullness = "Crew";
    }
  }

}
