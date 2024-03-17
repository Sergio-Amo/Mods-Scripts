 
## Helper for the auto hide sidebar that fixes some issues

#### Fixes
- When hovering over a tab stack thumbnail or tooltip the tab bar collapses

- When there are just enough tabs as to show the scroll bar and you close one tab using a keyboard shortcut (ctrl+w) the overflow value is calculated before the tab close animation has finished causing an erroneous resulting width.

## Instructions

### Manual mode and all OS
For all OS, find your vivaldi `window.html` file, the easiest way to find it navigating to `vivaldi://about/` and checking the `Executable Path` value.

ie: `Executable Path	/opt/vivaldi/vivaldi`

In this case (on linux) navigate to `/opt/vivaldi/` and look for a folder called `resources` after that go inside the one called `vivaldi` the `window.html` file should be there.

Now copy the sidebarhelper.js in that directory and edit the `window.html` file so there's a line `<script src="sidebarhelper.js"></script>` between the `<body></body>` tags.

**Example**

```html
<!-- Vivaldi window document -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Vivaldi</title>
  <link rel="stylesheet" href="style/common.css" />
  <link rel="stylesheet" href="chrome://vivaldi-data/css-mods/css" />
</head>

<body>
<script src="sidebarhelper.js"></script>
</body>

</html>
```

### *BE AWARE THAT THE LINE INSIDE THE `window.html` file NEEDS TO BE ADDED EVERY TIME VIVALDI GETS UPDATED*