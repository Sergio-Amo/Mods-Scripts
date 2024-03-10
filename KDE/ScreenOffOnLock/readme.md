## Turn off screen shortly after session lock (meta + L)

This will turn off 25 seconds after locking the session.

This was created for KDE Plasma 5 but it should also work with plasma 6, However keep in mind that on wayland session there's already an option to do this inside `Energy saving` called `When locked, turn off screen` that can be adjusted to your liking

### Instructions

First move the sh files to your preferred location,

Now go to System settings -> Notifications 

Scroll to the bottom and you will find a configure button under **Aplication-specific settings** click it.

Now search for Screen Saver, inside Configure Events you will find two events, in the locked event add the `offOnLockV2.sh` file in the unlock one use the `offOnLockV2_reset.sh` file.

Done, if you want to configure the seconds before the screen turning off after locking session edit the `offOnLockV2.sh` file and search for `--type int` after it you can put the number you want in seconds, to configure the time for the screen to turn off when the session is not locked do the same in the `offOnLockV2_reset.sh` file, by default it's set to 10 minutes (600 seconds)

