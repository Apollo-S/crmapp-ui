import {Component, OnInit} from '@angular/core';
import {PersonService} from './person-service';

@Component({
    selector: 'app-persons',
    standalone: false,
    templateUrl: './persons.html',
    styleUrl: './persons.sass',
})
export class Persons implements OnInit {
    persons!: any[];


    constructor(private personService: PersonService) {

    }

    ngOnInit(): void {
        this.getAllPersons();
    }

    getAllPersons() {
        this.personService.getAllPersons().subscribe(response => this.persons = response);
    }
}
