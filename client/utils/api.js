import 'whatwg-fetch';



async function request({ url, data, params = {} }) {
  try {
    const response = await fetch(url, {
      credentials: 'omit',
      // credentials: 'include'    //added by patrick to handle cors
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*', //added by patrick to handle cors
        // 'Access-Control-Allow-Credentials': true //added by patrick to handle cors
      },
      body: data ? ((data instanceof FormData) ? data : JSON.stringify(data)) : undefined,
      ...params
    })
    const contentType = response.headers.get('content-type');
    console.log('body is ', response.body);
    console.log('response code is', response.status);

    if (response.status < 200 || response.status >= 400) {
      const error = Error('API Error');
      error.response = response;
      throw error;
    }

    if (response.status === 200 && contentType.indexOf('application/json') !== -1) {
      return await response.json();
    }
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
    window.alert(JSON.stringify(await err.response.json()));
    throw  err;
  }
}

export function get(url) {
  return request({ url });
}

export function post(url, data) {
  return request({ url, data, params: { method: 'post' } });
}

export function del(url) {
  return request({ url, params: { method: 'delete' } });
}
