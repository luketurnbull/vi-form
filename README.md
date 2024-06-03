# V.I MUI Form

Deployed to: https://vi-form.vercel.app/

# Run instructions

run `pnpm install`  
run `pnpm dev`

# TODO:

[x] - Create initial project and delete original styles  
[x] - Deploy to vercel  
[x] - Install MUI

Using create-react-app or similar as a base - create a react Material UI
form component that inherits an array of form input props.
https://mui.com/material-ui/getting-started/installation/

[x] - Create component folder divided into ATOMIC designs
[x] - Create Initial Text Input component
[x] - Install react-hook-form
[x] - Create initial form component
[x] - Create array of form input props

The types of inputs required for this reusable component are:
text - text input
email - text input
phone - text input, number only?
postcode - text input, number only- max 4 chars?
select - select
checkbox - checkbox - assuming this is a single checkbox and not a group

[x] - Create text input  
[x] - Add text input to form  
[x] - Add validation message inside text input  
[x] - Add validation on blur

These inputs should have validation and you should also note in the
design the required fields \*.

[x] - Create Checkbox molecule  
[ ] - Move submit button into atoms  
[ ] - Create Select input molecule  
[ ] - Add more validation besides required  
[ ] - Add a prop to know if the input should be half the size of the form

Name - maxlength and minlength?  
Email - email regex  
Phone - phone validation Numbers and (+) ?  
Postcode - Numbers, max 4?

Once the form is valid and the user hits submit, print out the JSON
object below the submit button.

[ ] - Move on submit outside of form so it can be reused  
[ ] - Move

# Instructions:

## VI Test

You may use form validation libraries and other libraries at your choice
for this test.
