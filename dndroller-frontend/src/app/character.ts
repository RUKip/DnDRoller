import { Status } from './status';

export class Character {

    public id: number;
    public name: string;
    public max_hp: number;
    public hp: number;
    public initiative: number;
    public statuses: Array<Status>

    constructor(
        id: number,
        name: string,
        max_hp: number = 0,
        hp: number = max_hp,
        initiative: number = 0,
        statuses: Array<Status> = []
        ) {
            this.id = id;
            this.name = name;
            this.max_hp = max_hp;
            this.hp = hp;
            this.initiative = initiative;
            this.statuses = statuses;
        }

    
    addHealth(value: number) {
        let temp_hp = this.hp + value;
        if (temp_hp > this.max_hp) {
            this.hp = this.max_hp;
        } else if (temp_hp < 0) {
            this.hp = 0;
        } else {
            this.hp = temp_hp;
        }
    }

}
