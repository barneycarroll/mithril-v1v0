import asap from 'asap'
import v1   from 'v1'
import v0   from 'v0'

export default window.m = assign( v1.bind( this ), v1, { 
  mount  : v0.mount,
  redraw : v0.redraw,
  route  : assign( function( vnode ){
    if( vnode && vnode.dom && vnode.dom.tagName && vnode.dom.tagName == 'a' )
      return v0.route( dom )
      
    else 
      return v0.route( ...arguments )
  }, v0.route ),
  
  render : function( root, tree ){
    const { strategy } = v0.redraw
    
    asap( () => strategy( 'all' ) )

    if( strategy() == 'none' )
      return

    if( strategy() == 'all' )
      v1.render( root, '' )

    return v1.render( root, tree )
  }
} )