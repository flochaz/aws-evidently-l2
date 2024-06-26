#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as evidently from '../src';

class FeatureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const project = new evidently.Project(this, 'MyProject', {
      projectName: 'myProject',
    });

    const feature = new evidently.Feature(this, 'NewFeature', {
      project: project,
      featureName: 'newFeature',
      description: 'This is a new feature',
      variations: [
        new evidently.Variation({
          variationName: 'defaultVariation',
          valueType: evidently.VariationValueType.STRING,
          value: 'foobar',
        }),
      ],
    });

    new cdk.CfnOutput(this, 'Project', { value: project.projectName });
    new cdk.CfnOutput(this, 'Feature', { value: feature.featureName });
  }
}

const app = new cdk.App();
new FeatureStack(app, 'aws-evidently-feature');
app.synth();