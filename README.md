# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template



## How to create custom certificates
```
- CA -> https://docs.aws.amazon.com/iot/latest/developerguide/create-your-CA-cert.html

openssl genrsa -out root_CA_key_3.key 2048 &
openssl req -x509 -new -nodes \
    -key root_CA_key_3.key \
    -sha256 -days 1024 \
    -out root_CA_cert_3.pem    


- Client X.509 with the CA -> https://docs.aws.amazon.com/iot/latest/developerguide/create-device-cert.html

openssl genrsa -out device_cert_key_3.key 2048 &
openssl req -new \
    -key device_cert_key_3.key \
    -out device_cert_csr_3.csr

(PASSWORD: AABBCC)

openssl x509 -req \
    -in device_cert_csr_3.csr \
    -CA root_CA_cert_3.pem \
    -CAkey root_CA_key_3.key \
    -CAcreateserial \
    -out device_cert_3.pem \
    -days 1 -sha256

At this point, the client certificate has been created,
but it has not yet been registered with AWS IoT.
For information about how and when to register the
client certificate, see Register a client certificate.
https://docs.aws.amazon.com/iot/latest/developerguide/register-device-cert.html

 You can register each client certificate manually,
 or you can configure the client certificates to
 register automatically when the client connects to
 AWS IoT for the first time.


Register a client certificate signed by an unregistered CA (CLI)
https://docs.aws.amazon.com/iot/latest/developerguide/manual-cert-registration.html


NOTE: Use xxx-sh-iot-services-dev (xxxx-xxxx-xxxx) Credentials

aws iot register-certificate-without-ca \
--status ACTIVE \
--certificate-pem file://device_cert_3.pem
```