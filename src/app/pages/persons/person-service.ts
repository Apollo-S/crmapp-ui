import {Injectable} from '@angular/core';
import {HttpService} from '../../core/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PersonService {


    constructor(private httpService: HttpService) {
    }

    getAllPersons() {
        return this.httpService.get({
            url: `${environment.api.path}/persons`,
        });

    }
}
