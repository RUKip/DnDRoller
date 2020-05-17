import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from './settings';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  settings;
  http;
  characters: Array<Character>;

  constructor(http: HttpClient) {
    this.http = http;
    this.settings = new Settings();
  }

  loadCharacters(party_name: string) {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/characters/' + party_name;
    this.characters = this.http.get(url);
  }

  saveCharacters(characters: Array<Character>) {
    const url: string = 'http://' + this.settings.defaultUrl + '/api/characters/store';
    return this.http.post(url, characters);
  }

  store(character: Character) {
      this.characters.push(character);
  }
}
