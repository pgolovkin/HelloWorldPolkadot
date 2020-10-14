const { ApiPromise, WsProvider } = require('@polkadot/api');
async function main () {
    const api = await ApiPromise.create();
    const lastHeader = await api.rpc.chain.getHeader();
    console.log(`last block #${lastHeader.number}`);
}
main().catch(console.error).finally(() => process.exit());