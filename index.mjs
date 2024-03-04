// :3000 -> target
// :42069 -> proxy

import { setGlobalDispatcher, ProxyAgent, request as fetch } from 'undici'

const proxyAgent = new ProxyAgent('http://127.0.0.1:42069/');
setGlobalDispatcher(proxyAgent)

let res = await fetch('http://127.0.0.1:3000/');

let data = await res.text();

console.log(`Response: ${data}`);
