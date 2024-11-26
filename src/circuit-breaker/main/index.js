import axios from "axios";

class CircuitBreakerProtectedService {
    #failed;
    #succeeded;
    #total_attempts;
    #IS_AVAILABLE;
    #SERVICE_URL;
    #SERVICE_HEALTH_URL;
    #THRESHOLD;
    #status;
    #counter_id;
    constructor(){
        this.#failed = 0;
        this.#IS_AVAILABLE = true;
        this.#SERVICE_URL="http://localhost:5000";
        this.#SERVICE_HEALTH_URL="http://localhost:5000/health"
        this.#THRESHOLD = Infinity;
        this.#status = "closed";

        this.initiate_counter();
    }

    async exec(){

        let response;

        switch( this.#status ){

            case "open": 
                response = this.handle_open();
            break;

            case "closed": 
                response = this.handle_closed();
            break;

            case "half-open":
                response = this.handle_half_open();
            break;

        }

        return response;
        
    }

    async call_external_service(){

        const response = await axios.get(this.#SERVICE_URL);

        return response.data;

    }

    async handle_closed(){

        try {
             
            const data = await this.call_external_service();

            return {
                service_available: true,
                data
            };
            
        }

        catch(e){

            if( ++this.#failed === 10 ){

                this.#status = "open";

                this.#IS_AVAILABLE = false;

                setTimeout(()=>{

                    this.#status = "half-open";

                    this.check_external_service_health()

                    clearInterval(this.#counter_id)

                    this.#failed = 0;

                    this.#total_attempts = 0;

                    this.#succeeded = 0;

                    this.#THRESHOLD = 10;

                }, 60000)
            }

            return {
                service_available: false
            }
        }
    }

    handle_open(){
        return {
            service_available: false
        }
    }

    async handle_half_open(){

        if( ++this.#total_attempts > this.#THRESHOLD ) {

            return {
                service_available: false
            }

        }

        try {

            const data = await this.call_external_service();

            if( ++this.#succeeded === this.#THRESHOLD ){

                this.#succeeded = 0;

                this.#failed = 0;

                this.#status = "closed";

                this.initiate_counter()
            }

            return data;

        }

        catch(e){

            this.#status = "open";

            setTimeout(()=>{

                this.#status = "half-open";

                this.check_external_service_health()

                clearInterval(this.#counter_id)

                this.#failed = 0;

                this.#total_attempts = 0;

                this.#succeeded = 0;

                this.#THRESHOLD = 10;

            }, 60000)
        }
            
    }

    initiate_counter(){
        
        this.#counter_id = setInterval( ()=> this.#counter_id = 0, 60000 );

    }

    async check_external_service_health(){
        
        try {

            await axios.get(this.#SERVICE_HEALTH_URL);

            this.#status = "closed";

        }

        catch(e){

            setTimeout( this.check_external_service_health, 2000 );

        }
    }

    
}