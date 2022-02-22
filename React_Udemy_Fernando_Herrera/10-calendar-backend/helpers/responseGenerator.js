const generateGeneric = (res, code, msg) => {
    const resp = res.status(code).json({
        ok: (code >= 200 && code < 300) ? true : false,
        msg
    });
    return resp;
};

module.exports = {
    generateGeneric
};