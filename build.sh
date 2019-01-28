#!/bin/bash
bucket=${1%/};

echo 'Building react app'
npm run build

echo "Checking that aws-cli is installed"
which aws
if [ $? -eq 0 ]; then
  echo "aws-cli is installed, continuing..."
else
  echo "You need aws-cli to deploy this to s3. Google 'aws-cli install'"
  exit 1
fi

aws s3 cp ./build s3://$bucket/ --recursive

if [ $? -eq 0 ]; then
  echo "!! Upload successful !!"
else
  echo "Upload failed"
  exit 1;
fi
