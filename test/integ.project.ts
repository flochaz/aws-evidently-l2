#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import * as evidently from '../src';

const app = new cdk.App();

const stack = new cdk.Stack(app, 'aws-evidently');

new evidently.Project(stack, 'MyProject', {
  projectName: 'myProject',
});

app.synth();
