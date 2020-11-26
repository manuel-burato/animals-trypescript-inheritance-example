import { Observable, Subject } from 'rxjs';
import { ConfigurationStore } from '../utilities/configuration.store';

export abstract class Animal {
    private _name: string
    private _ate: boolean = false
    private _starvationObservable: Subject<void> = new Subject<void>()
    public currentSpeed: number = 0
    protected abstract starvationTimeout: number
     
    constructor(name: string) {
        this._name = name
        console.log(`New ${this.constructor.name} is born, his name is ${this.name}`)
    }

    public eatsFood() {
        this._ate = true
        
        if(ConfigurationStore.MANGER_LOG_ACTIVE)
            console.log(`<${this.constructor.name}>`, this.name, "is eating")

        setTimeout(() => {
            this._starvationObservable.next()
        }, this.starvationTimeout)
    }

    public stop() {
        this.currentSpeed = 0
    }

    public get starvationObservable(): Observable<void> {
        return this._starvationObservable
    }

    public get name() {
        return this._name
    }

    public set name(val: string) {
        this._name = val
    }

    public get starving() {
        return this._ate
    }
}