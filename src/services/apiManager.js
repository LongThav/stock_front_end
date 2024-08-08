const baseUrl = 'http://3.106.139.121/api/'; // Replace with your base URL

const ApiManager = {
    // Function to get the token from localStorage
    getToken: () => localStorage.getItem('token'),

    // Function to get the refresh token from localStorage
    getRefreshToken: () => localStorage.getItem('refreshToken'),

    // Function to remove tokens from localStorage and redirect to login
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/auth/signin-1'; // Redirect to login page
    },

    // Function to refresh the token
    refreshToken: async() => {
        try {
            const refreshToken = ApiManager.getRefreshToken();
            const response = await fetch(`${baseUrl}auth/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Save new token
            localStorage.setItem('refreshToken', data.refreshToken); // Save new refresh token
            return data.token;
        } catch (error) {
            console.error("Token refresh error:", error);
            ApiManager.logout(); // Logout user if token refresh fails
            throw error;
        }
    },

    // Handle fetch requests with token management
    fetch: async(url, options = {}) => {
        let token = ApiManager.getToken(); // Retrieve token from localStorage

        try {
            let response = await fetch(url, {
                ...options,
                headers: {
                    'Content-Type': 'application/json',
                    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
                    ...options.headers,
                },
            });

            if (response.status === 401) { // Token expired or unauthorized
                // Attempt to refresh the token
                token = await ApiManager.refreshToken();

                // Retry the original request with the new token
                response = await fetch(url, {
                    ...options,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        ...options.headers,
                    },
                });

                if (response.status === 401) {
                    // If still unauthorized, logout
                    ApiManager.logout();
                }
            }

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Request error:", error);
            throw error;
        }
    },

    get: async(end_point) => {
        try {
            return await ApiManager.fetch(`${baseUrl}${end_point}`, { method: 'GET' });
        } catch (error) {
            console.error("GET request error:", error);
            throw error;
        }
    },

    post: async(end_point, body) => {
        try {
            return await ApiManager.fetch(`${baseUrl}${end_point}`, {
                method: 'POST',
                body: JSON.stringify(body),
            });
        } catch (error) {
            console.error("POST request error:", error);
            throw error;
        }
    },

    put: async(end_point, data) => {
        try {
            return await ApiManager.fetch(`${baseUrl}${end_point}`, {
                method: 'PUT',
                body: JSON.stringify(data),
            });
        } catch (error) {
            console.error("PUT request error:", error);
            throw error;
        }
    },

    delete: async(end_point) => {
        try {
            return await ApiManager.fetch(`${baseUrl}${end_point}`, { method: 'DELETE' });
        } catch (error) {
            console.error("DELETE request error:", error);
            throw error;
        }
    },
};

export default ApiManager;