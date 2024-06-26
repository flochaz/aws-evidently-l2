import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Florian CHAZAL',
  authorAddress: 'florianchazal@gmail.com',
  cdkVersion: '2.50.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.4.0',
  majorVersion: 1,
  name: 'aws-evidently-l2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/flochaz/aws-evidently-l2.git',
  npmAccess: NpmAccess.PUBLIC,

  // TODO: remove when https://github.com/projen/projen/issues/3479 is fixed
  npmProvenance: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.package.addField('contributors', [
  {
    name: 'Lauri Jutila',
  },
]);

project.synth();