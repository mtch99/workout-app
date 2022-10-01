create_screen :
	mkdir ./src/screens/$(SCREEN_NAME)
	touch ./src/screens/$(SCREEN_NAME)/$(SCREEN_NAME)Screen.tsx
	touch ./src/screens/$(SCREEN_NAME)/styles.ts
	touch ./src/screens/$(SCREEN_NAME)/types.ts
	touch ./src/screens/$(SCREEN_NAME)/use$(SCREEN_NAME).ts