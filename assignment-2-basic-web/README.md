# CSC 210 - Assignment-2-Basic-Web

### Assignment Duration: One Week
### Available points: 10 + 2 Bonus

For this assignment you will be getting familiar with HTML and CSS.

You will be using what we have learned in class, the examples we went through, and some initiative on your end to find the appropriate tags to display content appropriately to meet the requirements.  Read through the entire assignment before starting, since knowing your CSS requirements will prevent rework.

# Requirements
### We will be building a basic shell for an e-commerce store front.  Your site will consist of the following technical requirements:
## HTML
* Create a series of three (3) static HTML pages that are for the shell of your site for this assignment
  * **Page 1: index.html**
    * This page will include
      * A title for the web page which must be in the *head* section of your document (should exist in all pages)
      * A body
      * A welcome message using the appropriate markup (h1, h2, etc.)
      * Two links to the other html pages outlined in this assignment.  You should be able to get to any of the three pages from any of them.
  * **Page 2: items.html**
    * This page should include the title and nav links from the other pages as well as...
    * A *list* of *5* items of your choosing.  You can sell anything reasonable and easy enough to find free/legal images from the internet.
      * The list should share all of the same markup styles and look uniform
      * Each item should contain an
        * Item Name
        * Item Description
        * Item Image - Bring the file down locally and reference it with a relative path.  Do not reference files that are hosted on the internet at this time.
  * **Page 3: about.html**
    * This page should include the title and nav links from the other pages as well as...
    * Two clearly defined sections of your page.  Use *div* tags and not *tables*.  *Tables are for tabular data!*
    * A photo of yourself
    * Your contact information (doesn't have to be real information)
      * The phone number you use should be clickable and should allow the user to call *555-555-5555*  Do not put your real phone number in.
    * Some content about your site and what products you have to offer.  To get ideas, look on the internet at other company's about pages, just come up with your own content however.

## CSS
* styles.css
  * Add a reference to styles.css to each of your html pages using the *link* tag
  * Override whatever heading *h* tag you used to apply some custom styling to it.  Change the font style and color.
  * Style your links *a tags* to have a rule for visited links to change from the default style.  Change the color of the links to show your work.
  * Define a common styling ruleset for each item on your items page to adhere to.  Each item should have an image of similar size on the screen, the descriptions and item names should also look the same between images.
*  Override any global styles from your styles.css file where necessary either in the *head* of a page using *style tags* or inline.  Have good reason for overriding styles inline.

# Bonus (+2 Pts)
Learn about and utilize **Bootstrap** https://getbootstrap.com/

You should still have a Styles.css file with your global styles, but use containers from the Bootstrap documentation to achieve some more elegant styling.

Explore themes.  Beyond global CSS are the ability to create themes.  While not necessary for this course, check out how Bootstrap can help developers take advantage of pre-built themes, or make your own.

# Submission
Check-in your code to your personal repository for this assignment.
