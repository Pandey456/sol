import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const supplied_key=process.argv[2]
if (!supplied_key){
    throw new Error("Enter a public address ! ");
    
}


const publicKey =new PublicKey(supplied_key);
const connection = new Connection("https://api.mainnet.solana.com", "confirmed");
const bal=connection.getBalance(publicKey);
const sol_bal= await bal/LAMPORTS_PER_SOL;
console.log(`balance in sol is ${sol_bal}`);
