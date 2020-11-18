#!/bin/bash

PS3='Please enter your option: '
options=("page" "component" "api" "cancel")
select opt in "${options[@]}"
do
    case $opt in
        "component")
            option='component'
            
            echo "Component name:"
            read name
            
            echo "Component path:"
            read path

            if [ -z path ]; then
              echo "Path default is ./components/..."
            fi

            DIR="./components$path"

            if [ ! -d "$DIR" ]; then
              echo "mkdir ${DIR}..."
              mkdir DIR
            fi

            # Create page
            echo "Creating component $name..."
            cp -R ./scaffolding/page ./components/$path/$name
            echo "Created component $name success."

            echo "Creating scss $name..."
            FILE=./assets/scss/components/$path/$name.scss
            if [ -f "$FILE" ]; then
              echo "$FILE exists."
              exit 1 
            fi
            touch FILE
            echo "Created scss $name success."

            search="__name__"

            replace=`echo "$name" | perl -pe 's/(^|_| |-)./uc($&)/ge;s/ |-|_//g'`
            
            find $DIR/$name -type f -exec sed -i '' -e "s/$search/$replace/" {} \;

            break
            ;;
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

            search="__name__"

            replace=`echo "$name" | perl -pe 's/(^|_| |-)./uc($&)/ge;s/ |-|_//g'`
            
            find ./pages/$name -type f -exec sed -i '' -e "s/$search/$replace/" {} \;

            break
            ;;
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
