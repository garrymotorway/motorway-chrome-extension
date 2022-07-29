Chrome Extensions
==

# Table of contents

# Local dev

To run locally

1. Go to chrome://extensions
1. Select 'developer mode'
1. Select 'Load unpacked'
1. If you make a change you can reload by clicking the refresh icon on the extension. 

# Making it work

The extension is setup to run on all `localhost` URLs and anything with *motorway.co.uk domains.

It periodically checks the page for any elements with a CSS class of `development`. When one is found it will try and show this element. This periodic checking only happens if the toggle is on.
