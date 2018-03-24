const REGISTER = ({ user_db }) => {

    return (req, res, next) => {

        let errorMessage = 'Failed to register: ';

        if (('undefined' === typeof req.body) || ('undefined' === typeof req.body.email) ||
            ('undefined' === typeof req.body.password)) {

            errorMessage += 'Form data is missing!';
            console.log(errorMessage);
            res.redirect('/register');
            return next();

        }

        user_db.addUser({
            id: Math.floor((Math.random() * 1000000) + 1),
            email: req.body.email,
            password: req.body.password
        });

        res.redirect('/');
        return next();

    };

};

module.exports = REGISTER;