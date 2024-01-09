export const runtime = 'experimental-edge' // 'nodejs' (default) | 'edge'



import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: req => !req.url.includes('/gallery')
})
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};