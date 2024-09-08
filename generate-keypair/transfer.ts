import { Connection,Transaction,sendAndConfirmTransaction,SystemProgram,PublicKey,Keypair } from "@solana/web3.js";
import { error } from "console";
require("dotenv").config();
const receivers_publickey=process.argv[2];
if(!receivers_publickey){
  throw new error("Please input receivers public key ");
}
const senderKeypair=Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.SECRET_KEY)));

const connection=new Connection("https://api.devnet.solana.com","confirmed");
const rec_pub_key=new PublicKey(receivers_publickey);

const transaction=new Transaction();
const lamports=5000;
const sendsolinstruction=SystemProgram.transfer({fromPubkey:senderKeypair.publicKey,toPubkey:rec_pub_key,lamports:lamports});
transaction.add(sendsolinstruction);
const signature=await sendAndConfirmTransaction(connection,transaction,[senderKeypair]);
console.log(`✅ Successfully send ${lamports} to reciever ${rec_pub_key}`);
console.log(`the signature of the transaction is ${signature}`);





