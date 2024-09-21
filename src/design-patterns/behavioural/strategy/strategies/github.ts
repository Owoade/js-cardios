import { AuthStrategy } from "./type";

export class GithubAuthStrategy <T extends GithubAuthStrategyPayload> implements AuthStrategy {
     
    payload: T;

    constructor( payload: T ){

        this.payload = payload;

    }

    execute(){
        return `Github user with username ${this.payload.username} has been authenticated using Github`;
    }
}

export interface GithubAuthStrategyPayload {
    username: string;
}