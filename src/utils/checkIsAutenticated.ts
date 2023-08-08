import Cookies from 'js-cookie'

export const checkIsAutenticated = () => {
    const token = Cookies.get('Atentication')
    return token
}