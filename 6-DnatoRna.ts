export function DNAtoRNA(dna: string): string {
  let rna = dna.replace("T", "U");
  return rna; // your code here =)
}

console.log(DNAtoRNA("GCAT"));
