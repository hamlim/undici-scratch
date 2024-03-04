// :3000 -> target
// :42069 -> proxy

import { setGlobalDispatcher, ProxyAgent,  } from 'undici'

const proxyAgent = new ProxyAgent('http://127.0.0.1:42069/');
// setGlobalDispatcher(proxyAgent)

global[Symbol.for('undici.globalDispatcher.1')] = proxyAgent

let res = await fetch('http://127.0.0.1:3000/');

let data = await res.text();

console.log(`Response: ${data}`);
