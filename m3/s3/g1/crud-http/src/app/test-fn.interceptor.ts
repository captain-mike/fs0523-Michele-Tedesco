import { HttpInterceptorFn } from '@angular/common/http';

export const testFnInterceptor: HttpInterceptorFn = (req, next) => {
  let newReq = req.clone({
    headers: req.headers.append('Authentication','lkfhkjdsfhskjldfhakjls')
  })

  return next(newReq);
};
