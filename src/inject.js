import { InjectedEOS } from './eos/InjectedEOS'
import {RandomKeyGen} from './crypto/RandomKeyGen';

let eos = new InjectedEOS(RandomKeyGen.generate(12));
window.scatter = eos;

