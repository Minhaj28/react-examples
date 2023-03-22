export const authenticate = ({email, password}) => {
    if(['aaa@a.com','bbb@b.com'].includes(email) && password === '1234'){
        return{
            message: 'login successful',
        }
    }
    throw new Error('invalid credential');
}