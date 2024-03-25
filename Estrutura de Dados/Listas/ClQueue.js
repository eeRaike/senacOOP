"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    };
    Queue.prototype.getSize = function () {
        return this.items.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Queue;
}());
exports.Queue = Queue;
