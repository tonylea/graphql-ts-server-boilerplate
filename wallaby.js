module.exports = function(w) {
  return {
    files: ['src/**/*.ts'],

    tests: ['test/**/*Spec.ts'],

    env: {
      type: 'node'
    },

    compilers: {
      '**/*.ts?(x)': w.compilers.typeScript({ module: 'commonjs' })
    }
  };
};
