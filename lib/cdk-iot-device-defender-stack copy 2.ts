import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

import { IoTClient, UpdateAccountAuditConfigurationCommand } from "@aws-sdk/client-iot";

import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

export class CdkIotDeviceDefenderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // SNS to receive the device defender results
    const expiredDeviceCertificateSNTopic = new sns.Topic(this, "SNSDeviceDefender", {
      displayName: 'Device Defender Expired Certificate SNS',
      fifo: false
    });

    const clientIoT = new IoTClient({ region: "us-west-2" });
    
    const auditCheckConfigParams: any = {
        roleArn: "arn:aws:iam::996242555412:role/Role_AWSIoTDeviceDefenderAudit", //Role manually created - AWSIoTDeviceDefenderAudit policy
        auditNotificationTargetConfigurations: {
            "SNS": {
                "targetArn": expiredDeviceCertificateSNTopic.topicArn,
                "roleArn": "arn:aws:iam::996242555412:role/Role_AWSIoTDeviceDefenderAudit",
                "enabled": true
            }
        },
        auditCheckConfigurations: {
            "DEVICE_CERTIFICATE_EXPIRING_CHECK": {
              enabled: true,
            }
        }
    };
    (async () => {
        try {
            const iotUpdateCmd = new UpdateAccountAuditConfigurationCommand(auditCheckConfigParams);
            const iotUpdateResponse = await clientIoT.send(iotUpdateCmd);
        } catch { }
    })();

  }
}
