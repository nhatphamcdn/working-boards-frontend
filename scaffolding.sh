#!/bin/bash

PS3='Please enter your option: '
options=("page" "api" "cancel")
select opt in "${options[@]}"
do
    case $opt in
        "page")
            option='page'

            echo "Page name:"
            read name

            if [ -z name ]; then
              echo "Please enter a name"
              exit 1 
            fi

            FILE=./assets/scss/pages/$name.scss
            if [ -f "$FILE" ]; then
              echo "$FILE exists."
              exit 1 
            fi

            # Create page
            echo "Creating page $name..."
            cp -R ./scaffolding/page ./pages/$name
            echo "Created page $name success."
            # Create scss
            echo "Creating scss $name..."
            touch ./assets/scss/pages/$name.scss
            echo "@import '@/assets/scss/pages/$name';" >> ./pages/$name/style.scss
            echo "Created scss $name success."
            break
            ;;
        "api")
            option='api'

            echo "API name:"
            read name

            if [ -z name ]; then
              echo "Please enter a name"
              exit 1 
            fi

            FILE=./api/$name.api.js
            if [ -f "$FILE" ]; then
              echo "$FILE exists."
              exit 1 
            fi

            cp -R ./scaffolding/api/name.api.js ./api/$name.api.js
            echo "Created api $name success."
            break
            ;;
        "cancel")
            break
            ;;
        *) echo "invalid option $REPLY"
        ;;
    esac
done
