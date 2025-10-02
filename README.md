# Unit Converter
A simple node.js project that converts between different units (lenght,weight,distance,temperature etc). It allows users to easily select the unit of conversion  or input values without hassle. 
## Features
1. Convert between multiple units of length,weight, temperature, distance etc.
2. User-friendly web interface for input and results.
 3. Techstack
- CSS and HTML (for frontend)
- Node js and JavaScript ( backend)
    
4. light weight and fast.

## Project structure
unit-converter/
│── node_modules/        # Installed dependencies

│── README.md            # Project documentation

│── alp2.jpg             # Project image ( used in frontend)

│── frontend.js          # Handles frontend logic (interaction with UI)

│── group6formula.js     # Contains conversion formulas

│── index.html           # Main frontend page

│── ourconverters.js     # Main converter logic

│── package.json         # Project metadata and dependencies

│── package-lock.json    # Dependency lock file

│── style.css            # Styling for frontend
 

 ## 📑 Codebase Documentation

index.html → Frontend UI (dropdowns, input, result fields).

style.css → Provides styling.

frontend.js → Connects the frontend with conversion logic.

group6formula.js → Contains conversion formulas (e.g., km → mi).

ourconverters.js → Organizes and exports conversion functions.

package.json → Defines project name, version, dependencies, and scripts.

 ## API Documentation
 1. Convert units
 - Endpoint: **POST**/convert
 -  Request

 json

{

"from": "km",

   "to": "mi",

"value": 10

}

- Response

  json

  {

   "result": 6.21

  }
  
## Installation 
#### For end users 
👉 [Click here to use the Unit Converter](https://group6-1.onrender.com)

That’s it! Just click the link above and start converting.


#### 🛠️ For Developers
 📦 Installation
1. Clone the repository:
   ```bash
   https://github.com/Chillguy234/MINI-PROJECT.git
2. Open the folder.
3. Locate and open **index.html**

## Contribution for developers
 We welcome contributions from developers.To ensure this we have provided a safe step by step process to create an avenue for contribution. 
 1. Fork the repository
 2. Create your feature 
git checkout -b feature-name
3. Commit your changes 
git commit -m "Add feature"
4. Push your  branch to your fork
git push origin feature-name
 5. Open a pull request ;
  - Go to your fork on GitHub.
- Click **compare&pull** request.
- Submit your changes for review.

 #### Group 6 members that collaborated for the project;
 
1.  Afolayan Boluwatife 

2.  Daniel Echendu 

3. Chukwuejekwu Joy

- They  worked on;
Groupformula.js,
Ourconverter.js,
Package-lock.js,
Package.json.


 4. David Joseph 

 5.  Chukwuebuka Uche 

 - They both worked on;
index.html and style.css

 
 6. Uche Emerald;

  - ReadMe file




