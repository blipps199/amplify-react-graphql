

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    const id = event.pathParameters.id;
    
    console.log(id);
    
    return {
        statusCode: 200,
         headers: {
             "Access-Control-Allow-Origin": "*",
             "Access-Control-Allow-Headers": "*"
         }, 
        body: JSON.stringify({
          message: `Received ID: ${id}`
        })
    };
};
