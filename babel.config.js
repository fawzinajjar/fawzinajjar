module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    'styled-jsx/babel',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          app: './app',
          utils: './app/utils',
          components: './app/components',
          containers: './app/containers'
        }
      }
    ]
  ]
}
