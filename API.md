# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Experiment <a name="Experiment" id="aws-evidently-l2.Experiment"></a>

- *Implements:* <a href="#aws-evidently-l2.IExperiment">IExperiment</a>

An Evidently Experiment.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Experiment.Initializer"></a>

```typescript
import { Experiment } from 'aws-evidently-l2'

new Experiment(scope: Construct, id: string, props: ExperimentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Experiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Experiment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Experiment.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.ExperimentProps">ExperimentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Experiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Experiment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Experiment.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.ExperimentProps">ExperimentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Experiment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-evidently-l2.Experiment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-evidently-l2.Experiment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-evidently-l2.Experiment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-evidently-l2.Experiment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Experiment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-evidently-l2.Experiment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-evidently-l2.Experiment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-evidently-l2.Experiment.fromExperimentAttributes">fromExperimentAttributes</a></code> | Import an experiment from attributes. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-evidently-l2.Experiment.isConstruct"></a>

```typescript
import { Experiment } from 'aws-evidently-l2'

Experiment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-evidently-l2.Experiment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-evidently-l2.Experiment.isOwnedResource"></a>

```typescript
import { Experiment } from 'aws-evidently-l2'

Experiment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Experiment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-evidently-l2.Experiment.isResource"></a>

```typescript
import { Experiment } from 'aws-evidently-l2'

Experiment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Experiment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromExperimentAttributes` <a name="fromExperimentAttributes" id="aws-evidently-l2.Experiment.fromExperimentAttributes"></a>

```typescript
import { Experiment } from 'aws-evidently-l2'

Experiment.fromExperimentAttributes(scope: Construct, id: string, attrs: ExperimentAttributes)
```

Import an experiment from attributes.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Experiment.fromExperimentAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Experiment.fromExperimentAttributes.parameter.id"></a>

- *Type:* string

The name of the construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-evidently-l2.Experiment.fromExperimentAttributes.parameter.attrs"></a>

- *Type:* <a href="#aws-evidently-l2.ExperimentAttributes">ExperimentAttributes</a>

Evidently Experiment attributes.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Experiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.Experiment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.Experiment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.Experiment.property.experimentArn">experimentArn</a></code> | <code>string</code> | The ARN of the experiment resource. |
| <code><a href="#aws-evidently-l2.Experiment.property.experimentName">experimentName</a></code> | <code>string</code> | The name of the experiment resource. |
| <code><a href="#aws-evidently-l2.Experiment.property.metricGoals">metricGoals</a></code> | <code><a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]</code> | An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal. |
| <code><a href="#aws-evidently-l2.Experiment.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a></code> | A structure that contains the configuration of which variation to use as the "control" version. |
| <code><a href="#aws-evidently-l2.Experiment.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The Evidently Project that this experiment belongs to. |
| <code><a href="#aws-evidently-l2.Experiment.property.treatments">treatments</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a>[]</code> | An array of structures that describe the configuration of each feature variation used in the experiment. |
| <code><a href="#aws-evidently-l2.Experiment.property.samplingRate">samplingRate</a></code> | <code>number</code> | The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.Experiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.Experiment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.Experiment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `experimentArn`<sup>Required</sup> <a name="experimentArn" id="aws-evidently-l2.Experiment.property.experimentArn"></a>

```typescript
public readonly experimentArn: string;
```

- *Type:* string

The ARN of the experiment resource.

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="aws-evidently-l2.Experiment.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The name of the experiment resource.

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="aws-evidently-l2.Experiment.property.metricGoals"></a>

```typescript
public readonly metricGoals: MetricGoal[];
```

- *Type:* <a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]

An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="aws-evidently-l2.Experiment.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: OnlineAbConfig;
```

- *Type:* <a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a>

A structure that contains the configuration of which variation to use as the "control" version.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.Experiment.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The Evidently Project that this experiment belongs to.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="aws-evidently-l2.Experiment.property.treatments"></a>

```typescript
public readonly treatments: Treatment[];
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>[]

An array of structures that describe the configuration of each feature variation used in the experiment.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="aws-evidently-l2.Experiment.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent.

---


### Feature <a name="Feature" id="aws-evidently-l2.Feature"></a>

- *Implements:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

An Evidently Feature.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Feature.Initializer"></a>

```typescript
import { Feature } from 'aws-evidently-l2'

new Feature(scope: Construct, id: string, props: FeatureProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Feature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Feature.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Feature.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.FeatureProps">FeatureProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Feature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Feature.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Feature.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.FeatureProps">FeatureProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Feature.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-evidently-l2.Feature.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-evidently-l2.Feature.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-evidently-l2.Feature.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-evidently-l2.Feature.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Feature.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-evidently-l2.Feature.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-evidently-l2.Feature.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-evidently-l2.Feature.fromFeatureAttributes">fromFeatureAttributes</a></code> | Creates an Evidently Feature construct that represents an external feature. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-evidently-l2.Feature.isConstruct"></a>

```typescript
import { Feature } from 'aws-evidently-l2'

Feature.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-evidently-l2.Feature.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-evidently-l2.Feature.isOwnedResource"></a>

```typescript
import { Feature } from 'aws-evidently-l2'

Feature.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Feature.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-evidently-l2.Feature.isResource"></a>

```typescript
import { Feature } from 'aws-evidently-l2'

Feature.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Feature.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromFeatureAttributes` <a name="fromFeatureAttributes" id="aws-evidently-l2.Feature.fromFeatureAttributes"></a>

```typescript
import { Feature } from 'aws-evidently-l2'

Feature.fromFeatureAttributes(scope: Construct, id: string, attrs: FeatureAttributes)
```

Creates an Evidently Feature construct that represents an external feature.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Feature.fromFeatureAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Feature.fromFeatureAttributes.parameter.id"></a>

- *Type:* string

The name of the construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-evidently-l2.Feature.fromFeatureAttributes.parameter.attrs"></a>

- *Type:* <a href="#aws-evidently-l2.FeatureAttributes">FeatureAttributes</a>

Evidently Feature attributes.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Feature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.Feature.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.Feature.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.Feature.property.featureArn">featureArn</a></code> | <code>string</code> | The ARN of the feature resource. |
| <code><a href="#aws-evidently-l2.Feature.property.featureName">featureName</a></code> | <code>string</code> | The name of the feature, up to 127 characters. |
| <code><a href="#aws-evidently-l2.Feature.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | An Evidently Project this feature belongs to. |
| <code><a href="#aws-evidently-l2.Feature.property.variations">variations</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a>[]</code> | An array of structures that contain the configuration of the feature's different variations. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.Feature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.Feature.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.Feature.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `featureArn`<sup>Required</sup> <a name="featureArn" id="aws-evidently-l2.Feature.property.featureArn"></a>

```typescript
public readonly featureArn: string;
```

- *Type:* string

The ARN of the feature resource.

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="aws-evidently-l2.Feature.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The name of the feature, up to 127 characters.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.Feature.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project this feature belongs to.

---

##### `variations`<sup>Required</sup> <a name="variations" id="aws-evidently-l2.Feature.property.variations"></a>

```typescript
public readonly variations: Variation[];
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>[]

An array of structures that contain the configuration of the feature's different variations.

---


### Launch <a name="Launch" id="aws-evidently-l2.Launch"></a>

- *Implements:* <a href="#aws-evidently-l2.ILaunch">ILaunch</a>

An Evidently Launch.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Launch.Initializer"></a>

```typescript
import { Launch } from 'aws-evidently-l2'

new Launch(scope: Construct, id: string, props: LaunchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Launch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Launch.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Launch.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.LaunchProps">LaunchProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Launch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Launch.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Launch.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.LaunchProps">LaunchProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Launch.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-evidently-l2.Launch.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-evidently-l2.Launch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-evidently-l2.Launch.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-evidently-l2.Launch.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Launch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-evidently-l2.Launch.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-evidently-l2.Launch.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-evidently-l2.Launch.fromLaunchAttributes">fromLaunchAttributes</a></code> | Creates an Evidently Launch construct that represents an external launch. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-evidently-l2.Launch.isConstruct"></a>

```typescript
import { Launch } from 'aws-evidently-l2'

Launch.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-evidently-l2.Launch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-evidently-l2.Launch.isOwnedResource"></a>

```typescript
import { Launch } from 'aws-evidently-l2'

Launch.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Launch.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-evidently-l2.Launch.isResource"></a>

```typescript
import { Launch } from 'aws-evidently-l2'

Launch.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Launch.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromLaunchAttributes` <a name="fromLaunchAttributes" id="aws-evidently-l2.Launch.fromLaunchAttributes"></a>

```typescript
import { Launch } from 'aws-evidently-l2'

Launch.fromLaunchAttributes(scope: Construct, id: string, attrs: LaunchAttributes)
```

Creates an Evidently Launch construct that represents an external launch.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Launch.fromLaunchAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Launch.fromLaunchAttributes.parameter.id"></a>

- *Type:* string

The name of the construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-evidently-l2.Launch.fromLaunchAttributes.parameter.attrs"></a>

- *Type:* <a href="#aws-evidently-l2.LaunchAttributes">LaunchAttributes</a>

Evidently Launch attributes.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Launch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.Launch.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.Launch.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.Launch.property.groups">groups</a></code> | <code><a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]</code> | An array of structures that contains the feature and variations that are to be used for the launch. |
| <code><a href="#aws-evidently-l2.Launch.property.launchArn">launchArn</a></code> | <code>string</code> | The ARN of the launch resource. |
| <code><a href="#aws-evidently-l2.Launch.property.launchName">launchName</a></code> | <code>string</code> | The name of the launch resource. |
| <code><a href="#aws-evidently-l2.Launch.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The name or ARN of the project that you want to create the launch in. |
| <code><a href="#aws-evidently-l2.Launch.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]</code> | An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch. |
| <code><a href="#aws-evidently-l2.Launch.property.description">description</a></code> | <code>string</code> | A description for the launch. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.Launch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.Launch.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.Launch.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `groups`<sup>Required</sup> <a name="groups" id="aws-evidently-l2.Launch.property.groups"></a>

```typescript
public readonly groups: LaunchGroup[];
```

- *Type:* <a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]

An array of structures that contains the feature and variations that are to be used for the launch.

---

##### `launchArn`<sup>Required</sup> <a name="launchArn" id="aws-evidently-l2.Launch.property.launchArn"></a>

```typescript
public readonly launchArn: string;
```

- *Type:* string

The ARN of the launch resource.

---

##### `launchName`<sup>Required</sup> <a name="launchName" id="aws-evidently-l2.Launch.property.launchName"></a>

```typescript
public readonly launchName: string;
```

- *Type:* string

The name of the launch resource.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.Launch.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The name or ARN of the project that you want to create the launch in.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="aws-evidently-l2.Launch.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: StepConfig[];
```

- *Type:* <a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]

An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.Launch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the launch.

---


### Project <a name="Project" id="aws-evidently-l2.Project"></a>

- *Implements:* <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Project.Initializer"></a>

```typescript
import { Project } from 'aws-evidently-l2'

new Project(scope: Construct, id: string, props: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Project.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Project.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aws-evidently-l2.Project.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.ProjectProps">ProjectProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Project.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Project.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Project.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.ProjectProps">ProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-evidently-l2.Project.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="aws-evidently-l2.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-evidently-l2.Project.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-evidently-l2.Project.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-evidently-l2.Project.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-evidently-l2.Project.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-evidently-l2.Project.fromProjectArn">fromProjectArn</a></code> | Import an existing Evidently Project from provided ARN. |
| <code><a href="#aws-evidently-l2.Project.fromProjectAttributes">fromProjectAttributes</a></code> | Creates an Evidently Project construct that represents an external project. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aws-evidently-l2.Project.isConstruct"></a>

```typescript
import { Project } from 'aws-evidently-l2'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aws-evidently-l2.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-evidently-l2.Project.isOwnedResource"></a>

```typescript
import { Project } from 'aws-evidently-l2'

Project.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Project.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-evidently-l2.Project.isResource"></a>

```typescript
import { Project } from 'aws-evidently-l2'

Project.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-evidently-l2.Project.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromProjectArn` <a name="fromProjectArn" id="aws-evidently-l2.Project.fromProjectArn"></a>

```typescript
import { Project } from 'aws-evidently-l2'

Project.fromProjectArn(scope: Construct, id: string, projectArn: string)
```

Import an existing Evidently Project from provided ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Project.fromProjectArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Project.fromProjectArn.parameter.id"></a>

- *Type:* string

The name of the construct.

---

###### `projectArn`<sup>Required</sup> <a name="projectArn" id="aws-evidently-l2.Project.fromProjectArn.parameter.projectArn"></a>

- *Type:* string

Evidently Project ARN.

---

##### `fromProjectAttributes` <a name="fromProjectAttributes" id="aws-evidently-l2.Project.fromProjectAttributes"></a>

```typescript
import { Project } from 'aws-evidently-l2'

Project.fromProjectAttributes(scope: Construct, id: string, attrs: ProjectAttributes)
```

Creates an Evidently Project construct that represents an external project.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-evidently-l2.Project.fromProjectAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="aws-evidently-l2.Project.fromProjectAttributes.parameter.id"></a>

- *Type:* string

The name of the construct.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="aws-evidently-l2.Project.fromProjectAttributes.parameter.attrs"></a>

- *Type:* <a href="#aws-evidently-l2.ProjectAttributes">ProjectAttributes</a>

Project import properties.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.Project.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.Project.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.Project.property.projectArn">projectArn</a></code> | <code>string</code> | The ARN of the project. |
| <code><a href="#aws-evidently-l2.Project.property.projectName">projectName</a></code> | <code>string</code> | The name of the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.Project.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.Project.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="aws-evidently-l2.Project.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

The ARN of the project.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="aws-evidently-l2.Project.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The name of the project.

---


## Structs <a name="Structs" id="Structs"></a>

### DataDeliveryObject <a name="DataDeliveryObject" id="aws-evidently-l2.DataDeliveryObject"></a>

Where Evidently is to store evaluation events of the project.

#### Initializer <a name="Initializer" id="aws-evidently-l2.DataDeliveryObject.Initializer"></a>

```typescript
import { DataDeliveryObject } from 'aws-evidently-l2'

const dataDeliveryObject: DataDeliveryObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.DataDeliveryObject.property.logGroup">logGroup</a></code> | <code>string</code> | If the project stores evaluation events in CloudWatch Logs, this structure stores the log group name. |
| <code><a href="#aws-evidently-l2.DataDeliveryObject.property.s3">s3</a></code> | <code><a href="#aws-evidently-l2.S3Destination">S3Destination</a></code> | If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix. |

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="aws-evidently-l2.DataDeliveryObject.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string
- *Default:* 

If the project stores evaluation events in CloudWatch Logs, this structure stores the log group name.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="aws-evidently-l2.DataDeliveryObject.property.s3"></a>

```typescript
public readonly s3: S3Destination;
```

- *Type:* <a href="#aws-evidently-l2.S3Destination">S3Destination</a>
- *Default:* 

If the project stores evaluation events in an Amazon S3 bucket, this structure stores the bucket name and bucket prefix.

---

### EntityOverrideProps <a name="EntityOverrideProps" id="aws-evidently-l2.EntityOverrideProps"></a>

Properties for EntityOverride object.

#### Initializer <a name="Initializer" id="aws-evidently-l2.EntityOverrideProps.Initializer"></a>

```typescript
import { EntityOverrideProps } from 'aws-evidently-l2'

const entityOverrideProps: EntityOverrideProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.EntityOverrideProps.property.entityId">entityId</a></code> | <code>string</code> | The entity ID to be served the variation specified in Variation. |
| <code><a href="#aws-evidently-l2.EntityOverrideProps.property.variation">variation</a></code> | <code>string</code> | The name of the variation to serve to the user session that matches the EntityId. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="aws-evidently-l2.EntityOverrideProps.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The entity ID to be served the variation specified in Variation.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.EntityOverrideProps.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

The name of the variation to serve to the user session that matches the EntityId.

---

### ExperimentAttributes <a name="ExperimentAttributes" id="aws-evidently-l2.ExperimentAttributes"></a>

A reference to an Evidently Experiment.

#### Initializer <a name="Initializer" id="aws-evidently-l2.ExperimentAttributes.Initializer"></a>

```typescript
import { ExperimentAttributes } from 'aws-evidently-l2'

const experimentAttributes: ExperimentAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.experimentArn">experimentArn</a></code> | <code>string</code> | The ARN of the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.experimentName">experimentName</a></code> | <code>string</code> | The name of the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.metricGoals">metricGoals</a></code> | <code><a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]</code> | Metrics for the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a></code> | Configuration object for the metric. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The Evidently Project this experiment belongs to. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.treatments">treatments</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a>[]</code> | Treatments for the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentAttributes.property.samplingRate">samplingRate</a></code> | <code>number</code> | Traffic sampling rate for the experiment. |

---

##### `experimentArn`<sup>Required</sup> <a name="experimentArn" id="aws-evidently-l2.ExperimentAttributes.property.experimentArn"></a>

```typescript
public readonly experimentArn: string;
```

- *Type:* string

The ARN of the experiment.

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="aws-evidently-l2.ExperimentAttributes.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The name of the experiment.

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="aws-evidently-l2.ExperimentAttributes.property.metricGoals"></a>

```typescript
public readonly metricGoals: MetricGoal[];
```

- *Type:* <a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]

Metrics for the experiment.

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="aws-evidently-l2.ExperimentAttributes.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: OnlineAbConfig;
```

- *Type:* <a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a>

Configuration object for the metric.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.ExperimentAttributes.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The Evidently Project this experiment belongs to.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="aws-evidently-l2.ExperimentAttributes.property.treatments"></a>

```typescript
public readonly treatments: Treatment[];
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>[]

Treatments for the experiment.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="aws-evidently-l2.ExperimentAttributes.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number
- *Default:* 

Traffic sampling rate for the experiment.

---

### ExperimentProps <a name="ExperimentProps" id="aws-evidently-l2.ExperimentProps"></a>

Properties for an Evidently Experiment.

#### Initializer <a name="Initializer" id="aws-evidently-l2.ExperimentProps.Initializer"></a>

```typescript
import { ExperimentProps } from 'aws-evidently-l2'

const experimentProps: ExperimentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.experimentName">experimentName</a></code> | <code>string</code> | The name of the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.metricGoals">metricGoals</a></code> | <code><a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]</code> | Metrics for the experiment. |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a></code> | Configuration object. |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The Evidently Project this experiment belongs to. |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.treatments">treatments</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a>[]</code> | Treatments. |
| <code><a href="#aws-evidently-l2.ExperimentProps.property.samplingRate">samplingRate</a></code> | <code>number</code> | Sampling rate of traffic that's diverted to the experiment. |

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="aws-evidently-l2.ExperimentProps.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The name of the experiment.

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="aws-evidently-l2.ExperimentProps.property.metricGoals"></a>

```typescript
public readonly metricGoals: MetricGoal[];
```

- *Type:* <a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]

Metrics for the experiment.

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="aws-evidently-l2.ExperimentProps.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: OnlineAbConfig;
```

- *Type:* <a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a>

Configuration object.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.ExperimentProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The Evidently Project this experiment belongs to.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="aws-evidently-l2.ExperimentProps.property.treatments"></a>

```typescript
public readonly treatments: Treatment[];
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>[]

Treatments.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="aws-evidently-l2.ExperimentProps.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number
- *Default:* 

Sampling rate of traffic that's diverted to the experiment.

---

### FeatureAttributes <a name="FeatureAttributes" id="aws-evidently-l2.FeatureAttributes"></a>

A reference to an Evidently Feature.

#### Initializer <a name="Initializer" id="aws-evidently-l2.FeatureAttributes.Initializer"></a>

```typescript
import { FeatureAttributes } from 'aws-evidently-l2'

const featureAttributes: FeatureAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.FeatureAttributes.property.featureArn">featureArn</a></code> | <code>string</code> | The ARN of the feature. |
| <code><a href="#aws-evidently-l2.FeatureAttributes.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | An Evidently Project this feature belongs to. |
| <code><a href="#aws-evidently-l2.FeatureAttributes.property.variations">variations</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a>[]</code> | Variations. |

---

##### `featureArn`<sup>Required</sup> <a name="featureArn" id="aws-evidently-l2.FeatureAttributes.property.featureArn"></a>

```typescript
public readonly featureArn: string;
```

- *Type:* string

The ARN of the feature.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.FeatureAttributes.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project this feature belongs to.

---

##### `variations`<sup>Required</sup> <a name="variations" id="aws-evidently-l2.FeatureAttributes.property.variations"></a>

```typescript
public readonly variations: Variation[];
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>[]

Variations.

---

### FeatureProps <a name="FeatureProps" id="aws-evidently-l2.FeatureProps"></a>

Properties for an Evidently Feature.

#### Initializer <a name="Initializer" id="aws-evidently-l2.FeatureProps.Initializer"></a>

```typescript
import { FeatureProps } from 'aws-evidently-l2'

const featureProps: FeatureProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.FeatureProps.property.featureName">featureName</a></code> | <code>string</code> | The name of the feature. |
| <code><a href="#aws-evidently-l2.FeatureProps.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | An Evidently Project that this feature belongs to. |
| <code><a href="#aws-evidently-l2.FeatureProps.property.variations">variations</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a>[]</code> | Variations. |
| <code><a href="#aws-evidently-l2.FeatureProps.property.description">description</a></code> | <code>string</code> | Description. |
| <code><a href="#aws-evidently-l2.FeatureProps.property.entityOverrides">entityOverrides</a></code> | <code><a href="#aws-evidently-l2.EntityOverride">EntityOverride</a>[]</code> | Entity overrides. |

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="aws-evidently-l2.FeatureProps.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The name of the feature.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.FeatureProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project that this feature belongs to.

---

##### `variations`<sup>Required</sup> <a name="variations" id="aws-evidently-l2.FeatureProps.property.variations"></a>

```typescript
public readonly variations: Variation[];
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>[]

Variations.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.FeatureProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

Description.

---

*Example*

```typescript
'This is a feature'
```


##### `entityOverrides`<sup>Optional</sup> <a name="entityOverrides" id="aws-evidently-l2.FeatureProps.property.entityOverrides"></a>

```typescript
public readonly entityOverrides: EntityOverride[];
```

- *Type:* <a href="#aws-evidently-l2.EntityOverride">EntityOverride</a>[]
- *Default:* 

Entity overrides.

---

### GroupToWeight <a name="GroupToWeight" id="aws-evidently-l2.GroupToWeight"></a>

A structure containing the percentage of launch traffic to allocate to one launch group.

#### Initializer <a name="Initializer" id="aws-evidently-l2.GroupToWeight.Initializer"></a>

```typescript
import { GroupToWeight } from 'aws-evidently-l2'

const groupToWeight: GroupToWeight = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.GroupToWeight.property.groupName">groupName</a></code> | <code>string</code> | The name of the launch group. |
| <code><a href="#aws-evidently-l2.GroupToWeight.property.splitWeight">splitWeight</a></code> | <code>number</code> | The portion of launch traffic to allocate to this launch group. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="aws-evidently-l2.GroupToWeight.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The name of the launch group.

It can include up to 127 characters.

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="aws-evidently-l2.GroupToWeight.property.splitWeight"></a>

```typescript
public readonly splitWeight: number;
```

- *Type:* number

The portion of launch traffic to allocate to this launch group.

---

### LaunchAttributes <a name="LaunchAttributes" id="aws-evidently-l2.LaunchAttributes"></a>

A reference to an Evidently Launch.

#### Initializer <a name="Initializer" id="aws-evidently-l2.LaunchAttributes.Initializer"></a>

```typescript
import { LaunchAttributes } from 'aws-evidently-l2'

const launchAttributes: LaunchAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.LaunchAttributes.property.groups">groups</a></code> | <code><a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]</code> | An array of structures that contains the feature and variations that are to be used for the launch. |
| <code><a href="#aws-evidently-l2.LaunchAttributes.property.launchArn">launchArn</a></code> | <code>string</code> | The ARN of the launch. |
| <code><a href="#aws-evidently-l2.LaunchAttributes.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The name or ARN of the project that you want to create the launch in. |
| <code><a href="#aws-evidently-l2.LaunchAttributes.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]</code> | An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch. |
| <code><a href="#aws-evidently-l2.LaunchAttributes.property.description">description</a></code> | <code>string</code> | An optional description for the launch. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="aws-evidently-l2.LaunchAttributes.property.groups"></a>

```typescript
public readonly groups: LaunchGroup[];
```

- *Type:* <a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]

An array of structures that contains the feature and variations that are to be used for the launch.

---

##### `launchArn`<sup>Required</sup> <a name="launchArn" id="aws-evidently-l2.LaunchAttributes.property.launchArn"></a>

```typescript
public readonly launchArn: string;
```

- *Type:* string

The ARN of the launch.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.LaunchAttributes.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The name or ARN of the project that you want to create the launch in.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="aws-evidently-l2.LaunchAttributes.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: StepConfig[];
```

- *Type:* <a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]

An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.LaunchAttributes.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* a description of the launch

An optional description for the launch.

---

### LaunchGroupProps <a name="LaunchGroupProps" id="aws-evidently-l2.LaunchGroupProps"></a>

Properties for a LaunchGroup.

#### Initializer <a name="Initializer" id="aws-evidently-l2.LaunchGroupProps.Initializer"></a>

```typescript
import { LaunchGroupProps } from 'aws-evidently-l2'

const launchGroupProps: LaunchGroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.LaunchGroupProps.property.feature">feature</a></code> | <code><a href="#aws-evidently-l2.IFeature">IFeature</a></code> | The feature that this launch is using. |
| <code><a href="#aws-evidently-l2.LaunchGroupProps.property.groupName">groupName</a></code> | <code>string</code> | A name for this launch group. |
| <code><a href="#aws-evidently-l2.LaunchGroupProps.property.variation">variation</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a></code> | The feature variation to use for this launch group. |
| <code><a href="#aws-evidently-l2.LaunchGroupProps.property.description">description</a></code> | <code>string</code> | A description of the launch group. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="aws-evidently-l2.LaunchGroupProps.property.feature"></a>

```typescript
public readonly feature: IFeature;
```

- *Type:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

The feature that this launch is using.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="aws-evidently-l2.LaunchGroupProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

A name for this launch group.

It can include up to 127 characters.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.LaunchGroupProps.property.variation"></a>

```typescript
public readonly variation: Variation;
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>

The feature variation to use for this launch group.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.LaunchGroupProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

A description of the launch group.

---

### LaunchProps <a name="LaunchProps" id="aws-evidently-l2.LaunchProps"></a>

Properties for an Evidently Launch.

#### Initializer <a name="Initializer" id="aws-evidently-l2.LaunchProps.Initializer"></a>

```typescript
import { LaunchProps } from 'aws-evidently-l2'

const launchProps: LaunchProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.LaunchProps.property.groups">groups</a></code> | <code><a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]</code> | An array of structures that contains the feature and variations that are to be used for the launch. |
| <code><a href="#aws-evidently-l2.LaunchProps.property.launchName">launchName</a></code> | <code>string</code> | The name of the launch. |
| <code><a href="#aws-evidently-l2.LaunchProps.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The name or ARN of the project that you want to create the launch in. |
| <code><a href="#aws-evidently-l2.LaunchProps.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]</code> | An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch. |
| <code><a href="#aws-evidently-l2.LaunchProps.property.description">description</a></code> | <code>string</code> | A description of the launch. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="aws-evidently-l2.LaunchProps.property.groups"></a>

```typescript
public readonly groups: LaunchGroup[];
```

- *Type:* <a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]

An array of structures that contains the feature and variations that are to be used for the launch.

---

##### `launchName`<sup>Required</sup> <a name="launchName" id="aws-evidently-l2.LaunchProps.property.launchName"></a>

```typescript
public readonly launchName: string;
```

- *Type:* string

The name of the launch.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.LaunchProps.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The name or ARN of the project that you want to create the launch in.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="aws-evidently-l2.LaunchProps.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: StepConfig[];
```

- *Type:* <a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]

An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.LaunchProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* a description for the launch

A description of the launch.

---

### MetricDefinitionObject <a name="MetricDefinitionObject" id="aws-evidently-l2.MetricDefinitionObject"></a>

This structure defines a metric that you want to use to evaluate the variations during a launch or experiment.

#### Initializer <a name="Initializer" id="aws-evidently-l2.MetricDefinitionObject.Initializer"></a>

```typescript
import { MetricDefinitionObject } from 'aws-evidently-l2'

const metricDefinitionObject: MetricDefinitionObject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.MetricDefinitionObject.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | The entity, such as a user or session, that does an action that causes a metric value to be recorded. |
| <code><a href="#aws-evidently-l2.MetricDefinitionObject.property.eventPattern">eventPattern</a></code> | <code>string</code> | The EventBridge event pattern that defines how the metric is recorded. |
| <code><a href="#aws-evidently-l2.MetricDefinitionObject.property.metricName">metricName</a></code> | <code>string</code> | A name for the metric. |
| <code><a href="#aws-evidently-l2.MetricDefinitionObject.property.valueKey">valueKey</a></code> | <code>string</code> | The value that is tracked to produce the metric. |
| <code><a href="#aws-evidently-l2.MetricDefinitionObject.property.unitLabel">unitLabel</a></code> | <code>string</code> | A label for the units that the metric is measuring. |

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="aws-evidently-l2.MetricDefinitionObject.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

The entity, such as a user or session, that does an action that causes a metric value to be recorded.

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="aws-evidently-l2.MetricDefinitionObject.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

The EventBridge event pattern that defines how the metric is recorded.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="aws-evidently-l2.MetricDefinitionObject.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

A name for the metric.

It can include up to 255 characters.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="aws-evidently-l2.MetricDefinitionObject.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

The value that is tracked to produce the metric.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="aws-evidently-l2.MetricDefinitionObject.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string
- *Default:* 

A label for the units that the metric is measuring.

---

### MetricGoalProps <a name="MetricGoalProps" id="aws-evidently-l2.MetricGoalProps"></a>

Properties for a metric.

#### Initializer <a name="Initializer" id="aws-evidently-l2.MetricGoalProps.Initializer"></a>

```typescript
import { MetricGoalProps } from 'aws-evidently-l2'

const metricGoalProps: MetricGoalProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.desiredChange">desiredChange</a></code> | <code><a href="#aws-evidently-l2.MetricGoalDesiredChange">MetricGoalDesiredChange</a></code> | Desired change for the variation. |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | The entity, such as a user or session, that does an action that causes a metric value to be recorded. |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.eventPattern">eventPattern</a></code> | <code>string</code> | The EventBridge event pattern that defines how the metric is recorded. |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.metricName">metricName</a></code> | <code>string</code> | A name for the metric. |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.valueKey">valueKey</a></code> | <code>string</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#aws-evidently-l2.MetricGoalProps.property.unitLabel">unitLabel</a></code> | <code>string</code> | A label for the units that the metric is measuring. |

---

##### `desiredChange`<sup>Required</sup> <a name="desiredChange" id="aws-evidently-l2.MetricGoalProps.property.desiredChange"></a>

```typescript
public readonly desiredChange: MetricGoalDesiredChange;
```

- *Type:* <a href="#aws-evidently-l2.MetricGoalDesiredChange">MetricGoalDesiredChange</a>

Desired change for the variation.

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="aws-evidently-l2.MetricGoalProps.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

The entity, such as a user or session, that does an action that causes a metric value to be recorded.

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="aws-evidently-l2.MetricGoalProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

The EventBridge event pattern that defines how the metric is recorded.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="aws-evidently-l2.MetricGoalProps.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

A name for the metric.

It can include up to 255 characters.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="aws-evidently-l2.MetricGoalProps.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

The JSON path to reference the numerical metric value in the event.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="aws-evidently-l2.MetricGoalProps.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string
- *Default:* 

A label for the units that the metric is measuring.

---

### OnlineAbConfigProps <a name="OnlineAbConfigProps" id="aws-evidently-l2.OnlineAbConfigProps"></a>

Properties for a configuration object.

#### Initializer <a name="Initializer" id="aws-evidently-l2.OnlineAbConfigProps.Initializer"></a>

```typescript
import { OnlineAbConfigProps } from 'aws-evidently-l2'

const onlineAbConfigProps: OnlineAbConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.OnlineAbConfigProps.property.controlTreatmentName">controlTreatmentName</a></code> | <code>string</code> | The name of the variation that is to be the default variation that the other variations are compared to. |
| <code><a href="#aws-evidently-l2.OnlineAbConfigProps.property.treatmentWeights">treatmentWeights</a></code> | <code><a href="#aws-evidently-l2.TreatmentToWeight">TreatmentToWeight</a>[]</code> | A set of key-value pairs. |

---

##### `controlTreatmentName`<sup>Optional</sup> <a name="controlTreatmentName" id="aws-evidently-l2.OnlineAbConfigProps.property.controlTreatmentName"></a>

```typescript
public readonly controlTreatmentName: string;
```

- *Type:* string
- *Default:* 

The name of the variation that is to be the default variation that the other variations are compared to.

---

##### `treatmentWeights`<sup>Optional</sup> <a name="treatmentWeights" id="aws-evidently-l2.OnlineAbConfigProps.property.treatmentWeights"></a>

```typescript
public readonly treatmentWeights: TreatmentToWeight[];
```

- *Type:* <a href="#aws-evidently-l2.TreatmentToWeight">TreatmentToWeight</a>[]
- *Default:* []

A set of key-value pairs.

---

### ProjectAttributes <a name="ProjectAttributes" id="aws-evidently-l2.ProjectAttributes"></a>

A reference to an Evidently Project.

#### Initializer <a name="Initializer" id="aws-evidently-l2.ProjectAttributes.Initializer"></a>

```typescript
import { ProjectAttributes } from 'aws-evidently-l2'

const projectAttributes: ProjectAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ProjectAttributes.property.projectArn">projectArn</a></code> | <code>string</code> | The ARN of the project. |

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="aws-evidently-l2.ProjectAttributes.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

The ARN of the project.

---

### ProjectProps <a name="ProjectProps" id="aws-evidently-l2.ProjectProps"></a>

Properties for an Evidently Project.

#### Initializer <a name="Initializer" id="aws-evidently-l2.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'aws-evidently-l2'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ProjectProps.property.projectName">projectName</a></code> | <code>string</code> | The name for a project. |
| <code><a href="#aws-evidently-l2.ProjectProps.property.dataDelivery">dataDelivery</a></code> | <code><a href="#aws-evidently-l2.DataDeliveryObject">DataDeliveryObject</a></code> | Data delivery. |
| <code><a href="#aws-evidently-l2.ProjectProps.property.description">description</a></code> | <code>string</code> | A description of the project. |

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="aws-evidently-l2.ProjectProps.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The name for a project.

---

##### `dataDelivery`<sup>Optional</sup> <a name="dataDelivery" id="aws-evidently-l2.ProjectProps.property.dataDelivery"></a>

```typescript
public readonly dataDelivery: DataDeliveryObject;
```

- *Type:* <a href="#aws-evidently-l2.DataDeliveryObject">DataDeliveryObject</a>
- *Default:* 

Data delivery.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.ProjectProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

A description of the project.

---

### S3Destination <a name="S3Destination" id="aws-evidently-l2.S3Destination"></a>

An Amazon S3 bucket for the project to store evaluation events.

#### Initializer <a name="Initializer" id="aws-evidently-l2.S3Destination.Initializer"></a>

```typescript
import { S3Destination } from 'aws-evidently-l2'

const s3Destination: S3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.S3Destination.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket in which Evidently stores evaluation events. |
| <code><a href="#aws-evidently-l2.S3Destination.property.prefix">prefix</a></code> | <code>string</code> | The bucket prefix in which Evidently stores evaluation events. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="aws-evidently-l2.S3Destination.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* 

The name of the bucket in which Evidently stores evaluation events.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="aws-evidently-l2.S3Destination.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string
- *Default:* 

The bucket prefix in which Evidently stores evaluation events.

---

### StepConfigProps <a name="StepConfigProps" id="aws-evidently-l2.StepConfigProps"></a>

Properties for a StepConfig object.

#### Initializer <a name="Initializer" id="aws-evidently-l2.StepConfigProps.Initializer"></a>

```typescript
import { StepConfigProps } from 'aws-evidently-l2'

const stepConfigProps: StepConfigProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.StepConfigProps.property.groupWeights">groupWeights</a></code> | <code><a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]</code> | An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch. |
| <code><a href="#aws-evidently-l2.StepConfigProps.property.startTime">startTime</a></code> | <code>string</code> | The date and time to start this step of the launch. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="aws-evidently-l2.StepConfigProps.property.groupWeights"></a>

```typescript
public readonly groupWeights: GroupToWeight[];
```

- *Type:* <a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]

An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="aws-evidently-l2.StepConfigProps.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The date and time to start this step of the launch.

Use UTC format, yyyy-MM-ddTHH:mm:ssZ.

---

### TreatmentProps <a name="TreatmentProps" id="aws-evidently-l2.TreatmentProps"></a>

Properties for a treatment.

#### Initializer <a name="Initializer" id="aws-evidently-l2.TreatmentProps.Initializer"></a>

```typescript
import { TreatmentProps } from 'aws-evidently-l2'

const treatmentProps: TreatmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.TreatmentProps.property.feature">feature</a></code> | <code><a href="#aws-evidently-l2.IFeature">IFeature</a></code> | Feature this treatment belongs to. |
| <code><a href="#aws-evidently-l2.TreatmentProps.property.treatmentName">treatmentName</a></code> | <code>string</code> | The name of the treatment. |
| <code><a href="#aws-evidently-l2.TreatmentProps.property.variation">variation</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a></code> | The variation this treatment is used for. |
| <code><a href="#aws-evidently-l2.TreatmentProps.property.description">description</a></code> | <code>string</code> | Description of the treatment. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="aws-evidently-l2.TreatmentProps.property.feature"></a>

```typescript
public readonly feature: IFeature;
```

- *Type:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

Feature this treatment belongs to.

---

##### `treatmentName`<sup>Required</sup> <a name="treatmentName" id="aws-evidently-l2.TreatmentProps.property.treatmentName"></a>

```typescript
public readonly treatmentName: string;
```

- *Type:* string

The name of the treatment.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.TreatmentProps.property.variation"></a>

```typescript
public readonly variation: Variation;
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>

The variation this treatment is used for.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.TreatmentProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

Description of the treatment.

---

### TreatmentToWeightProps <a name="TreatmentToWeightProps" id="aws-evidently-l2.TreatmentToWeightProps"></a>

Properties for a traffic distribution.

#### Initializer <a name="Initializer" id="aws-evidently-l2.TreatmentToWeightProps.Initializer"></a>

```typescript
import { TreatmentToWeightProps } from 'aws-evidently-l2'

const treatmentToWeightProps: TreatmentToWeightProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.TreatmentToWeightProps.property.splitWeight">splitWeight</a></code> | <code>number</code> | The portion of experiment traffic to allocate to this treatment. |
| <code><a href="#aws-evidently-l2.TreatmentToWeightProps.property.treatment">treatment</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a></code> | The name of a treatment. |

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="aws-evidently-l2.TreatmentToWeightProps.property.splitWeight"></a>

```typescript
public readonly splitWeight: number;
```

- *Type:* number

The portion of experiment traffic to allocate to this treatment.

Specify the traffic portion in thousandths of a percent,
so 20,000 allocated to a treatment would allocate 20% of the experiment traffic to that treatment.

---

##### `treatment`<sup>Required</sup> <a name="treatment" id="aws-evidently-l2.TreatmentToWeightProps.property.treatment"></a>

```typescript
public readonly treatment: Treatment;
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>

The name of a treatment.

---

### VariationProps <a name="VariationProps" id="aws-evidently-l2.VariationProps"></a>

The properties of a Variation.

#### Initializer <a name="Initializer" id="aws-evidently-l2.VariationProps.Initializer"></a>

```typescript
import { VariationProps } from 'aws-evidently-l2'

const variationProps: VariationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.VariationProps.property.value">value</a></code> | <code>string \| number \| boolean</code> | Value assigned to the variation. |
| <code><a href="#aws-evidently-l2.VariationProps.property.valueType">valueType</a></code> | <code><a href="#aws-evidently-l2.VariationValueType">VariationValueType</a></code> | Variation value type. |
| <code><a href="#aws-evidently-l2.VariationProps.property.variationName">variationName</a></code> | <code>string</code> | The name of the variation. |

---

##### `value`<sup>Required</sup> <a name="value" id="aws-evidently-l2.VariationProps.property.value"></a>

```typescript
public readonly value: string | number | boolean;
```

- *Type:* string | number | boolean

Value assigned to the variation.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="aws-evidently-l2.VariationProps.property.valueType"></a>

```typescript
public readonly valueType: VariationValueType;
```

- *Type:* <a href="#aws-evidently-l2.VariationValueType">VariationValueType</a>

Variation value type.

---

##### `variationName`<sup>Optional</sup> <a name="variationName" id="aws-evidently-l2.VariationProps.property.variationName"></a>

```typescript
public readonly variationName: string;
```

- *Type:* string
- *Default:* 

The name of the variation.

---

## Classes <a name="Classes" id="Classes"></a>

### EntityOverride <a name="EntityOverride" id="aws-evidently-l2.EntityOverride"></a>

A set of key-value pairs that specify users who should always be served a specific variation of a feature.

#### Initializers <a name="Initializers" id="aws-evidently-l2.EntityOverride.Initializer"></a>

```typescript
import { EntityOverride } from 'aws-evidently-l2'

new EntityOverride(props: EntityOverrideProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.EntityOverride.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.EntityOverrideProps">EntityOverrideProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.EntityOverride.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.EntityOverrideProps">EntityOverrideProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.EntityOverride.property.entityId">entityId</a></code> | <code>string</code> | The entity ID to be served the variation specified in Variation. |
| <code><a href="#aws-evidently-l2.EntityOverride.property.variation">variation</a></code> | <code>string</code> | The name of the variation to serve to the user session that matches the EntityId. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="aws-evidently-l2.EntityOverride.property.entityId"></a>

```typescript
public readonly entityId: string;
```

- *Type:* string

The entity ID to be served the variation specified in Variation.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.EntityOverride.property.variation"></a>

```typescript
public readonly variation: string;
```

- *Type:* string

The name of the variation to serve to the user session that matches the EntityId.

---


### LaunchGroup <a name="LaunchGroup" id="aws-evidently-l2.LaunchGroup"></a>

- *Implements:* <a href="#aws-evidently-l2.ILaunchGroup">ILaunchGroup</a>

A structure that defines one launch group in a launch.

A launch group is a variation of the feature that you are including in the launch.

#### Initializers <a name="Initializers" id="aws-evidently-l2.LaunchGroup.Initializer"></a>

```typescript
import { LaunchGroup } from 'aws-evidently-l2'

new LaunchGroup(props: LaunchGroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.LaunchGroup.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.LaunchGroupProps">LaunchGroupProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.LaunchGroup.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.LaunchGroupProps">LaunchGroupProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.LaunchGroup.property.feature">feature</a></code> | <code><a href="#aws-evidently-l2.IFeature">IFeature</a></code> | The feature that this launch is using. |
| <code><a href="#aws-evidently-l2.LaunchGroup.property.groupName">groupName</a></code> | <code>string</code> | A name for this launch group. |
| <code><a href="#aws-evidently-l2.LaunchGroup.property.variation">variation</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a></code> | The feature variation to use for this launch group. |
| <code><a href="#aws-evidently-l2.LaunchGroup.property.description">description</a></code> | <code>string</code> | A description of the launch group. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="aws-evidently-l2.LaunchGroup.property.feature"></a>

```typescript
public readonly feature: IFeature;
```

- *Type:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

The feature that this launch is using.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="aws-evidently-l2.LaunchGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

A name for this launch group.

It can include up to 127 characters.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.LaunchGroup.property.variation"></a>

```typescript
public readonly variation: Variation;
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>

The feature variation to use for this launch group.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.LaunchGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the launch group.

---


### MetricGoal <a name="MetricGoal" id="aws-evidently-l2.MetricGoal"></a>

A metric for an experiment.

#### Initializers <a name="Initializers" id="aws-evidently-l2.MetricGoal.Initializer"></a>

```typescript
import { MetricGoal } from 'aws-evidently-l2'

new MetricGoal(props: MetricGoalProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.MetricGoal.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.MetricGoalProps">MetricGoalProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.MetricGoal.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.MetricGoalProps">MetricGoalProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.MetricGoal.property.desiredChange">desiredChange</a></code> | <code><a href="#aws-evidently-l2.MetricGoalDesiredChange">MetricGoalDesiredChange</a></code> | Desired change for the variation. |
| <code><a href="#aws-evidently-l2.MetricGoal.property.entityIdKey">entityIdKey</a></code> | <code>string</code> | The entity, such as a user or session, that does an action that causes a metric value to be recorded. |
| <code><a href="#aws-evidently-l2.MetricGoal.property.eventPattern">eventPattern</a></code> | <code>string</code> | The EventBridge event pattern that defines how the metric is recorded. |
| <code><a href="#aws-evidently-l2.MetricGoal.property.metricName">metricName</a></code> | <code>string</code> | A name for the metric. |
| <code><a href="#aws-evidently-l2.MetricGoal.property.valueKey">valueKey</a></code> | <code>string</code> | The JSON path to reference the numerical metric value in the event. |
| <code><a href="#aws-evidently-l2.MetricGoal.property.unitLabel">unitLabel</a></code> | <code>string</code> | A label for the units that the metric is measuring. |

---

##### `desiredChange`<sup>Required</sup> <a name="desiredChange" id="aws-evidently-l2.MetricGoal.property.desiredChange"></a>

```typescript
public readonly desiredChange: MetricGoalDesiredChange;
```

- *Type:* <a href="#aws-evidently-l2.MetricGoalDesiredChange">MetricGoalDesiredChange</a>

Desired change for the variation.

---

##### `entityIdKey`<sup>Required</sup> <a name="entityIdKey" id="aws-evidently-l2.MetricGoal.property.entityIdKey"></a>

```typescript
public readonly entityIdKey: string;
```

- *Type:* string

The entity, such as a user or session, that does an action that causes a metric value to be recorded.

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="aws-evidently-l2.MetricGoal.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

The EventBridge event pattern that defines how the metric is recorded.

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="aws-evidently-l2.MetricGoal.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

A name for the metric.

It can include up to 255 characters.

---

##### `valueKey`<sup>Required</sup> <a name="valueKey" id="aws-evidently-l2.MetricGoal.property.valueKey"></a>

```typescript
public readonly valueKey: string;
```

- *Type:* string

The JSON path to reference the numerical metric value in the event.

---

##### `unitLabel`<sup>Optional</sup> <a name="unitLabel" id="aws-evidently-l2.MetricGoal.property.unitLabel"></a>

```typescript
public readonly unitLabel: string;
```

- *Type:* string

A label for the units that the metric is measuring.

---


### OnlineAbConfig <a name="OnlineAbConfig" id="aws-evidently-l2.OnlineAbConfig"></a>

Configuration object for an experiment.

#### Initializers <a name="Initializers" id="aws-evidently-l2.OnlineAbConfig.Initializer"></a>

```typescript
import { OnlineAbConfig } from 'aws-evidently-l2'

new OnlineAbConfig(props?: OnlineAbConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.OnlineAbConfig.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.OnlineAbConfigProps">OnlineAbConfigProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="aws-evidently-l2.OnlineAbConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.OnlineAbConfigProps">OnlineAbConfigProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.OnlineAbConfig.property.controlTreatmentName">controlTreatmentName</a></code> | <code>string</code> | The name of the variation that is to be the default variation that the other variations are compared to. |
| <code><a href="#aws-evidently-l2.OnlineAbConfig.property.treatmentWeights">treatmentWeights</a></code> | <code><a href="#aws-evidently-l2.TreatmentToWeight">TreatmentToWeight</a>[]</code> | A set of key-value pairs. |

---

##### `controlTreatmentName`<sup>Optional</sup> <a name="controlTreatmentName" id="aws-evidently-l2.OnlineAbConfig.property.controlTreatmentName"></a>

```typescript
public readonly controlTreatmentName: string;
```

- *Type:* string

The name of the variation that is to be the default variation that the other variations are compared to.

---

##### `treatmentWeights`<sup>Optional</sup> <a name="treatmentWeights" id="aws-evidently-l2.OnlineAbConfig.property.treatmentWeights"></a>

```typescript
public readonly treatmentWeights: TreatmentToWeight[];
```

- *Type:* <a href="#aws-evidently-l2.TreatmentToWeight">TreatmentToWeight</a>[]

A set of key-value pairs.

---


### StepConfig <a name="StepConfig" id="aws-evidently-l2.StepConfig"></a>

- *Implements:* <a href="#aws-evidently-l2.IStepConfig">IStepConfig</a>

A structure that defines when each step of the launch is to start, and how much launch traffic is to be allocated to each variation during each step.

#### Initializers <a name="Initializers" id="aws-evidently-l2.StepConfig.Initializer"></a>

```typescript
import { StepConfig } from 'aws-evidently-l2'

new StepConfig(props: StepConfigProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.StepConfig.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.StepConfigProps">StepConfigProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.StepConfig.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.StepConfigProps">StepConfigProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.StepConfig.property.groupWeights">groupWeights</a></code> | <code><a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]</code> | An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch. |
| <code><a href="#aws-evidently-l2.StepConfig.property.startTime">startTime</a></code> | <code>string</code> | The date and time to start this step of the launch. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="aws-evidently-l2.StepConfig.property.groupWeights"></a>

```typescript
public readonly groupWeights: GroupToWeight[];
```

- *Type:* <a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]

An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="aws-evidently-l2.StepConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The date and time to start this step of the launch.

Use UTC format, yyyy-MM-ddTHH:mm:ssZ.

---


### Treatment <a name="Treatment" id="aws-evidently-l2.Treatment"></a>

Behavior treatment for an experiment.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Treatment.Initializer"></a>

```typescript
import { Treatment } from 'aws-evidently-l2'

new Treatment(props: TreatmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Treatment.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.TreatmentProps">TreatmentProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Treatment.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.TreatmentProps">TreatmentProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Treatment.property.feature">feature</a></code> | <code><a href="#aws-evidently-l2.IFeature">IFeature</a></code> | Feature this treatment belongs to. |
| <code><a href="#aws-evidently-l2.Treatment.property.treatmentName">treatmentName</a></code> | <code>string</code> | The name of the treatment. |
| <code><a href="#aws-evidently-l2.Treatment.property.variation">variation</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a></code> | The variation this treatment is used for. |
| <code><a href="#aws-evidently-l2.Treatment.property.description">description</a></code> | <code>string</code> | Description of the treatment. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="aws-evidently-l2.Treatment.property.feature"></a>

```typescript
public readonly feature: IFeature;
```

- *Type:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

Feature this treatment belongs to.

---

##### `treatmentName`<sup>Required</sup> <a name="treatmentName" id="aws-evidently-l2.Treatment.property.treatmentName"></a>

```typescript
public readonly treatmentName: string;
```

- *Type:* string

The name of the treatment.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.Treatment.property.variation"></a>

```typescript
public readonly variation: Variation;
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>

The variation this treatment is used for.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.Treatment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the treatment.

---


### TreatmentToWeight <a name="TreatmentToWeight" id="aws-evidently-l2.TreatmentToWeight"></a>

Traffic distribution configuration for a treatment.

#### Initializers <a name="Initializers" id="aws-evidently-l2.TreatmentToWeight.Initializer"></a>

```typescript
import { TreatmentToWeight } from 'aws-evidently-l2'

new TreatmentToWeight(props: TreatmentToWeightProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.TreatmentToWeight.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.TreatmentToWeightProps">TreatmentToWeightProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.TreatmentToWeight.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.TreatmentToWeightProps">TreatmentToWeightProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.TreatmentToWeight.property.splitWeight">splitWeight</a></code> | <code>number</code> | The portion of experiment traffic to allocate to this treatment. |
| <code><a href="#aws-evidently-l2.TreatmentToWeight.property.treatment">treatment</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a></code> | The name of the treatment. |

---

##### `splitWeight`<sup>Required</sup> <a name="splitWeight" id="aws-evidently-l2.TreatmentToWeight.property.splitWeight"></a>

```typescript
public readonly splitWeight: number;
```

- *Type:* number

The portion of experiment traffic to allocate to this treatment.

---

##### `treatment`<sup>Required</sup> <a name="treatment" id="aws-evidently-l2.TreatmentToWeight.property.treatment"></a>

```typescript
public readonly treatment: Treatment;
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>

The name of the treatment.

---


### Variation <a name="Variation" id="aws-evidently-l2.Variation"></a>

This structure contains the name and variation value of one variation of a feature.

#### Initializers <a name="Initializers" id="aws-evidently-l2.Variation.Initializer"></a>

```typescript
import { Variation } from 'aws-evidently-l2'

new Variation(props: VariationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Variation.Initializer.parameter.props">props</a></code> | <code><a href="#aws-evidently-l2.VariationProps">VariationProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="aws-evidently-l2.Variation.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-evidently-l2.VariationProps">VariationProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.Variation.property.name">name</a></code> | <code>string</code> | A name for the variation. |
| <code><a href="#aws-evidently-l2.Variation.property.value">value</a></code> | <code>string \| number \| boolean</code> | The value assigned to this variation. |
| <code><a href="#aws-evidently-l2.Variation.property.valueType">valueType</a></code> | <code><a href="#aws-evidently-l2.VariationValueType">VariationValueType</a></code> | The type of the variation value. |

---

##### `name`<sup>Required</sup> <a name="name" id="aws-evidently-l2.Variation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the variation.

It can include up to 127 characters.

---

##### `value`<sup>Required</sup> <a name="value" id="aws-evidently-l2.Variation.property.value"></a>

```typescript
public readonly value: string | number | boolean;
```

- *Type:* string | number | boolean

The value assigned to this variation.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="aws-evidently-l2.Variation.property.valueType"></a>

```typescript
public readonly valueType: VariationValueType;
```

- *Type:* <a href="#aws-evidently-l2.VariationValueType">VariationValueType</a>

The type of the variation value.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IExperiment <a name="IExperiment" id="aws-evidently-l2.IExperiment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-evidently-l2.Experiment">Experiment</a>, <a href="#aws-evidently-l2.IExperiment">IExperiment</a>

An Evidently Experiment resource.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.IExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.IExperiment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.IExperiment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.IExperiment.property.experimentArn">experimentArn</a></code> | <code>string</code> | The ARN of the experiment resource. |
| <code><a href="#aws-evidently-l2.IExperiment.property.experimentName">experimentName</a></code> | <code>string</code> | The name of the experiment resource. |
| <code><a href="#aws-evidently-l2.IExperiment.property.metricGoals">metricGoals</a></code> | <code><a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]</code> | An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal. |
| <code><a href="#aws-evidently-l2.IExperiment.property.onlineAbConfig">onlineAbConfig</a></code> | <code><a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a></code> | A structure that contains the configuration of which variation to use as the "control" version. |
| <code><a href="#aws-evidently-l2.IExperiment.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The Evidently Project that this experiment belongs to. |
| <code><a href="#aws-evidently-l2.IExperiment.property.treatments">treatments</a></code> | <code><a href="#aws-evidently-l2.Treatment">Treatment</a>[]</code> | An array of structures that describe the configuration of each feature variation used in the experiment. |
| <code><a href="#aws-evidently-l2.IExperiment.property.description">description</a></code> | <code>string</code> | A description of the experiment resource. |
| <code><a href="#aws-evidently-l2.IExperiment.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | Randomization salt. |
| <code><a href="#aws-evidently-l2.IExperiment.property.samplingRate">samplingRate</a></code> | <code>number</code> | The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent. |
| <code><a href="#aws-evidently-l2.IExperiment.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | Tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.IExperiment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.IExperiment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.IExperiment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `experimentArn`<sup>Required</sup> <a name="experimentArn" id="aws-evidently-l2.IExperiment.property.experimentArn"></a>

```typescript
public readonly experimentArn: string;
```

- *Type:* string

The ARN of the experiment resource.

---

##### `experimentName`<sup>Required</sup> <a name="experimentName" id="aws-evidently-l2.IExperiment.property.experimentName"></a>

```typescript
public readonly experimentName: string;
```

- *Type:* string

The name of the experiment resource.

---

##### `metricGoals`<sup>Required</sup> <a name="metricGoals" id="aws-evidently-l2.IExperiment.property.metricGoals"></a>

```typescript
public readonly metricGoals: MetricGoal[];
```

- *Type:* <a href="#aws-evidently-l2.MetricGoal">MetricGoal</a>[]

An array of structures that defines the metrics used for the experiment, and whether a higher or lower value for each metric is the goal.

---

##### `onlineAbConfig`<sup>Required</sup> <a name="onlineAbConfig" id="aws-evidently-l2.IExperiment.property.onlineAbConfig"></a>

```typescript
public readonly onlineAbConfig: OnlineAbConfig;
```

- *Type:* <a href="#aws-evidently-l2.OnlineAbConfig">OnlineAbConfig</a>

A structure that contains the configuration of which variation to use as the "control" version.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.IExperiment.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The Evidently Project that this experiment belongs to.

---

##### `treatments`<sup>Required</sup> <a name="treatments" id="aws-evidently-l2.IExperiment.property.treatments"></a>

```typescript
public readonly treatments: Treatment[];
```

- *Type:* <a href="#aws-evidently-l2.Treatment">Treatment</a>[]

An array of structures that describe the configuration of each feature variation used in the experiment.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.IExperiment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

A description of the experiment resource.

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="aws-evidently-l2.IExperiment.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string
- *Default:* 

Randomization salt.

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="aws-evidently-l2.IExperiment.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number
- *Default:* 

The portion of the available audience that you want to allocate to this experiment, in thousandths of a percent.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-evidently-l2.IExperiment.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]
- *Default:* 

Tags.

---

### IFeature <a name="IFeature" id="aws-evidently-l2.IFeature"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-evidently-l2.Feature">Feature</a>, <a href="#aws-evidently-l2.IFeature">IFeature</a>

An Evidently Feature resource.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.IFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.IFeature.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.IFeature.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.IFeature.property.featureArn">featureArn</a></code> | <code>string</code> | The ARN of the feature resource. |
| <code><a href="#aws-evidently-l2.IFeature.property.featureName">featureName</a></code> | <code>string</code> | The name of the feature, up to 127 characters. |
| <code><a href="#aws-evidently-l2.IFeature.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | An Evidently Project this feature belongs to. |
| <code><a href="#aws-evidently-l2.IFeature.property.variations">variations</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a>[]</code> | An array of structures that contain the configuration of the feature's different variations. |
| <code><a href="#aws-evidently-l2.IFeature.property.defaultVariation">defaultVariation</a></code> | <code>string</code> | The name of the variation to use as the default variation. |
| <code><a href="#aws-evidently-l2.IFeature.property.description">description</a></code> | <code>string</code> | An optional description of the feature. |
| <code><a href="#aws-evidently-l2.IFeature.property.entityOverrides">entityOverrides</a></code> | <code><a href="#aws-evidently-l2.EntityOverride">EntityOverride</a>[]</code> | Specify users that should always be served a specific variation of a feature. |
| <code><a href="#aws-evidently-l2.IFeature.property.evaluationStrategy">evaluationStrategy</a></code> | <code><a href="#aws-evidently-l2.EvaluationStrategy">EvaluationStrategy</a></code> | An evaluation strategy for the feature. |
| <code><a href="#aws-evidently-l2.IFeature.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | Tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.IFeature.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.IFeature.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.IFeature.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `featureArn`<sup>Required</sup> <a name="featureArn" id="aws-evidently-l2.IFeature.property.featureArn"></a>

```typescript
public readonly featureArn: string;
```

- *Type:* string

The ARN of the feature resource.

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="aws-evidently-l2.IFeature.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

The name of the feature, up to 127 characters.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.IFeature.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project this feature belongs to.

---

##### `variations`<sup>Required</sup> <a name="variations" id="aws-evidently-l2.IFeature.property.variations"></a>

```typescript
public readonly variations: Variation[];
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>[]

An array of structures that contain the configuration of the feature's different variations.

---

##### `defaultVariation`<sup>Optional</sup> <a name="defaultVariation" id="aws-evidently-l2.IFeature.property.defaultVariation"></a>

```typescript
public readonly defaultVariation: string;
```

- *Type:* string
- *Default:* 

The name of the variation to use as the default variation.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.IFeature.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

An optional description of the feature.

---

##### `entityOverrides`<sup>Optional</sup> <a name="entityOverrides" id="aws-evidently-l2.IFeature.property.entityOverrides"></a>

```typescript
public readonly entityOverrides: EntityOverride[];
```

- *Type:* <a href="#aws-evidently-l2.EntityOverride">EntityOverride</a>[]
- *Default:* 

Specify users that should always be served a specific variation of a feature.

Each user is specified by a key-value pair.

---

##### `evaluationStrategy`<sup>Optional</sup> <a name="evaluationStrategy" id="aws-evidently-l2.IFeature.property.evaluationStrategy"></a>

```typescript
public readonly evaluationStrategy: EvaluationStrategy;
```

- *Type:* <a href="#aws-evidently-l2.EvaluationStrategy">EvaluationStrategy</a>
- *Default:* 

An evaluation strategy for the feature.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-evidently-l2.IFeature.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

Tags.

---

### ILaunch <a name="ILaunch" id="aws-evidently-l2.ILaunch"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-evidently-l2.Launch">Launch</a>, <a href="#aws-evidently-l2.ILaunch">ILaunch</a>

An Evidently Launch resource.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ILaunch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.ILaunch.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.ILaunch.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.ILaunch.property.groups">groups</a></code> | <code><a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]</code> | An array of structures that contains the feature and variations that are to be used for the launch. |
| <code><a href="#aws-evidently-l2.ILaunch.property.launchArn">launchArn</a></code> | <code>string</code> | The ARN of the launch resource. |
| <code><a href="#aws-evidently-l2.ILaunch.property.launchName">launchName</a></code> | <code>string</code> | The name of the launch resource. |
| <code><a href="#aws-evidently-l2.ILaunch.property.project">project</a></code> | <code><a href="#aws-evidently-l2.IProject">IProject</a></code> | The name or ARN of the project that you want to create the launch in. |
| <code><a href="#aws-evidently-l2.ILaunch.property.scheduledSplitsConfig">scheduledSplitsConfig</a></code> | <code><a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]</code> | An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch. |
| <code><a href="#aws-evidently-l2.ILaunch.property.description">description</a></code> | <code>string</code> | A description of the launch resource. |
| <code><a href="#aws-evidently-l2.ILaunch.property.metricMonitors">metricMonitors</a></code> | <code><a href="#aws-evidently-l2.MetricDefinitionObject">MetricDefinitionObject</a>[]</code> | An array of structures that define the metrics that will be used to monitor the launch performance. |
| <code><a href="#aws-evidently-l2.ILaunch.property.randomizationSalt">randomizationSalt</a></code> | <code>string</code> | A randomization salt for generating an ID to determine which variation the user session is served. |
| <code><a href="#aws-evidently-l2.ILaunch.property.tags">tags</a></code> | <code>aws-cdk-lib.Tag[]</code> | Assigns one or more tags (key-value pairs) to the launch. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.ILaunch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.ILaunch.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.ILaunch.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `groups`<sup>Required</sup> <a name="groups" id="aws-evidently-l2.ILaunch.property.groups"></a>

```typescript
public readonly groups: LaunchGroup[];
```

- *Type:* <a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>[]

An array of structures that contains the feature and variations that are to be used for the launch.

---

##### `launchArn`<sup>Required</sup> <a name="launchArn" id="aws-evidently-l2.ILaunch.property.launchArn"></a>

```typescript
public readonly launchArn: string;
```

- *Type:* string

The ARN of the launch resource.

---

##### `launchName`<sup>Required</sup> <a name="launchName" id="aws-evidently-l2.ILaunch.property.launchName"></a>

```typescript
public readonly launchName: string;
```

- *Type:* string

The name of the launch resource.

---

##### `project`<sup>Required</sup> <a name="project" id="aws-evidently-l2.ILaunch.property.project"></a>

```typescript
public readonly project: IProject;
```

- *Type:* <a href="#aws-evidently-l2.IProject">IProject</a>

The name or ARN of the project that you want to create the launch in.

---

##### `scheduledSplitsConfig`<sup>Required</sup> <a name="scheduledSplitsConfig" id="aws-evidently-l2.ILaunch.property.scheduledSplitsConfig"></a>

```typescript
public readonly scheduledSplitsConfig: StepConfig[];
```

- *Type:* <a href="#aws-evidently-l2.StepConfig">StepConfig</a>[]

An array of structures that define the traffic allocation percentages among the feature variations during each step of the launch.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.ILaunch.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

A description of the launch resource.

---

##### `metricMonitors`<sup>Optional</sup> <a name="metricMonitors" id="aws-evidently-l2.ILaunch.property.metricMonitors"></a>

```typescript
public readonly metricMonitors: MetricDefinitionObject[];
```

- *Type:* <a href="#aws-evidently-l2.MetricDefinitionObject">MetricDefinitionObject</a>[]

An array of structures that define the metrics that will be used to monitor the launch performance.

---

##### `randomizationSalt`<sup>Optional</sup> <a name="randomizationSalt" id="aws-evidently-l2.ILaunch.property.randomizationSalt"></a>

```typescript
public readonly randomizationSalt: string;
```

- *Type:* string

A randomization salt for generating an ID to determine which variation the user session is served.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="aws-evidently-l2.ILaunch.property.tags"></a>

```typescript
public readonly tags: Tag[];
```

- *Type:* aws-cdk-lib.Tag[]

Assigns one or more tags (key-value pairs) to the launch.

---

### ILaunchGroup <a name="ILaunchGroup" id="aws-evidently-l2.ILaunchGroup"></a>

- *Implemented By:* <a href="#aws-evidently-l2.LaunchGroup">LaunchGroup</a>, <a href="#aws-evidently-l2.ILaunchGroup">ILaunchGroup</a>

A structure that defines one launch group in a launch.

A launch group is a variation of the feature that you are including in the launch.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.ILaunchGroup.property.feature">feature</a></code> | <code><a href="#aws-evidently-l2.IFeature">IFeature</a></code> | The feature that this launch is using. |
| <code><a href="#aws-evidently-l2.ILaunchGroup.property.groupName">groupName</a></code> | <code>string</code> | A name for this launch group. |
| <code><a href="#aws-evidently-l2.ILaunchGroup.property.variation">variation</a></code> | <code><a href="#aws-evidently-l2.Variation">Variation</a></code> | The feature variation to use for this launch group. |
| <code><a href="#aws-evidently-l2.ILaunchGroup.property.description">description</a></code> | <code>string</code> | A description of the launch group. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="aws-evidently-l2.ILaunchGroup.property.feature"></a>

```typescript
public readonly feature: IFeature;
```

- *Type:* <a href="#aws-evidently-l2.IFeature">IFeature</a>

The feature that this launch is using.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="aws-evidently-l2.ILaunchGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

A name for this launch group.

It can include up to 127 characters.

---

##### `variation`<sup>Required</sup> <a name="variation" id="aws-evidently-l2.ILaunchGroup.property.variation"></a>

```typescript
public readonly variation: Variation;
```

- *Type:* <a href="#aws-evidently-l2.Variation">Variation</a>

The feature variation to use for this launch group.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-evidently-l2.ILaunchGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* 

A description of the launch group.

---

### IProject <a name="IProject" id="aws-evidently-l2.IProject"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#aws-evidently-l2.Project">Project</a>, <a href="#aws-evidently-l2.IProject">IProject</a>

An Evidently Project resource.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.IProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-evidently-l2.IProject.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-evidently-l2.IProject.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-evidently-l2.IProject.property.projectArn">projectArn</a></code> | <code>string</code> | The ARN of the project. |
| <code><a href="#aws-evidently-l2.IProject.property.projectName">projectName</a></code> | <code>string</code> | The name of the project. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-evidently-l2.IProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-evidently-l2.IProject.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-evidently-l2.IProject.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `projectArn`<sup>Required</sup> <a name="projectArn" id="aws-evidently-l2.IProject.property.projectArn"></a>

```typescript
public readonly projectArn: string;
```

- *Type:* string

The ARN of the project.

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="aws-evidently-l2.IProject.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

The name of the project.

---

### IStepConfig <a name="IStepConfig" id="aws-evidently-l2.IStepConfig"></a>

- *Implemented By:* <a href="#aws-evidently-l2.StepConfig">StepConfig</a>, <a href="#aws-evidently-l2.IStepConfig">IStepConfig</a>

A structure that defines when each step of the launch is to start, and how much launch traffic is to be allocated to each variation during each step.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-evidently-l2.IStepConfig.property.groupWeights">groupWeights</a></code> | <code><a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]</code> | An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch. |
| <code><a href="#aws-evidently-l2.IStepConfig.property.startTime">startTime</a></code> | <code>string</code> | The date and time to start this step of the launch. |

---

##### `groupWeights`<sup>Required</sup> <a name="groupWeights" id="aws-evidently-l2.IStepConfig.property.groupWeights"></a>

```typescript
public readonly groupWeights: GroupToWeight[];
```

- *Type:* <a href="#aws-evidently-l2.GroupToWeight">GroupToWeight</a>[]

An array of structures that define how much launch traffic to allocate to each launch group during this step of the launch.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="aws-evidently-l2.IStepConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

The date and time to start this step of the launch.

Use UTC format, yyyy-MM-ddTHH:mm:ssZ.

---

## Enums <a name="Enums" id="Enums"></a>

### EvaluationStrategy <a name="EvaluationStrategy" id="aws-evidently-l2.EvaluationStrategy"></a>

Evaluation strategies.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.EvaluationStrategy.ALL_RULES">ALL_RULES</a></code> | All rules are evaluated. |
| <code><a href="#aws-evidently-l2.EvaluationStrategy.DEFAULT_VARIATION">DEFAULT_VARIATION</a></code> | Only default variation is evaluated. |

---

##### `ALL_RULES` <a name="ALL_RULES" id="aws-evidently-l2.EvaluationStrategy.ALL_RULES"></a>

All rules are evaluated.

---


##### `DEFAULT_VARIATION` <a name="DEFAULT_VARIATION" id="aws-evidently-l2.EvaluationStrategy.DEFAULT_VARIATION"></a>

Only default variation is evaluated.

---


### MetricGoalDesiredChange <a name="MetricGoalDesiredChange" id="aws-evidently-l2.MetricGoalDesiredChange"></a>

Option for Metric Goal.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.MetricGoalDesiredChange.INCREASE">INCREASE</a></code> | A desired increase in the metric value. |
| <code><a href="#aws-evidently-l2.MetricGoalDesiredChange.DECREASE">DECREASE</a></code> | A desired decrease in the metric value. |

---

##### `INCREASE` <a name="INCREASE" id="aws-evidently-l2.MetricGoalDesiredChange.INCREASE"></a>

A desired increase in the metric value.

---


##### `DECREASE` <a name="DECREASE" id="aws-evidently-l2.MetricGoalDesiredChange.DECREASE"></a>

A desired decrease in the metric value.

---


### VariationValueType <a name="VariationValueType" id="aws-evidently-l2.VariationValueType"></a>

Variation value types for Variation.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-evidently-l2.VariationValueType.BOOLEAN">BOOLEAN</a></code> | Boolean value type. |
| <code><a href="#aws-evidently-l2.VariationValueType.DOUBLE">DOUBLE</a></code> | Double value type. |
| <code><a href="#aws-evidently-l2.VariationValueType.LONG">LONG</a></code> | Long value type. |
| <code><a href="#aws-evidently-l2.VariationValueType.STRING">STRING</a></code> | String value type. |

---

##### `BOOLEAN` <a name="BOOLEAN" id="aws-evidently-l2.VariationValueType.BOOLEAN"></a>

Boolean value type.

---


##### `DOUBLE` <a name="DOUBLE" id="aws-evidently-l2.VariationValueType.DOUBLE"></a>

Double value type.

---


##### `LONG` <a name="LONG" id="aws-evidently-l2.VariationValueType.LONG"></a>

Long value type.

---


##### `STRING` <a name="STRING" id="aws-evidently-l2.VariationValueType.STRING"></a>

String value type.

---

