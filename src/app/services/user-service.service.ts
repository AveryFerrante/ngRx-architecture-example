import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDatabase: User[] = [
    {
      name: 'Avery Ferrante',
      age: 24,
      birthdate: new Date(1995, 1, 20)
    },
    {
      name: 'John Smith',
      age: 42,
      birthdate: new Date(1971, 2, 21)
    },
    {
      name: 'Jack Johnson',
      age: 32,
      birthdate: new Date(1984, 5, 7)
    }
  ];
  constructor() { }

  getUserByName(name: string): Observable<User | Error> {
    const user = this.userDatabase.find(u => u.name.toLowerCase().includes(name.toLowerCase()));
    return of(user).pipe(delay(1500));
  }
}
