import { Animal } from "../classes";
import { ConfigurationStore } from "./configuration.store";

export abstract class Manger {
    static feedAnimal(animal: Animal) {
        animal.eatsFood()
        animal.starvationObservable.subscribe(() => {
            if(ConfigurationStore.MANGER_OUTPUT_ACTIVE)
                console.log(`${animal.name} is starving`)
            
            animal.eatsFood()
        })
    }
}