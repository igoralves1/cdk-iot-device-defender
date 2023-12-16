import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_iot as iot } from 'aws-cdk-lib';
import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot";

import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

import {
  CfnPolicy,
  Role,
  ServicePrincipal,
  PolicyStatement,
  Policy, 
  ManagedPolicy} from 'aws-cdk-lib/aws-iam';


const clientIoT = new IoTClient({ region: "us-west-2" });

export class CdkIotDeviceDefenderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const auditCheckConfigurationProperty: iot.CfnAccountAuditConfiguration.AuditCheckConfigurationProperty = {
      enabled: true,
    };

  //   const iotDeviceDefenderPolicy = new PolicyStatement({
  //     actions: [
  //         "iot:GetLoggingOptions",
  //         "iot:GetV2LoggingOptions",
  //         "iot:ListCACertificates",
  //         "iot:ListCertificates",
  //         "iot:DescribeCACertificate",
  //         "iot:DescribeCertificate",
  //         "iot:ListPolicies",
  //         "iot:GetPolicy",
  //         "iot:GetEffectivePolicies",
  //         "iot:ListRoleAliases",
  //         "iot:DescribeRoleAlias",
  //         "cognito-identity:GetIdentityPoolRoles",
  //         "iam:ListRolePolicies",
  //         "iam:ListAttachedRolePolicies",
  //         "iam:GetRole",
  //         "iam:GetPolicy",
  //         "iam:GetPolicyVersion",
  //         "iam:GetRolePolicy",
  //         "iam:GenerateServiceLastAccessedDetails",
  //         "iam:GetServiceLastAccessedDetails"
  //     ],
  //     resources: [
  //         `*`
  //     ]
  // });


  //   const iot_device_defender_role = new Role(this, "DeviceDefenderAccountAuditRole", {
  //     roleName: "DeviceDefenderAccountAuditRole",
  //     assumedBy: new ServicePrincipal('iot.amazonaws.com')
  //   });    
  //   iot_device_defender_role.addManagedPolicy(ManagedPolicy.fromManagedPolicyName(this, "AWSIoTDeviceDefenderAuditPolicy",'AWSIoTDeviceDefenderAudit'));
   
  //   const expiredDeviceCertificateSNSTopic = new sns.Topic(this, "expiredDeviceCertificateSNSTopic", {
  //     displayName: 'expiredDeviceCertificateSNSTopic',
  //     fifo: false,
  //     topicName: 'expiredDeviceCertificateSNSTopic'
  //   })

  //   const iotAllowSnsRole = new Role(this, "iotAllowSnsRole", {
  //     assumedBy: new ServicePrincipal('iot.amazonaws.com'),
  //     path: "/"
  //   })

  //   const policyAttachment = new Policy(this, "policyAttachment", {
  //     statements: [
  //       new PolicyStatement({
  //         actions:["sns:Publish"],
  //         resources:[expiredDeviceCertificateSNSTopic.topicArn]
  //       })
  //     ]
  //   })
    
  //   iotAllowSnsRole.attachInlinePolicy(policyAttachment)

    

  //   const cfnAuditCheckConfigurationsProperty = new iot.CfnAccountAuditConfiguration(this, "cfnAuditCheckConfigurationsProperty", {
  //     accountId: '996242555412',
  //     auditCheckConfigurations: {
  //       authenticatedCognitoRoleOverlyPermissiveCheck: {
  //         enabled: false,
  //       },
  //       caCertificateExpiringCheck: {
  //         enabled: false,
  //       },
  //       caCertificateKeyQualityCheck: {
  //         enabled: false,
  //       },
  //       conflictingClientIdsCheck: {
  //         enabled: false,
  //       },
  //       deviceCertificateExpiringCheck: {
  //         enabled: true,
  //       },
  //       deviceCertificateKeyQualityCheck: {
  //         enabled: false,
  //       },
  //       deviceCertificateSharedCheck: {
  //         enabled: false,
  //       },
  //       intermediateCaRevokedForActiveDeviceCertificatesCheck: {
  //         enabled: false,
  //       },
  //       iotPolicyOverlyPermissiveCheck: {
  //         enabled: false,
  //       },
  //       ioTPolicyPotentialMisConfigurationCheck: {
  //         enabled: false,
  //       },
  //       iotRoleAliasAllowsAccessToUnusedServicesCheck: {
  //         enabled: false,
  //       },
  //       iotRoleAliasOverlyPermissiveCheck: {
  //         enabled: false,
  //       },
  //       loggingDisabledCheck: {
  //         enabled: false,
  //       },
  //       revokedCaCertificateStillActiveCheck: {
  //         enabled: false,
  //       },
  //       revokedDeviceCertificateStillActiveCheck: {
  //         enabled: false,
  //       },
  //       unauthenticatedCognitoRoleOverlyPermissiveCheck: {
  //         enabled: false,
  //       },
  //     },
  //     roleArn: iot_device_defender_role.roleArn,
  //     auditNotificationTargetConfigurations: {
  //       sns: {
  //         enabled: true,
  //         roleArn: iotAllowSnsRole.roleArn,
  //         targetArn: expiredDeviceCertificateSNSTopic.topicArn,
  //       },
  //     },
  //   });
    
  //   const cfnScheduledAudit = new iot.CfnScheduledAudit(this, "cfnScheduledAudit", {
  //     frequency: 'DAILY',
  //     targetCheckNames: ['DEVICE_CERTIFICATE_EXPIRING_CHECK'],
  //   });
    
  //   cfnScheduledAudit.addDependency(cfnAuditCheckConfigurationsProperty)

  }
}


