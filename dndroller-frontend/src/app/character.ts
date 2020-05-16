import { Status } from './status';

export class Character {
    constructor(
        public id: number,
        public name: string,
        public max_hp: number,
        public hp: number,
        public initiative: number,
        public statuses: Array<Status>) { }
}
