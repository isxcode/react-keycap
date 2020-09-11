#/bin/bash

rm -rf es
rm -rf lib
npm run tsc:es && npm run babel:cjs && npm run cpx