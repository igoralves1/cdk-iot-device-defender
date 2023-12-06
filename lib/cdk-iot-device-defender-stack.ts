import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_iot as iot } from 'aws-cdk-lib';
import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot";

import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

const clientIoT = new IoTClient({ region: "us-west-2" });

export class CdkIotDeviceDefenderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const iot_device_defender_role = new Role(this, "DeviceDefenderAccountAuditRole", {
      roleName: props.presetParameters.iotDeviceDefenderRoleName,
      assumedBy: new ServicePrincipal('iot.amazonaws.com'),
      path: '/cert-management/',
      permissionsBoundary: permissionboundary
  });













    // const queue = new sqs.Queue(this, 'CdkIotDeviceDefenderQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(100)
    // });

    
    // const auditCheckConfigurationProperty: iot.CfnAccountAuditConfiguration.AuditCheckConfigurationProperty = {
    //   enabled: false,
    // };

    // const auditCheckConfigurationsProperty: iot.CfnAccountAuditConfiguration.AuditCheckConfigurationsProperty = {
    //   authenticatedCognitoRoleOverlyPermissiveCheck: {
    //     enabled: false,
    //   },
    //   caCertificateExpiringCheck: {
    //     enabled: false,
    //   },
    //   caCertificateKeyQualityCheck: {
    //     enabled: false,
    //   },
    //   conflictingClientIdsCheck: {
    //     enabled: false,
    //   },
    //   deviceCertificateExpiringCheck: {
    //     enabled: true,
    //   },
    //   deviceCertificateKeyQualityCheck: {
    //     enabled: false,
    //   },
    //   deviceCertificateSharedCheck: {
    //     enabled: false,
    //   },
    //   intermediateCaRevokedForActiveDeviceCertificatesCheck: {
    //     enabled: false,
    //   },
    //   iotPolicyOverlyPermissiveCheck: {
    //     enabled: false,
    //   },
    //   ioTPolicyPotentialMisConfigurationCheck: {
    //     enabled: false,
    //   },
    //   iotRoleAliasAllowsAccessToUnusedServicesCheck: {
    //     enabled: false,
    //   },
    //   iotRoleAliasOverlyPermissiveCheck: {
    //     enabled: false,
    //   },
    //   loggingDisabledCheck: {
    //     enabled: false,
    //   },
    //   revokedCaCertificateStillActiveCheck: {
    //     enabled: false,
    //   },
    //   revokedDeviceCertificateStillActiveCheck: {
    //     enabled: false,
    //   },
    //   unauthenticatedCognitoRoleOverlyPermissiveCheck: {
    //     enabled: false,
    //   },
    // };


  }
}
