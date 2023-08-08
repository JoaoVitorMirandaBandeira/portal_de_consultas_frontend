import { APP_ROUTER } from "@/constants/appRouter";

const checkIsPublicRouter = (path: string) => {
    const appRouter = Object.values(APP_ROUTER.public);
    const routeNames = appRouter.map(route => route.name);
    return routeNames.includes(path);
}

export default checkIsPublicRouter