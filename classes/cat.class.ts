import { WalkingAnimal } from "../interfaces"
import { Animal } from "./"

export class Cat extends Animal implements WalkingAnimal {
    protected starvationTimeout: number = 20000

    public walk() {
        this.currentSpeed = 10
    }

    public run() {
        this.currentSpeed = 100
    }
}