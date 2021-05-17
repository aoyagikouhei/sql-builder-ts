class SqlBuilder {
    tables: Table[];

    constructor() {
        this.tables = []
    }
}

interface Table {
    name: string,
}

class Users {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    join(company: Company) {
        
    }
}



interface Company {
    uuid: string,
    name: string,
}

let msg = "テスト"
let user = new Users(10, msg)
console.log(user)

