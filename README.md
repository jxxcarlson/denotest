The are two Typescript files here, `test.ts` and `test2.ts`.


Both must be run with [Deno](https://deno.land/), written by Ryan Dahl, the creator of Node.
I highly recommend it.  Also: the script runner [Velociraptor](https://dev.to/umbo/velociraptor-an-npm-style-script-runner-for-deno-26a).

To install Deno, do this (Linux or Mac):"

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

or this for Windows:

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

To run the first example:

```
$ deno run --allow-read --allow-write --allow-env --allow-net test.ts
```

The results logged to the console show that the code in `test.ts` succeeds.
However, `test2.ts` fails on

```
manifest = newManifest
console.log("MODIFIED MANIFIEST (4)", manifest)
```

It seems that an imported as opposed to norma `var` have
different properties.  I don't know if there is a solution to this,
other than rewriting the code so that all mutations take place
in the "home" file, in this case `test.ts`
