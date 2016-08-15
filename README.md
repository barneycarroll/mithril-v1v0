# Mithril v1v0

[/vivəʊ/]

Aims to combine the speed &amp; new features of Mithril v1, with the simple surface API &amp; lost features of Mithril v0.

**Doesn't work.**

***

## What?

Mithril v1, with deprecated `m.redraw.strategy` reintroduced.

## Why?

Because draw strategy control was often useful, the old route API was less verbose.

<!--
### Srsly

#### In defence of m.route()

The route API reversion is petty aesthetics - but then so is the change from v0 to v1. Mithril retains its brilliant (now even better!) `m.prop` API which propagated the good news of the [uniform access principle](http://lhorie.github.io/mithril-blog/the-uniform-access-principle.html), whereby a single-function getter/setter performed one or the other action depending on input. It seems silly for the route API to change in violation of that principle while it is implicitly encouraged for authors to write their own APIs this way.

#### In defence of m.redraw.strategy()

The redraw stuff is entirely practical. There was opinionated stuff that Mithril v1 made the right call on: trashing and rebuilding the DOM on route change by default was awkward to opt out of, so it makes sense that's gone. But that's not in of itself a compelling reason to remove redraw strategy control altogether:

1. Wanting to trash the DOM instead of forever diffing and patching is rarely desirable, but not inconceivable. If you depend on third party DOM mutation code, it can fall out sync with Mithril's virtual DOM model and retain undesirable properties. `m.redraw.strategy( 'all' )` is a heavy-handed but effective way of guaranteeing DOM-virtualDOM synchronicity on the next draw.
2. `m.redraw.strategy( 'none' )` is essential for no-op event handling.
-->

## How?

Require both Mithril APIs and patch judiciously.