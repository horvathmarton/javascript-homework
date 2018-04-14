const LOGIN = ({ user_db }) => {

    if ('undefined' === typeof user_db) {
        throw Error('No user database specified');
    }

    return (req, res, next) => {

        let errorMessage = 'Failed to log in: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password)) {

            errorMessage += 'Form data is missing!';
            res.locals.alert_danger = errorMessage;
            res.redirect('/login');

        }

        user_db.findOne({
            email: req.body.email,
            password: req.session.password
        }, (err, result) => {

            if (err || !result) {
                req.session.alert_danger = 'Wrong username or password!';
                res.redirect('/login');
            }

            req.session.user = user;
            req.session.alert_success = 'Logged in successfully!';
            return next();

        });

    };

};

module.exports = LOGIN;