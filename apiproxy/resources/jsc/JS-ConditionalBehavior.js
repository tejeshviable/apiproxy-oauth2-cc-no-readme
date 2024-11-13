 // js/ConditionalBehavior.js

// Retrieve the user role from the access token
var userRole = context.getVariable("oauthv2accesstoken.OAuthV2-VerifyAccessToken.user_role");

if (userRole === "admin") {
    // Logic for admin users
    context.setVariable("response.content", JSON.stringify({message: "Welcome, Admin!"}));
} else if (userRole === "user") {
    // Logic for regular users
    context.setVariable("response.content", JSON.stringify({message: "Welcome, User!"}));
} else {
    // Default logic for unknown roles
    context.setVariable("response.content", JSON.stringify({message: "Access Denied!"}));
}