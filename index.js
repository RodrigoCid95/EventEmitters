const CALLBACKS = Symbol('calllbacks');
export class Emmiter {
  constructor() {
    this[CALLBACKS] = {};
  }
  on(callback) {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0;
      const v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    this[CALLBACKS][uuid] = callback;
    return uuid;
  }
  off(uuid) {
    delete this[CALLBACKS][uuid];
  }
  emmit(args) {
    const callbacks = Object.values(this[CALLBACKS]);
    for (const callback of callbacks) {
      callback(args);
    }
  }
}
const EMMITERS = Symbol('emitters');
export class Emmiters {
  constructor() {
    this[EMMITERS] = new Map();
  }
  on(event, callback) {
    var _a;
    if (!this[EMMITERS].has(event)) {
      this[EMMITERS].set(event, new Emmiter());
    }
    (_a = this[EMMITERS].get(event)) === null || _a === void 0 ? void 0 : _a.on(callback);
  }
  off(event, uuid) {
    var _a;
    if (this[EMMITERS].has(event)) {
      (_a = this[EMMITERS].get(event)) === null || _a === void 0 ? void 0 : _a.off(uuid);
    }
  }
  emmit(event, args) {
    var _a;
    if (this[EMMITERS].has(event)) {
      (_a = this[EMMITERS].get(event)) === null || _a === void 0 ? void 0 : _a.emmit(args);
    }
  }
}