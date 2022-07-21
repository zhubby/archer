import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolCrowdfundingPlat } from "../target/types/sol_crowdfunding_plat";

describe("sol-crowdfunding-plat", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolCrowdfundingPlat as Program<SolCrowdfundingPlat>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
