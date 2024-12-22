import dotenv from "dotenv";
dotenv.config();

import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keyPair = getKeypairFromEnvironment("SECRET_KEY");
// const publicKey = keyPair.publicKey;

const addressFromMainnet = "BNFeevU8uB8xtMSVXMDddzLQvPdKoV82S8dSWVv1KQre";

const publicKey = new PublicKey(addressFromMainnet); //other address, not mine

if(!publicKey) {
    console.log("❌ No public key provided. Please provide a public key in the PUBLIC_KEY environment variable");
}

if(!PublicKey.isOnCurve(publicKey)){
    console.log("❌ The provided public key is not on the curve");
}

// const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const connection = new Connection(clusterApiUrl("mainnet-beta"));

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`💰 Finished! The balance fo the wallet at address ${publicKey} is ${balanceInSOL} SOL`);

