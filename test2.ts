import {DocumentRecord, manifest, changeDoc, changed} from './test.ts'

// TEST MODIFYING THE MANIFEST

const newManifest = manifest.map((d:DocumentRecord) => changeDoc(changed, d))
console.log("MODIFIED MANIFIEST (3)", newManifest)

// TEST ASSIGNNMET
//
// Uncomment the below to test (fails)
//
// manifest = newManifest
// console.log("MODIFIED MANIFIEST (4)", manifest)
