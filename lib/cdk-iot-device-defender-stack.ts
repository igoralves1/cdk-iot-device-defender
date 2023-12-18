import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_iot as iot } from 'aws-cdk-lib';

import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

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


    //CReate a Lambda to recieve the event from the SNS
 const certManagementCertCreateLambdaFunction ="the lambda"
 console.log(event)

    //CReate a SNS to receive event from Device Defender and send to the previous lambda...
    const expiredDeviceCertificateSNTopic = new sns.Topic(this, "SNS_DD_Expired_Cert", {
      displayName: 'Device Defender Expired Certificate SNS',
      fifo: false
    });
    expiredDeviceCertificateSNTopic.addSubscription(new subscriptions.LambdaSubscription(certManagementCertCreateLambdaFunction))


    //Create arole and use AWSIoTDeviceDefenderAudit "sns:publish"

    //IoT -Device Defender
    const cfnAccountAuditConfiguration = new iot.CfnAccountAuditConfiguration(this, 'MyCfnAccountAuditConfiguration', {
      accountId: account, <====
      auditCheckConfigurations: {
          deviceCertificateExpiringCheck: {
              enabled: true,
          }
      },
      roleArn: "use this policy AWSIoTDeviceDefenderAudit",
    
      auditNotificationTargetConfigurations: {
          sns: {
              enabled: true,
              roleArn: iot_topic_rule_role.roleArn,<====
              targetArn: expiredDeviceCertificateSNTopic.topicArn
          },
      },
    });

    const cfnScheduledAudit = new iot.CfnScheduledAudit(this, 'MyCfnScheduledAudit', {
        frequency: 'DAILY',
        targetCheckNames: ['DEVICE_CERTIFICATE_EXPIRING_CHECK'],
        scheduledAuditName: 'DEVICE_CERTIFICATE_EXPIRING_CHECK'
    });  
    cfnScheduledAudit.addDependency(cfnAccountAuditConfiguration)





    //Create Mitigations/Actions that will send Device Defender results to the SNS


    https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_iot.CfnMitigationAction.html

    igoralves1@gmail.com

    // Create a expired OR close to expire certificate see README.md



  }
}


