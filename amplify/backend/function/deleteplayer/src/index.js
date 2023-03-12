import { API } from 'aws-amplify';

exports.handler = async (event) => {
  const { id, name } = event;
  try {
    const response = await API.get('deleteplayer', `/${id}`);
    console.log(response);
    console.log('Name: ', name);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Player deleted successfully' })
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to delete player' })
    };
  }
};