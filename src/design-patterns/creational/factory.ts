export class MobileApp {
    features: string[] = [];
    design: string = "App design"
    communication_protocol: string[] = []
    install(){
        console.log("installing mobile app")
    }
    uninstall(){
        console.log("uninsalling mobile app")
    }
}

export class Website {
    features: any = [];
    design: string = 'website design';
    communication_protocol: string[] = []
    host(){
        console.log("hosting a website")
    }
}

export interface ITCompany {
    create_mobile_app(): MobileApp
    create_website(): Website
}

export class ITCompany {

    create_mobile_app(){
        return new MobileApp()
    }

    create_website(){
        return new Website()
    }

}

const it_company = new ITCompany();

const mobile_app = it_company.create_mobile_app();

const website = it_company.create_website();