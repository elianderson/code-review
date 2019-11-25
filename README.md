# _Code Review 6_
#### _Doctor Lookup_
****************
## _November 22, 2019_
****************
#### _By: Joann Carter_
***************
# _Description_
##### This is a webpage that uses data from BetterDoctor API. It allows user to enter a condition and receive a list of doctors in the Portland area.
#  _Specification Chart_
| Behavior  | Input  | Output  |
|--------------|-----------|-----------|
|takes in user input and returns name|"sore throat "| "Doctor Name"|
|takes user name search and returns list of names that match search criteria| "John Doe" | List of doctors names |
| displays info about doctor |"John Doe"|  first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.|
|catches API errors|404 error|'API error'|
|the application should return a notification that states that no doctors meet the criteria|"apple"| "please enter a different name"|
******************
# _Technology Used_
* API...
* Javascript
* Webpack
* MDN
* Postman
*******
###### _Licensing_
MIT public
