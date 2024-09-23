const handleError = (res, error, errorRaw) => {
    if (errorRaw) console.log(errorRaw);
    res.status(500);
    res.send({ error });
};

export { handleError };