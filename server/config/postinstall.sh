#! /bin/sh

wget --no-check-certificate https://dl.cacerts.digicert.com/DigiCertGlobalRootCA.crt.pem
psql --host=$(SQL_HOST) --port=5432 --username=$(SQL_USER) --dbname=$(SQL_DATABASE) --set=sslmode=require --set=sslrootcert=DigiCertGlobalRootCA.crt.pem

