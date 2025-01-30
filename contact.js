const SUPABASE_URL = "https://wofbczrmolboezbgsdyh.supabase.co";  // Replace with your Supabase URL
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvZmJjenJtb2xib2V6YmdzZHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgyMTE2MzksImV4cCI6MjA1Mzc4NzYzOX0.7BKQmz7_S6K12uUGUeeQBbTwExyyxmsclS5C_zYsFTQ";  // Replace with your Supabase Anon Key

async function submitForm(event) {
    event.preventDefault();  // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate input
    if (!name || !email || !message) {
        document.getElementById("responseMessage").textContent = "Please fill in all fields.";
        return;
    }

    const { createClient } = supabase;
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const { data, error } = await supabaseClient
        .from("contact_messages")
        .insert([{ name, email, message }]);

    if (error) {
        console.error("Error:", error);
        document.getElementById("responseMessage").textContent = "Error submitting form. Try again.";
    } else {
        document.getElementById("responseMessage").textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset();  // Clear form
    }
}

document.getElementById("contactForm").addEventListener("submit", submitForm);
