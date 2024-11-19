# micmono
Một project sử dụng Micro Frontend và Monorepo.
- Cấu trúc project: 1 shell app và 2 mini app.
- Framework sử dụng:
  + shell app: angular
  + mini app 1: angular
  + mini app 2: react
- Sử dụng Module Federation (Webpack 5) để kết nối các app.

- Build cả 3 app: nx run-many --target=build --all
- Khởi động shell app: 
    cd org/apps/shell
    nx serve shell
- Khởi động angular mini app: 
    cd org/apps/mini-angular
    nx serve mini-angular
- Khởi động react mini app: 
    cd org/apps/mini-react
    nx serve mini-react

