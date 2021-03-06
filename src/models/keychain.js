import {Wallet} from "../models/wallet";
import {WaterfallEncryption} from '../cryptography/WaterfallEncryption'
import {AES} from '../cryptography/AES';

export class Keychain {

	constructor(){
        this.wallets = null;
	}

	static placeholder() {
		let p = new Keychain();
		p.wallets = [];
		return p;
	}

	static fromJson(jsonOrEncryptedString) {
		if(typeof jsonOrEncryptedString === 'object') {
            let p = Object.assign(this.placeholder(), jsonOrEncryptedString);
            p.wallets = jsonOrEncryptedString.wallets.map(x => Wallet.fromJson(x));
            return p;
        } else return jsonOrEncryptedString;
	}
}