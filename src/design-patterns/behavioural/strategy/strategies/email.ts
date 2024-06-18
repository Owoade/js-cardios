import { AuthStrategy } from "./type";

export class EmailPasswordAuthStrategy<T extends EmailPasswordAuthStrategyPayload> implements AuthStrategy {

    payload: T

    constructor( payload: T ){

        this.payload = payload;

    }

    execute(){
        return `user with ${this.payload.email} and password: ${this.payload.password} has been authenticated`
    }

}

export interface EmailPasswordAuthStrategyPayload {
    email: string;
    password: string;
}