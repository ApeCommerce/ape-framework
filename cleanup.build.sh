#!/bin/bash
find . \( -name "*.d.ts" -o -name "*.js" \) ! -path "./node_modules/*" -exec rm {} \;
