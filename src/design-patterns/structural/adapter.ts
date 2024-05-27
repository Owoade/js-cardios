interface IThreePointSocket {
    charge(): void
}

interface ITwoPointPlug {
    is_charging: boolean
}

interface IThreePointPlug {
    is_charging: boolean
}

class TwoPointPlug implements ITwoPointPlug{

    is_charging: boolean;

    constructor(){

        this.is_charging = false;

    }

}

class ThreePointPlug implements IThreePointPlug {

    is_charging: boolean;

    constructor( ){

        this.is_charging = false;

    }

}

class ThreePointSocket implements IThreePointSocket {

    public plug: ThreePointPlug;

    constructor( plug: ThreePointPlug ){

        this.plug = plug;

    }

    charge(){

        this.plug.is_charging = true;

    }

}

class TwoPointPlugAdapter implements IThreePointSocket {

    plug: ITwoPointPlug

    constructor( plug: ITwoPointPlug ){
        this.plug = plug
    }

    charge(){
        this.plug.is_charging = true;
    }

}

const three_point_plug = new ThreePointPlug();

const three_point_socket = new ThreePointSocket( three_point_plug );

three_point_socket.charge();

console.log(three_point_plug.is_charging) // true;

const two_point_plug = new TwoPointPlug();

console.log( two_point_plug.is_charging ) // false;

const two_point_adapter = new TwoPointPlugAdapter( two_point_plug );

two_point_adapter.charge();

console.log(two_point_plug.is_charging) // true;

