export const askQuestion = async (question) => {
    try {
      const response = await fetch("http://localhost:5001/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        throw new Error(`API error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching from API:", error);
      return { answer: "Error fetching data from the server." };
    }
  };
  