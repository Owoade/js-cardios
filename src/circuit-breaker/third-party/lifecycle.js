export default function lifecycle(kill, revive, kill_action, revive_action){

    if( !kill || !revive ) return console.log("Lifecyle exited due to falsy value");

    setTimeout(()=>{

        kill_action();

        setInterval(()=>{

            revive_action();

            lifecycle();

        }, revive )

    }, kill )

}