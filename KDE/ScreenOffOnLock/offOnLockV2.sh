#!/bin/bash
sleep 1
if [ "`qdbus org.freedesktop.ScreenSaver /org/freedesktop/ScreenSaver GetActive`" = "true" ]; then
   kwriteconfig5 --file $HOME/.config/powermanagementprofilesrc --group AC --group DPMSControl --key idleTime --type int 25
   qdbus org.kde.Solid.PowerManagement /org/kde/Solid/PowerManagement org.kde.Solid.PowerManagement.refreshStatus
fi