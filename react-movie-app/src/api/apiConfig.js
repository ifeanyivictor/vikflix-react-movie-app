const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: "65712c752a999cdb5629d9a85ac34af1",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;