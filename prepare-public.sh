#!/bin/sh
set -eu
rm -rf public
mkdir -p public
for file in index.html admin.html customer-dashboard.html login.html privacy.html refund.html terms.html logo.jpg; do
  test -f "$file" || { echo "Missing required website file: $file" >&2; exit 1; }
  cp "$file" public/
done
printf '%s\n' 'Prepared approved public website files.'
