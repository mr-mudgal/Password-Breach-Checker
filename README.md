# Password-Breach-Checker
Website URL: _I have stopped hosting the website, as AWS started charges, due to overusage of run-time beyond the free-trial allowed time._

This is a simple one-page website, created by Python **Django** Framework.  
It is used in order to tell the user whether their passwords have been leaked in a data breach or not.  
It uses the [haveibeenpwned](https://haveibeenpwned.com) API, to check for the results.  
We also use **mkcert** in order to run the project on ```https```. Although, since it is privately signed key, it still shows privacy issue, when opened. You can safely ignore the warning and choose to proceed and open the site.  
The project is hosted on an **AWS (Amazon Web Service) EC2 instance**, and used _Elastic IP_ to allocate a fix IP to the instance.  
WE **DO NOT COLLECT/STORE** ANY OF YOU DATA, AND RESPECT YOUR PRIVACY.
***
### Usage
_NOTE: WE **DO NOT STORE** ANY PASSWORD ENTERED BY THE USER. THE PASSWORD YOU ENTERED IS BEING ENCRYPTED BY '**SHA256**' METHOD USING HASHLIB LIBRARY& THEN IT IS USED FOR THE API REQUEST._
- To use the website, you just need to visit -> [here](https://bit.ly/pbc_RM) <-
- It would take you to the home page of a single-webpage website, which would look like below:
![image](https://github.com/mr-mudgal/Password-Breach-Checker/assets/100049039/693d7996-f0c9-4a51-a30e-6d575cf13939)
- Enter the password you want to check in the given white input field.
- Click the search database icon below of it for getting the ouput.
- If the password have NOT been found in the [haveibeenpwned](https://haveibeenpwned.com) database, the result message would be in green, like below:
![image](https://github.com/mr-mudgal/Password-Breach-Checker/assets/100049039/687247f8-1e06-4be9-86e3-47424b87bd2e)
- If the password have been found in the [haveibeenpwned](https://haveibeenpwned.com) database, the reuslt message would be in red mentioning the number of times it have been breached, like below:
![image](https://github.com/mr-mudgal/Password-Breach-Checker/assets/100049039/f211f30f-6afc-4a17-8a96-d2a070570da5)
- you can hover to the 'Usage' & 'About', the details.


Suggestion to search for more database, are welcome. To make suggestion, create an issue in this repository.

**Thank You**
<h2 align="right"><img src="https://github.com/mr-mudgal/Password-Breach-Checker/assets/100049039/dcf0239b-838f-41d9-b1c4-71df543ec07d" width="3%""><a href="https://github.com/mr-mudgal">@mr-mudgal</a></h2>
