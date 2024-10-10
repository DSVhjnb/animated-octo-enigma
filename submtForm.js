submitForm.js. const handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ message: 'Method Not Allowed' }),
        };
    }

    const data = JSON.parse(event.body);
    
    // Here you can handle the data, e.g., save it to a database
    console.log(data); // Log the data for now

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form submitted successfully!' }),
    };
};

exports.handler = handler;