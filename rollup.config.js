module.exports = {
  entry      : './src/index.js',
  dest       : './build/index.js',
  format     : 'iife',
  sourceMap  : true,
  plugins    : [
    require( 'rollup-plugin-buble' )( {
      transforms : {
        dangerousForOf                : true,
        dangerousTaggedTemplateString : true
      }
    } ),
    require( 'rollup-plugin-commonjs' )( {
      include : './node_modules/**'
    } ),
    require( 'rollup-plugin-node-resolve' )( {
      jsnext  : true,
      main    : true
    } )
  ]
}