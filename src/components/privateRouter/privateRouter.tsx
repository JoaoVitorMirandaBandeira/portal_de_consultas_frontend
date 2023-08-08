import { APP_ROUTER } from '@/constants/appRouter';
import { checkIsAutenticated } from '@/utils/checkIsAutenticated';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
type PrivateRouterProps ={
    children:ReactNode;
}
const PrivateRouter = ({children}: PrivateRouterProps) =>{
    const {push} = useRouter()

    const isAutenticated = checkIsAutenticated()

    useEffect(() =>{
        if(!isAutenticated){
            push(APP_ROUTER.public.login.name)
        }
    },[isAutenticated,push])

    return (
        <>
            {!isAutenticated && null }
            {isAutenticated && children }
        </>

    )
}

export default PrivateRouter;