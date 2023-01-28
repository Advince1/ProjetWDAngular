import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/model/tache';
import { TachesService } from 'src/app/service/taches.service';
import { UserService } from 'src/app/service/user.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  taches: Array<Tache> = [];
  att: Array<Tache> = [];
  cou: Array<Tache> = [];
  ter: Array<Tache> = [];

  newTache1: Tache = {
    titre: '',
    termine: false,
    statut: '',
  }; 
  newTache2: Tache = {
    titre: '',
    termine: false,
    statut: 'attente',
  };
  newTache3: Tache = {
    titre: '',
    termine: false,
    statut: 'cours',
  };
  newTache4: Tache = {
    titre: '',
    termine: false,
    statut: 'termine',
  }; 
  
  filter:string = 'Tous';

  constructor(private tacheService: TachesService,
    private userService: UserService,
    private router: Router){  }
  
  ngOnInit(): void {
    this.tacheService.getTaches().subscribe({
      next: (data:Array<Tache>) => { this.taches = data; this.att = data; this.cou = data; this.ter = data }
    });

  }  

  ajouter1(statut:string) {

    this.tacheService.ajoutTaches(this.newTache1).subscribe({
      next: (data) => {
        this.taches.push(data);
      }
    });
    
  }  

  ajouter2(statut:string) {
    this.tacheService.ajoutTaches(this.newTache2).subscribe({
      next: (data) => {
        this.att.push(data);
      }
    });
    
  }

  ajouter3(statut:string) {
    this.tacheService.ajoutTaches(this.newTache3).subscribe({
      next: (data) => {
        this.cou.push(data);
      }
    });
    
  }

  ajouter4(statut:string) {
    this.tacheService.ajoutTaches(this.newTache4).subscribe({
      next: (data) => {
        this.ter.push(data);
      }
    });
    
  }

  supprimer(tache: Tache): void {
    this.tacheService.removeTaches(tache).subscribe({
      next: (data) => {
        this.taches = this.taches.filter(t => tache._id != t._id);
        this.att = this.att.filter(t => tache._id != t._id);
        this.cou = this.cou.filter(t => tache._id != t._id);
        this.ter = this.ter.filter(t => tache._id != t._id);
      }
    });

  }

  modifier(tache: Tache) {
    tache.termine = !tache.termine;
    this.tacheService.updateTaches(tache).subscribe({
      next: (data) => {
      }
    });
  }

  loggout() {
    this.userService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  change(filter:string) {
    this.filter = filter;
  }

  drop(event : CdkDragDrop<Tache[]>){

    console.log(event)

    if(event.previousContainer === event.container){
      console.log(event)
      console.log(event.item.data),
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    else{
      console.log(event)
      console.log(event.item.data),
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
  //      this.tacheService.updateTaches()
      );
      

    } 
    
  }

}
