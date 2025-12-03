exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const response = await fetch("https://business-api.tiktok.com/open_api/v1.3/event/track/", {
      method: "POST",
      headers: {
        "Access-Token": "df349851296e7145f67406e2558c06c72b4ad2e9",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        result: result
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message
      })
    };
  }
};
