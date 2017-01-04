'use strict';

module.exports = class {
    static get MESSAGE() {
        return 'message';
    }

    static get FOLLOW() {
        return 'follow';
    }

    static get UNFOLLOW() {
        return 'unfollow';
    }

    static get JOIN() {
        return 'join';
    }

    static get LEAVE() {
        return 'leave';
    }

    static get POSTBACK() {
        return 'postback';
    }

    static get BEACON() {
        return 'beacon';
    }
};
