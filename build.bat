cd swagger_petstore

CALL npm install
CALL npm run build
CALL npm link

cd ..

cd use-petstore

CALL npm install
CALL npm link ..\swagger_petstore
