
export namespace Factory {

    export interface ICar {
        name(): string;
        accelerate(): string;
    }

    export const brands = {
        vw: "Volks",
        peugeot: "Peugeot",
        ford: "Ford"
    };

    export class CarFactory {
        static create(name: string): ICar {
            switch (name) {
                case brands.peugeot: {
                    return new Peugeot();
                }
                case brands.ford: {
                    return new Ford();
                }
                default: {
                    return new VW();
                }
            }
        }

    }

    class VW implements ICar {
        name(): string {
            return brands.vw;
        }
        accelerate(): string {
            return "VRUUUUUM";
        }
    }

    class Peugeot implements ICar {
        name(): string {
            return brands.peugeot;
        }
        accelerate(): string {
            return "VRUMMMMM";
        }
    }

    class Ford implements ICar {
        name(): string {
            return brands.ford;
        }
        accelerate(): string {
            return "VRRRRUUM";
        }
    }
}
