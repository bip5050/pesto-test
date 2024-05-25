
const ROOT_SERVER_URL_DEV = "http://localhost:3000";

const callApi = () => {
    const request = (method) => {
        return (url, body) => {
            const requestOptions = {
                method,
                // headers: authHeader(url),
            }

            if (body) {
                requestOptions["headers"] = {}
                requestOptions.headers["Content-Type"] = "application/json";
                requestOptions.body = JSON.stringify(body);
            }

            return fetch(`${ROOT_SERVER_URL_DEV}${url}`, requestOptions).then(handleResponse);
        };
    };

    //   

    const handleResponse = async (response) => {
        console.log("responseee",response)
        const isJson = response?.headers
            ?.get("content-type")
            ?.includes("application/json");

        const data = isJson ? await response.json() : null;
        data.status = response.status;

        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && (data.error || data.message)) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    };

    return {
        get: request("GET"),
        post: request("POST"),
        put: request("PUT"),
        del: request("DELETE"),
    };
};

export default callApi;
