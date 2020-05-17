import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CharacterService } from '../character-service.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  characterForm;

  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharacterService
    ) {
      this.characterForm = this.formBuilder.group({
        name: '',
        max_hp: 0
      });
     }

  ngOnInit(): void {
  }

  onSubmit() {
    let name = this.characterForm.get('name').value
    let max_hp = this.characterForm.get('max_hp').value
    this.characterService.store(new Character(0, name, max_hp, max_hp))
    this.characterForm.reset();
  }
}
