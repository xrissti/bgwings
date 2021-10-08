Feature: BGwings visiting

I want to open main page

@automated
Scenario: Opening the main page
  Given the user navigates to the "Main" page
  Then the user sees "BGwings" in the title

@automated
Scenario: Opening the Gallery page
  Given the user navigates to the "Gallery" page
  Then the user sees "BGwings" in the title

@automated
Scenario: Opening the About me page
  Given the user navigates to the "About me" page
  Then the user sees "BGwings" in the title

@automated
Scenario: En language is selected by default
  Given the user navigates to the "About me" page
  Then the "EN" is selected

@automated
Scenario: On hover the language drop down expands
  Given the user navigates to the "About me" page
  Then on hover the current language then the drop down with "BG" language expands

@automated
Scenario: The user can change the language
  Given the user navigates to the "About me" page
  When the user clicks "BG" in language drop down
  Then the "BG" is selected

@automated
Scenario: All menus are present in the main bar
  Given the user navigates to the "Main" page
  Then the all menus are present
  | name    |
	| HOME    |
	| GALLERY |
	| ABOUT ME|

@automated
Scenario: The user can open a gallery
  Given the user navigates to the "Gallery" page
  When the user clicks "2021" in gallery drop down
  Then the "Gallery" page with the "2021" gallery is displayed

@automated
Scenario: The user can open an event in the gallery
  Given the user navigates to the "Gallery" page
  And the user clicks "2016" in gallery drop down
  And the "Gallery" page with the "2016" gallery is displayed
  When the user clicks the "AN-2 IN 2016" event photo
  Then the "AN-2 IN 2016" events photos should be displayed

@automated
Scenario: The user can switch the pages
  Given the user navigates to the "Gallery" page
  And the user clicks "2016" in gallery drop down
  And the "Gallery" page with the "2016" gallery is displayed
  And the user clicks the "AN-2 IN 2016" event photo
  And the "AN-2 IN 2016" events photos should be displayed
  And the user scrolls to the "bottom" of the page
  When the user clicks the "Next" arrow
  Then the "2" page is displayed
  And the user clicks the "Next" arrow
  Then the "3" page is displayed

@automated
Scenario: The Back arrow returns to the previous page
  Given the user navigates to the "Gallery" page
  And the user clicks "2016" in gallery drop down
  And the "Gallery" page with the "2016" gallery is displayed
  And the user clicks the "AN-2 IN 2016" event photo
  And the "AN-2 IN 2016" events photos should be displayed
  And the user scrolls to the "bottom" of the page
  And the user clicks the "Last page" arrow
  And the "3" page is displayed
  When the user clicks the "Back" button
  Then the "1" page is displayed