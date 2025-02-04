// Initialize Supabase
const SUPABASE_URL = "https://wofbczrmolboezbgsdyh.supabase.co";  
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZmJjenJtb2xib2V6YmdzZHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTE2MzksImV4cCI6MjA1Mzc4NzYzOX0.7BKQmz7_S6K12uUGUeeQBbTwExyyxmsclS5C_zYsFTQ"; // Replace with your actual anon key

// Check if supabase is available (for CDN users)
if (typeof createClient === "undefined") {
    console.error("Supabase SDK is not loaded. Make sure to include the CDN script.");
}

// Create a Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get the form element
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Insert data into the Supabase table
    const { data, error } = await supabase
        .from("contact_messages") // Ensure this table exists
        .insert([
            {
                name,
                email,
                phone,
                subject,
                message,
            }
        ]);

    // Handle the response
    if (error) {
        console.error("Error submitting form:", error.message);
        alert("There was an error submitting the form. Please try again.");
    } else {
        alert("Your message has been sent successfully!");
        form.reset(); // Reset the form fields
    }
});
