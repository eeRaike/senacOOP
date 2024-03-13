"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
var UserClass = /** @class */ (function () {
    function UserClass(userId, userName, userComms) {
        this.userHistory = [];
        this.userFee = 0;
        this.userId = userId;
        this.userName = userName,
            this.userComms = userComms;
    }
    return UserClass;
}());
exports.UserClass = UserClass;
