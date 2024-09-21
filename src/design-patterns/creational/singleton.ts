 class DatabaseConnection { 

    private static instance: DatabaseConnection | null = null;

    private constructor(){}

    static get get_instance(){

        if( DatabaseConnection.instance ) return DatabaseConnection.instance;

        return DatabaseConnection.instance = new DatabaseConnection();

    }

}

const connection = DatabaseConnection.get_instance;

const connection2 = DatabaseConnection.get_instance;

console.log( connection === connection2 )

