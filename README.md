# linkedin-creep

Step 1. 
  make a password.js file. In it put

  password = "yourpassword";

  module.exports = password;
  
Step 2.
   .type("input#login-email", "anthonytxie@gmail.com") --- change this to your own email in add-script.js
   .type("input#login-email", "leyoncorp@gmail.com") ---- change this to your email in scraper-async.js


Step 3. 
 
  In scraper-async.js modify the query parameters to the keywords you want to search for
  
 `https://www.linkedin.com/search/results/index/?keywords=crypto&origin=GLOBAL_SEARCH_HEADER&page=${i}`

  Run scraper-async.js first. This will output the LinkedIn profiles into linkedin-profiles.json file. 
  
  Then use some sort of json to csv to parse only the profiles and add it to an array to email-list.js
  
  After you got email-list.js ready to go....

  
Step 4.
  Run add-script.js I've set it to 
  
  var i = 0; i <= 200; i++
  
  I'm worried I will get banned after 200 adds. Just change this to 200 to 400 etc. 
    
    
