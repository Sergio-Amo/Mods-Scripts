#!/bin/bash

# Specify the directory path where you want to search for window.html
target_file="/opt/vivaldi/resources/vivaldi/window.html"
script_fullPath="sidebarhelper.js"

# Check if the file "window.html" exists in the specified directory
if [ -f "$target_file" ]; then
    # Check if the line already exists in the file
    if grep -q "<script src=\"${script_fullPath}\"></script>" "$target_file"; then
        echo -e "[ \033[1;31mFAILED \033[0m] Mods were already enablend in 'window.html'. No changes made."
    else
        # Insert the desired line before the </body> tag
        sed -i "/<\/body>/i <script src=\"${script_fullPath}\"><\/script>" "$target_file"
        echo -e "[  \033[1;32mok  \033[0m] Mod init line added successfully."
    fi
else
    echo -e "[ \033[1;31mFAILED \033[0m] File 'window.html' not found in the current directory."
fi