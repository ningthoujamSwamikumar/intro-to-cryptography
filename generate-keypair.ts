import dotenv from "dotenv";
import { Keypair } from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

dotenv.config();

// const keypair = Keypair.generate();
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);


