# no-unused-vars-bug
This demonstrates an issue with eslint not highlighting all unused imports in some cases.

Steps to reproduce:
1. Check out the repository.
2. Open it in VS Code
3. Run `yarn install`.
4. Open src/test.ts.
5. Wait for eslint to scan the file.

Expected results: All imports should be highlighted as errors because they are unused.

Actual results: Only some are highlighted. The rest are ignored.
