# JOI validation in NodeJs and ExpressJs
Assume you’re working on an endpoint that expects user data such as – username, age, address, pin code, state, and phone number. Consider a user entering numeric data for the username by mistake when you’re expecting alphabetic data; a user entering an invalid pin code or birthdate for their respective fields when you’re expecting the data in a particular format. You don’t wish to make undesirable data! So, you can go for Data Validation to make sure that the data you receive is in a proper format. And for validating your data, you can either choose a manual way of coding the whole logic or use a validation library/package.

Joi is the most famous, efficient, and widely used package for object schema descriptions and validation. Joi allows the developers to build the Javascript blueprints and make sure that the application accepts the accurately formatted data. Integrating Joi with Express.js simplifies the validation process, ensuring data integrity with minimal code.

### Here are some of the advantages of Joi-

* Easy to implement and easy to learn.
* Widely accepted and well-known package for data validation.
* Supports validation based on the schema.

# Usage
#### 1. Install JOI:
```npm install joi
```
#### 2. Define Schema:
create a Joi schema describing the expected structure and validation rules for user date/payload
* Username: Alphabetic characters only.
* Age: Numeric value within a specified range.
* Address: String
* Pin Code: Numneric value with a specific format.
* State: String
* Phone Number: Numeric value with a specific format.
#### 3. Validate Data:
Use the Joi schema to validate incoming user data or payload. Handle validation errors gracefully, providing clear feedback to users.

Implementing data validation using Joi in Node.js and Express.js applications enhances data reliability and security. Prevents undesirable data from entering the system or user data.
