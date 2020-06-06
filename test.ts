import { load, safeDump } from 'https://deno.land/x/js_yaml_port/js-yaml.js'


// TYPES


export interface DocumentRecord {
  id: string;
  fileName: string;
}

// DATA

const MANIFEST = "./miniMani.yaml"

var maniZero = [
  { id: "143d1170-f8ce-47b3-904d-e84191d3d717", fileName: "quantum.md" },
  { id: "7a7e54a9-70d9-4263-ba02-cb685e1fdaf8", fileName: "test.tex" },
  { id: "72131ec8-6df5-4797-9069-a2c10f9bb3a6", fileName: "xxx.md" }
]


// READ AND WRITE THE MANIFEST

const fetchManifest = async (): Promise<DocumentRecord[]> => {
  const data = await Deno.readFile(MANIFEST);

  const decoder = new TextDecoder();
  const decodedData = decoder.decode(data);

  return load(decodedData);
};

export const writeManifest = async (data: Array<DocumentRecord>): Promise<void> => {
  const encoder = new TextEncoder();
  await Deno.writeFile(MANIFEST, encoder.encode(safeDump(data)));
};

export var manifest = await fetchManifest();

// TESTS

console.log("MANIFEST", manifest)

export const changeDoc = (s: DocumentRecord, t : DocumentRecord) =>
  s.id == t.id ?  Object.assign({}, s) : t

// TEST CHANGEDOC

const original = {id: "72131ec8-6df5-4797-9069-a2c10f9bb3a6", fileName: "xxx.md"}
const another = {id: "777", fileName: "hahah.md"}
export const changed = {id: "72131ec8-6df5-4797-9069-a2c10f9bb3a6", fileName: "yyy.md"}
console.log("REC", changeDoc(changed, original))
console.log("REC2", changeDoc(changed, another))

// TEST MODIFYING THE MANIFEST

const newManifest = manifest.map((d:DocumentRecord) => changeDoc(changed, d))
console.log("MODIFIED MANIFIEST (1)", newManifest)

// TEST ASSIGNMET (succeeds)

manifest = newManifest
console.log("MODIFIED MANIFIEST (2)", manifest)
