import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { aws_iot as iot } from 'aws-cdk-lib';

export class CdkIotDeviceDefenderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const auditCheckConfigurationProperty: iot.CfnAccountAuditConfiguration.AuditCheckConfigurationProperty = {
      enabled: true,
    };

    //https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_iot.CfnAccountAuditConfiguration.AuditCheckConfigurationsProperty.html
    const auditCheckConfigurationsProperty: iot.CfnAccountAuditConfiguration.AuditCheckConfigurationsProperty = {
        deviceCertificateExpiringCheck: {
            enabled: true,
        }
    };

  }
}
