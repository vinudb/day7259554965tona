export const getImages = async () => {
    const response = await fetch(`https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images/list`);
    if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        return data
    } else {
        throw new Error('Unable to add new rules')
    }
}

export const getImageDetails = async (id) => {
    const response = await fetch(`https://74k4rzrsqubz5ma3f-mock.stoplight-proxy.io/api/v1/images?id=${id}`);
    if (response.status === 200 || response.status === 201) {
        const data = await response.json();
        return data
    } else {
        throw new Error('Unable to add new rules')
    }
}


