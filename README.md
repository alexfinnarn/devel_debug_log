Devel Debug Log
======================
This is a port of the 7.x branch of Drupal Devel Debug Log module.

Devel Debug Log is a developer module that provides a way for developers to
save and display debug messages on a separate page in the web browser. It
serves as an alternative to using drupal_set_message() or watchdog() for
debugging, and a complementary module to Devel for those who find viewing
messages in the browser easier than looking for them, say, in a file.

The module provides the ddl($message) function, which the developer can use to
save a debug message. If an object or array is supplied as $message, it will be
displayed using the Krumo debugging tool. Messages can be viewed at
Reports > Debug Messages.

Installation
------------

- Install this module using the official Backdrop CMS instructions at
  https://backdropcms.org/guide/modules

Documentation
-------------
Once the module is enabled, you can use the ddl($message) function in your code to send a debug message.

You can then see the logged messages at "admin/reports/debug".

Issues
------

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/devel_debug_log/issues

Current Maintainers
-------------------

- Alex Finnarn [https://github.com/alexfinnarn](https://github.com/alexfinnarn)

Credits
-------

- Current Drupal module maintainer: [Gergely Lekli](https://www.drupal.org/u/gergely-lekli)

License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.
