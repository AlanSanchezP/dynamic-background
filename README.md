# dynamic-background
Landing page web component.

## Installation
Install the dynamic-background bower component into your project directory
<pre>bower install --save dynamic-background</pre>

Import the dynamic-background and background-element elements in your html imports file.
<pre>
&#60;link rel="import" href="bower_components/dynamic-background/dynamic-background.html"&#62;
&#60;link rel="import" href="bower_components/dynamic-background/background-element.html"&#62;
</pre>

Use both components as in the following example:
<pre>
&#60;dynamic-background&#62;
&nbsp; &#60;background-element type="background" background="URL"&#62;
&nbsp; /* content */
&nbsp; &#60;/background-element&#62;
&#60;/dynamic-background&#62;
</pre>

## Components

### dynamic-background

Contains the most of functionality and serves as a container for your background-element components.

### background-element

Represents each of the sections you want in your page.

#### Attributes
##### type
>background(default) | footer

Sets the type of element you want to use. <b>background</b> value creates a full-screen section with a background image. <b>footer</b> value creates a section with a reduced height and a gray background color.

##### background
>URL

Sets the background url. It only works if you set type="background"
