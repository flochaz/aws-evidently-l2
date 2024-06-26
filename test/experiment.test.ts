import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Experiment, Feature, MetricGoal, MetricGoalDesiredChange, OnlineAbConfig, Project, Treatment, TreatmentToWeight, Variation, VariationValueType } from '../src';

describe('AWS Evidently Experiment', () => {
  test('creating a new experiment', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'myExperiment',
      project: project,
      metricGoals: [],
      onlineAbConfig: new OnlineAbConfig({}),
      treatments: [],
    });

    const template = Template.fromStack(stack);
    template.resourceCountIs('AWS::Evidently::Experiment', 1);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      Name: 'myExperiment',
    });
  });

  test('experiment from attributes', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    const experiment = Experiment.fromExperimentAttributes(stack, 'MyExperiment', {
      experimentArn: 'arn:aws:evidently:region:account-id:project/my-project/experiment/my-experiment',
      experimentName: 'myExperiment',
      project: project,
      metricGoals: [],
      onlineAbConfig: new OnlineAbConfig({}),
      treatments: [],
    });

    expect(experiment.experimentArn).toEqual('arn:aws:evidently:region:account-id:project/my-project/experiment/my-experiment');
    // const template = Template.fromStack(stack);
    // template.resourceCountIs('AWS::Evidently::Experiment', 1);
  });
});

describe('MetricGoals for an Experiment', () => {
  test('Experiment with one MetricGoal', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'experimentWithMetricGoal',
      project: project,
      metricGoals: [
        new MetricGoal({
          desiredChange: MetricGoalDesiredChange.INCREASE,
          entityIdKey: 'user',
          eventPattern: 'user-metric',
          metricName: 'userMetric',
          valueKey: 'foo',
        }),
      ],
      onlineAbConfig: new OnlineAbConfig({}),
      treatments: [],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      MetricGoals: [
        {
          DesiredChange: MetricGoalDesiredChange.INCREASE,
          EntityIdKey: 'user',
          EventPattern: 'user-metric',
          MetricName: 'userMetric',
          ValueKey: 'foo',
        },
      ],
    });
  });

  test('Experiment with maximum number of MetricGoals', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'experimentWithMetricGoal',
      project: project,
      metricGoals: [
        new MetricGoal({
          desiredChange: MetricGoalDesiredChange.INCREASE,
          entityIdKey: 'user',
          eventPattern: 'user-metric',
          metricName: 'userMetric',
          valueKey: 'foo',
        }),
        new MetricGoal({
          desiredChange: MetricGoalDesiredChange.DECREASE,
          entityIdKey: 'latency',
          eventPattern: 'latency-metric',
          metricName: 'latencyMetric',
          valueKey: 'bar',
        }),
        new MetricGoal({
          desiredChange: MetricGoalDesiredChange.INCREASE,
          entityIdKey: 'product',
          eventPattern: 'revenue-metric',
          metricName: 'revenueMetric',
          valueKey: 'baz',
        }),
      ],
      onlineAbConfig: new OnlineAbConfig({}),
      treatments: [],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      MetricGoals: [
        {
          DesiredChange: MetricGoalDesiredChange.INCREASE,
          EntityIdKey: 'user',
          EventPattern: 'user-metric',
          MetricName: 'userMetric',
          ValueKey: 'foo',
        },
        {
          DesiredChange: MetricGoalDesiredChange.DECREASE,
          EntityIdKey: 'latency',
          EventPattern: 'latency-metric',
          MetricName: 'latencyMetric',
          ValueKey: 'bar',
        },
        {
          DesiredChange: MetricGoalDesiredChange.INCREASE,
          EntityIdKey: 'product',
          EventPattern: 'revenue-metric',
          MetricName: 'revenueMetric',
          ValueKey: 'baz',
        },
      ],
    });
  });

  test('Experiment with illegal number of MetricGoals', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    expect(() => {
      new Experiment(stack, 'NewExperiment', {
        experimentName: 'experimentWithMetricGoal',
        project: project,
        metricGoals: [
          new MetricGoal({
            desiredChange: MetricGoalDesiredChange.INCREASE,
            entityIdKey: 'user',
            eventPattern: 'user-metric',
            metricName: 'userMetric',
            valueKey: 'foo',
          }),
          new MetricGoal({
            desiredChange: MetricGoalDesiredChange.DECREASE,
            entityIdKey: 'latency',
            eventPattern: 'latency-metric',
            metricName: 'latencyMetric',
            valueKey: 'bar',
          }),
          new MetricGoal({
            desiredChange: MetricGoalDesiredChange.INCREASE,
            entityIdKey: 'product',
            eventPattern: 'revenue-metric',
            metricName: 'revenueMetric',
            valueKey: 'baz',
          }),
          new MetricGoal({
            desiredChange: MetricGoalDesiredChange.INCREASE,
            entityIdKey: 'product',
            eventPattern: 'revenue-metric',
            metricName: 'revenueMetric',
            valueKey: 'baz',
          }),
        ],
        onlineAbConfig: new OnlineAbConfig({}),
        treatments: [],
      });
    }).toThrowError();
  });
});

describe('Configuration object (OnlineAbConfig)', () => {
  test('experiment with a configuration object', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'experimentWithMetricGoal',
      project: project,
      metricGoals: [],
      onlineAbConfig: new OnlineAbConfig({
        controlTreatmentName: 'defaultTreatment',
        treatmentWeights: [],
      }),
      treatments: [],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      OnlineAbConfig: {
        ControlTreatmentName: 'defaultTreatment',
        TreatmentWeights: [],
      },
    });
  });

  test('experiment with a configuration object with treatment weights', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    const variation = new Variation({
      variationName: 'String variation',
      valueType: VariationValueType.STRING,
      value: 'foobar',
    });

    const feature = new Feature(stack, 'MyFeature', {
      project: project,
      featureName: 'myFeature',
      variations: [variation],
    });

    const treatment = new Treatment({
      feature: feature,
      treatmentName: 'defaultTreatment',
      variation: variation,
      description: 'This is a default treatment',
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'experimentWithMetricGoal',
      project: project,
      metricGoals: [],
      onlineAbConfig: new OnlineAbConfig({
        controlTreatmentName: 'defaultTreatment',
        treatmentWeights: [
          new TreatmentToWeight({
            splitWeight: 20000,
            treatment: treatment,
          }),
        ],
      }),
      treatments: [treatment],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      OnlineAbConfig: {
        ControlTreatmentName: 'defaultTreatment',
        TreatmentWeights: [
          {
            SplitWeight: 20000,
            Treatment: 'defaultTreatment',
          },
        ],
      },
    });
  });
});

describe('Experiment Treatments', () => {
  test('experiment with treatments', () => {
    const stack = new Stack();
    const project = new Project(stack, 'MyProject', {
      projectName: 'myProject',
    });

    const variation = new Variation({
      variationName: 'String variation',
      valueType: VariationValueType.STRING,
      value: 'foobar',
    });

    const feature = new Feature(stack, 'MyFeature', {
      project: project,
      featureName: 'myFeature',
      variations: [
        variation,
      ],
    });

    new Experiment(stack, 'NewExperiment', {
      experimentName: 'experimentWithMetricGoal',
      project: project,
      metricGoals: [],
      onlineAbConfig: new OnlineAbConfig({}),
      treatments: [
        new Treatment({
          feature: feature,
          treatmentName: 'defaultTreatment',
          variation: variation,
          description: 'This is a default treatment',
        }),
      ],
    });

    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::Evidently::Experiment', {
      Treatments: [
        {
          TreatmentName: 'defaultTreatment',
          Variation: 'String variation',
          Description: 'This is a default treatment',
        },
      ],
    });
  });
});

describe('OnlineAbConfig', () => {
  test('default configuration', () => {
    const config = new OnlineAbConfig();

    expect(config.controlTreatmentName).toEqual('');
    expect(config.treatmentWeights).toEqual([]);
  });
});