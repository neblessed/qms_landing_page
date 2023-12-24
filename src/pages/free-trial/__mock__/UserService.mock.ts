import { ITryitForm } from "../TryIt.interface";

export class UserMockService {
    private storage: Array<ITryitForm> = [];

    public add(data: ITryitForm) {
        this.storage.push(data);
    }

    public flushAll() {
        this.storage.map(x => x == null)
    }

    public checkCurrent(data: ITryitForm): boolean {
        return this.storage.filter(x => x === data).length > 0
    }
}