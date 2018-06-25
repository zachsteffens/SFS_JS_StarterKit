// This file contains references to the vendor libraries that we are using in this project
// this is used by webpack in the production build only. A separate bundle for vendor code is
// usefull since it's unlikely to change as often as the apps code. So all the libraries we reference here
// will be written to vendor.js so the can e cached until  one of them changes. So basically, this avoids
// customers having to download a huge JS file anytime a line of code changes.  They only have to download
// vendor.js whena vendor lib changes which should be less frequent. Any files that aren't referenced here will
// be bundled into main.js for the production build.

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';
