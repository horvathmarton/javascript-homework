const RECIPIE_DELETER = ({ recipie_db }) => {

    if ('undefined' === typeof recipie_db) {
        throw Error('No recipie database specified');
    }

    return (req, res, next) => {

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.params.recipie_id)) {

            req.session.alert_danger = 'Form data is missing!';
            res.redirect('/');

        }

        recipie_db.remove({ _id: req.params.recipie_id }, () => {});
        return next();

    };

};

module.exports = RECIPIE_DELETER;
