.. _site_descriptor:

Site Descriptors
================

To indicate that an application provides "site capabilities" and allow it to be added to sites, a site descriptor must be placed into the application.
Within your project, simply add a file called ``/main/src/resources/site/site.xml``. 

The site.xml file also makes use of the :ref:`schemas` concept, so you may easily define custom forms for configuring the application when
adding it to a site. These configurations are made in the <config> element.

.. literalinclude:: code/site.xml
   :language: xml
   :caption: /main/src/resources/site/site.xml

All controllers within the app can access the configured values with the portal.getSiteConfig() function.

.. literalinclude:: code/controller.js
   :language: javascript

An app's site.xml file may optionally contain ``<x-data>`` elements for adding :ref:`mixins` and a ``<filters>`` element for adding :ref:`response_filters`.

:ref:`controller_mappings` can also be configured in a site descriptor with a ``<mappings>`` element.