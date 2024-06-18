import { AuthtenticationContext } from ".";
import { EmailPasswordAuthStrategy, EmailPasswordAuthStrategyPayload } from "./strategies/email";
import { GithubAuthStrategy, GithubAuthStrategyPayload } from "./strategies/github";
import { GoogleAuthStrategy, GoogleAuthStrategyPayload } from "./strategies/google";

class App {

    static email_auth( payload: EmailPasswordAuthStrategyPayload ){

        const strategy = new EmailPasswordAuthStrategy( payload );

        const auth_context = new AuthtenticationContext( strategy );

        return auth_context.authenticate();

    }

    static google_auth( payload: GoogleAuthStrategyPayload ){

        const strategy = new GoogleAuthStrategy( payload );

        const auth_context = new AuthtenticationContext( strategy );

        return auth_context.authenticate();

    }

    static github_auth( payload: GithubAuthStrategyPayload ){

        const strategy = new GithubAuthStrategy( payload );

        const auth_strategy = new AuthtenticationContext( strategy );

        return auth_strategy.authenticate();

    }
    
}