# CSC 210 
## Assignment - JavaScript and the Document Object Model
### Assignment Duration: One Week
### Available points: 10 + 2 Bonus

For this assignment you will be using JavaScript to dynamically manipulate content on HTML pages.

# Requirements
### We will be creating a small car make/model finder using cascading drop-down elements.

## HTML
Start with a new, basic HTML file *index.html*.  Nothing crazy here, but it should contain a body and that is all.  We are building the entire DOM via JavaScript for this one.

## CSS
As needed, ensure you have resonably pleasing styles in your application.

## JavaScript
Create a file called *cars.js* and reference it from your *index.html* page.  This is where all of your code will go.

* Data
  * You will need to create a data structure to hold several dependent attributes for cars, think about using *arrays* and/or *objects* for this.  This step is important
  * Example data heirarchy: Make -> Model -> Trim
  * Honda -> CR-V -> EX-L
  * Optionally add color if you are feeling ambitious!
* Display
  * You will need to create an initial drop-down element *select* that displays all available makes (honda, chevy, toyota, bmw, etc.)
  * Upon changing the selection of your first drop-down, you must dynamically create a second drop-down with a filtered/related list of models that fit within that Make
    * Ex: If Chevy was selected, then I should see Camaro, Corvette, etc.
  * Repeat this again once a model has been chosen to display available trims or colors
  * Once those have been selected, display a picture and some information about the selected car.  
* Cleanup
  * If someone goes BACK and changes a parent selection, you should handle how the children behave.  
    * Ex: I have selected Chevy -> Camaro, but then I decide to pick BMW, the Camaro box should now be filtered (can also be recreated/replaced) to only show BMWs

# Bonus (+2)
 Order Car
  * Once the series of steps have been completed, the user should be able to press a button which will create an email to some fake email address (don't spam anyone) with the details of the car in it that were selected, as if you were reaching out to inquire about the car to a dealership.
  * The selection data should be in the body of the email and the subject should also have meaningful dynamic content as well
  * You may want a form to collect this data for the email

# Submission
Check-in your code to your personal repository for this assignment.
