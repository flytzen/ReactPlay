import Client from "./entities/Client";

export class RootState {
    entities : Entities;
}

export class Entities {
    clients : EntitySet<Client>
}

export class EntitySet<T> {
    isFetching : boolean;
    items : T[];
}