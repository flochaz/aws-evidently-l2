# Evidently L2

This is a fork of https://github.com/aws/aws-cdk-rfcs/issues/428 implemention (https://github.com/ljuti/aws-cdk/tree/construct/aws-evidently/packages/%40aws-cdk/aws-evidently)

## Core Constructs
### Project
A Project is an AWS Evidently project where you group and track features, launches and experiments.

### Feature
A Feature is an AWS Evidently feature, a set of behaviour in your application that you wish to launch or test.

### Launch
A Launch is an AWS Evidently launch which you use to schedule or incrementally release a feature.

### Experiment
An Experiment is an AWS Evidently experiment that helps you make feature design decisions based on evidence and data.

## API Walkthrough with a Use Case Example
In an AWS News Blog article, author @sebsto demonstrates how to use AWS Evidently with a web application example.

Let's see how we would use the construct library to replace AWS Console tasks of the example.

1. Create a Project
    ```typescript
    import * as evidently from 'aws-cdk-lib/aws_evidently';

    const project = new evidently.Project(this, 'GuestbookWebApp', {
    projectName: 'AWSNewsBlog',
    description: 'AWSNewsBlogDemo',
    });
   ```
1. Add a Feature
    ```typescript
    const editable = new evidently.Variation({
    variationName: 'editable',
    valueType: VariationObjectValueType.BOOLEAN,
    value: true,
    });
        
    const readonly = new evidently.Variation({
    variationName: 'readonly',
    valueType: VariationObjectValueType.BOOLEAN,
    value: false,
    });

    const feature = new evidently.Feature(this, 'EditableGuestbook', {
    project: project,
    featureName: 'Editing',
    variations: [
        editable,
        readonly,
    ],
    entityOverrides: [
        new EntityOverride({
        entityId: 'seb',
        variation: editable,
        });
    ],
    });
    ```
1. Create a Launch
    ```typescript
    const editableGroup = new evidently.LaunchGroup({
    groupName: 'Editable',
    feature: feature,
    variation: editable,
    });
    const readonlyGroup = new evidently.LaunchGroup({
    groupName: 'Readonly',
    feature: feature,
    variation: readonly,
    });

    const launchConfiguration = new StepConfig({
    groupsToWeight: [
        {
        group: editableGroup,
        splitWeight: SplitWeight.50_PCT,
        }
    ],
    startTime: <timestamp>,
    });

    const launch = new evidently.Launch(this, 'EditableGuestbook', {
    launchName: 'EditableGuestbook',
    description: 'Launch the editable guest book feature',
    groups: [
        editableGroup,
        readonlyGroup,
    ],
    scheduledSplitsConfig: [launchConfiguration],
    });
    ```
1. Start an Experiment
    ```typescript
    const goal = new evidently.MetricGoal({
    desiredChange: MetricGoalDesiredChange.INCREASE,
    entityIdKey: 'user',
    eventPattern: 'eventbridge-pattern',
    metricName: 'Edits',
    valueKey: 'edits',
    });

    const treatmentOne = new evidently.Treatment({
    feature: feature,
    treatmentName: 'editing',
    variation: editable,
    });

    const treatmentTwo = new evidently.Treatment({
    feature: feature,
    treatmentName: 'readonly',
    variation: readonly,
    });

    const config = new evidently.OnlineAbConfig({
    controlTreatmentName: treatmentOne.treatmentName,
    treatmentWeights: [
        new evidently.TreatmentToWeight({
        splitWeight: 20000,
        treatment: treatmentOne,
        }),
        new evidently.TreatmentToWeight({
        splitWeight: 80000,
        treatment: treatmentTwo,
        }),
    ],
    });

    const experiment = new evidently.Experiment({
    project: project,
    experimentName: 'EditableGuestBook',
    metricGoals: [goal],
    onlineAbConfig: config,
    treatments: [
        treatmentOne,
        treatmentTwo,
    ],
    });
    ```


    # Credits

    @ljuti