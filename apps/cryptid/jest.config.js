module.exports = {
  name: 'cryptid',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cryptid',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
