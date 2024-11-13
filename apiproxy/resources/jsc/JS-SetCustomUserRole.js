 // Fetch the user_role custom attribute from the developer context
var userRole = context.getVariable("developer.custom_user_role"); // Assuming it's set at the developer level

// Store it in a flow variable
context.setVariable("custom.custom_user_role", userRole || "default_role11"); // Set a default value if null

var userRole1 = context.getVariable("developer.custom_user_role") || "default_role";
context.setVariable("claim.user_role", userRole1);
context.setVariable("message.claim.user_role", userRole1);  // Add this line