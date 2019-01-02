"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Factory;
(function (Factory) {
    Factory.brands = {
        vw: "Volks",
        peugeot: "Peugeot",
        ford: "Ford"
    };
    class CarFactory {
        static create(name) {
            switch (name) {
                case Factory.brands.peugeot: {
                    return new Peugeot();
                }
                case Factory.brands.ford: {
                    return new Ford();
                }
                default: {
                    return new VW();
                }
            }
        }
    }
    Factory.CarFactory = CarFactory;
    class VW {
        name() {
            return Factory.brands.vw;
        }
        accelerate() {
            return "VRUUUUUM";
        }
    }
    class Peugeot {
        name() {
            return Factory.brands.peugeot;
        }
        accelerate() {
            return "VRUMMMMM";
        }
    }
    class Ford {
        name() {
            return Factory.brands.ford;
        }
        accelerate() {
            return "VRRRRUUM";
        }
    }
})(Factory = exports.Factory || (exports.Factory = {}));
//# sourceMappingURL=creational.js.map