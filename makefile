create_screen :
	mkdir ./src/screens/$(SCREEN_NAME)
	touch ./src/screens/$(SCREEN_NAME)/$(SCREEN_NAME)Screen.tsx
	touch ./src/screens/$(SCREEN_NAME)/styles.ts
	touch ./src/screens/$(SCREEN_NAME)/types.ts
	touch ./src/screens/$(SCREEN_NAME)/use$(SCREEN_NAME).ts

create_navigator :
	mkdir ./src/navigation/$(PATH)/$(NAVIGATOR)
	touch ./src/navigation/$(PATH)/$(NAVIGATOR)/index.tsx
	touch ./src/navigation/$(PATH)/$(NAVIGATOR)/types.ts

create_component :
	mkdir ./src/components/$(TYPE)/$(NAME)
	touch ./src/components/$(TYPE)/$(NAME)/index.tsx
	touch ./src/components/$(TYPE)/$(NAME)/types.ts
	touch ./src/components/$(TYPE)/$(NAME)/styles.js

create_screen_component :
	mkdir ./src/screens/$(SCR_PATH)/$(SCR_NAME)/components/$(COM_NAME)
	touch ./src/screens/$(SCR_PATH)/$(SCR_NAME)/components/$(COM_NAME)/index.tsx
	touch ./src/screens/$(SCR_PATH)/$(SCR_NAME)/components/$(COM_NAME)/types.ts
	touch ./src/screens/$(SCR_PATH)/$(SCR_NAME)/components/$(COM_NAME)/styles.ts

init_file_sys :
	mkdir src
	mkdir src/api
	mkdir src/assets
	mkdir src/components
	mkdir src/screens
	mkdir src/navigation
	mkdir src/navigation/routes
	mkdir src/domain

init-eslint-config:
	npm i --save-dev eslint
	./node_modules/.bin/eslint --init


