export class Stat {

    public str: number;
    public dex: number;
    public con: number;
    public int: number;
    public wis: number;
    public cha: number;

    constructor(
        str: number = 1,
        dex: number = 1,
        con: number = 1,
        int: number = 1,
        wis: number = 1,
        cha: number = 1,
    ) {
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
    }

    asModifier(value: number) {
        return (value - 10)/2;
    }
}
