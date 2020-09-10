#/bin/bash

rm -rf es
npm run tsc:es && npm run cpx:es

rm -rf lib
npm run babel:cjs && npm run cpx:cjs
