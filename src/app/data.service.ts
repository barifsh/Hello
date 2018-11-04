import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['Initial goal','Another']);
  goal = this.goals.asObservable();

  changeGoal(goal){
    this.goals.next(goal);
  }

  constructor() { }
}
