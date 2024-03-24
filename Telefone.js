class Telefone {
    constructor(ddd, number) {
        this.ddd = ddd;
        this.number = number;
    }

    get ddd() {
        return this._ddd;
    }

    set ddd(ddd) {
        this._ddd = ddd;
    }

    get number() {
        return this._number;
    }

    set number(number) {
        this._number = number;
    }
}
module.exports = Telefone;