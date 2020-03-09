/**
 *
 * @param  {Array} userRouter 后台返回的用户权限json
 * @param  {Array} allRouter  所有动态路由的集合
 * @return {Array} realRoutes 过滤后的路由
 */
export function recursionRouter(userRouter = [], allRouter = []) {
    const realRoutes = [];
    allRouter.forEach((v) => {
        userRouter.forEach((item) => {
            if (item.name === v.meta.key) {
                if (item.children && item.children.length > 0) {
                    v.children = recursionRouter(item.children, v.children)
                }
                v.meta = {
                    ...item,
                    ...v.meta
                };
                realRoutes.push(v)
            }
        })
    })
    return realRoutes
}

