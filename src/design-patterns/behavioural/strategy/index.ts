import { AuthStrategy } from "./strategies/type";

export class AuthtenticationContext<T extends AuthStrategy> {

    private strategy: T

    constructor( strategy: T ){
        this.strategy = strategy;
    }

    authenticate(){
        const data = this.strategy.execute();
        return data;
    }

}
