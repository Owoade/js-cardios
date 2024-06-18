import { AuthStrategy } from "./type";

export class GoogleAuthStrategy<T extends GoogleAuthStrategyPayload> implements AuthStrategy {

    payload: T;

    constructor( payload: T ){

        this.payload = payload;

    }

    execute(){
        return `Google user with email ${this.payload.email} has been authenticated using Google`;
    }

}

export interface GoogleAuthStrategyPayload {
    email: string;
}