import { Status } from './status';
import { Stat } from './Stat';

export class Character {

    public name: string;
    public race: string;
    public max_hp: number;
    public hp: number;
    public initiative: number;
    public stats: Stat;
    public statuses: Array<Status>

    constructor(
        name: string,
        race: string = 'unknown',
        max_hp: number = 0,
        hp: number = max_hp,
        initiative: number = 0,
        statuses: Array<Status> = [],
        stats: Stat
        ) {
            this.name = name;
            this.race = race;
            this.max_hp = max_hp;
            this.hp = hp;
            this.initiative = initiative;
            this.statuses = statuses;
            this.stats = stats;
        }

    addHealth(value: number) {
        let temp_hp = this.hp + Number(value);
        if (temp_hp > this.max_hp) {
            this.hp = this.max_hp;
        } else if (temp_hp < 0) {
            this.hp = 0;
        } else {
            this.hp = temp_hp;
        }
    }
}
