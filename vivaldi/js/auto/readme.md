# Instructions
### Change the paths:

There's two paths that needs to be customized:
* Inside `vivaldi-js-rearm.hook`  
  the exec command needs to be customized with the correct path
  ie: Exec = /usr/share/custom/scripts/vivaldi_update.sh

* Inside `vivaldi_update.sh`
The `target_file` needs to be set to the vivaldi window.html location.
ie: `target_file="/opt/vivaldi/resources/vivaldi/window.html"`

  Copy the `sidebarhelper.js` file in the same location where your `window.html"` is.
---
Move the `vivaldi-js-rearm.hook` file to `/etc/pacman.d/hooks/`

If you haven't added the script line into your `window.html` file manually you can run the vivaldi_update.sh ass root once to add it:

```bash
sudo ./vivaldi_update.sh
```

This is only needed the first time as from now on this script will be automatically launched every time vivaldi updates.