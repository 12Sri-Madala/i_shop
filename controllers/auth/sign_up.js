const validation = require('../../helpers/validation')

module.exports = (req, resp) => {
    const { body: { firstName, lastName, email, password} } = req;

    try {
        const errors = [];

        if (!firstName){
            errors.push('Missing first name');
        } else if (!validation.name(firstName)){
            errors.push('First name can only contain a-z, no special characters allowed')
        }

        if (!lastName){
            errors.push('Missing last name');
        } else if (!validation.name(lastName)){
            errors.push('Last name can only contain a-z, no special characters allowed')
        }

        if(!email){
            errors.push('Missing email addrss');
        } else if(!validation.email(email)){
            errors.push('Invalid email address given. Must be in the following format: example@gmail.com')
        }

        if(!password){
            errors.push('Missing password')
        } else if(!validation.password(password)){
            errors.push('Invalid password. Must contain upper and lower case letters, numbers, special characters, and be at least 8 characters long')
        }

        if(errors.length){
            return resp.status(422).send({
                success: false,
                errors
            })
        }

        resp.send({
            success: true,
            message: 'This is a sign up endpoint'
        });
    } catch(err){
        console.log('Sign Up Error:', err);
        
        resp.status(500).send('Sign Up Failed');
    }
}