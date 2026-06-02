#!/bin/bash

# Build TypeScript source
echo "Install dependencies..."
npm install || exit 1

echo "Starting backend server..."
npm run dev
