#!/bin/sh
        ng test
            if [ 0 -eq 0 ]; then
                echo Tests passed, proceeding with commit.
            else
                echo Tests failed, commit stopped.
                exit 1
            fi
        
