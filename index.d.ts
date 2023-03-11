type Callback<T = undefined> = (args: T) => void;
export declare class Emmiter {
    on<T = undefined>(callback: Callback<T>): string;
    off(uuid: string): void;
    emmit<T = {}>(args?: T): void;
}
export declare class Emmiters {
    on<T = undefined>(event: string, callback: Callback<T>): void;
    off(event: string, uuid: string): void;
    emmit<T = undefined>(event: string, args?: T): void;
}