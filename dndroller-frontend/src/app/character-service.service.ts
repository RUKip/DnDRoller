import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './settings';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  settings;
  http;

  constructor(http: HttpClient) {
    this.http = http;
    this.settings = new Settings();
  }

  getAllPartyOptions() {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/heroes/'; 
    return this.http.get(url);
  }

  loadCharacters(party_name: string) {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/heroes/load/' + party_name;
    return  this.http.get(url);
  }

  saveParty(party_name: string, characters: Array<Character>) {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/heroes/save';
    return this.http.post(url, {'party_name': party_name, 'heroes': characters}, {responseType: 'text'});
  }
}
