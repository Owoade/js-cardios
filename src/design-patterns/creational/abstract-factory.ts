import { ITCompany, MobileApp, Website } from "./factory";

class FintechWebsite extends Website {

    private hashing_algorithms: string[] = ['sha', 'md5']

    constructor(){
        super()
        this.design = "Fintech web design";
        this.features = ['wallet', 'transactions', 'banking'];
        this.communication_protocol = ['REST']
    }
    
    host(): void {
        console.log("hosting fintech website")
    }

}

class FintechMobileApp extends MobileApp {

    communication_protocol: string[] = ['graph-ql', 'rest']

    features: string[] = ['compliance', 'authentication', 'wallet', 'transfer', 'banking', 'bill-payment']
    
    install(): void {
        console.log("installing fintech mobile app")
    }
    uninstall(): void {
        console.log("uninstalling fintech mobile app")
    }
}



class FintechITCompany extends ITCompany {

    private compliance_policies: string[] = ['finance security policy', 'data security policy']

    private security_standards: string[] = ['ISO', 'NIST']

    create_mobile_app(): MobileApp {
        return new FintechMobileApp()
    }

    create_website(): Website {
        return new FintechWebsite
    }

}

const fintech_it_company = new FintechITCompany();

const fintech_website = fintech_it_company.create_website();

const fintech_mobile_app = fintech_it_company.create_mobile_app();