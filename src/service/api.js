const API_URI = 'https://file-sharing-backend-1-xbgm.onrender.com';

export const uploadFile = async (data) => {
    try {
        const response = await fetch(`${API_URI}/upload`, {
            method: 'POST',
            body: data,  // assuming 'data' is FormData or similar
            headers: {
                // Optional: Add headers if needed (e.g., for JSON data or authentication)
                // 'Content-Type': 'application/json', // Uncomment if sending JSON
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const responseData = await response.json(); // Assuming the response is JSON
        return responseData;
    } catch (error) {
        console.log('Error while calling the API', error.message);
    }
};
