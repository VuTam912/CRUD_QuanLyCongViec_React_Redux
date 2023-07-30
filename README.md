Redux : Xu ly tac vụ xem ds, CRUD,...xu ly trong action va reducer folder
không cần phải thông qua app.js. để xử lý event duoc thoa tac trong component
-Install redux in Terminal.
syntax: npm install redux react-redux --save
-Create a 3 folder(action,constants, reducers) in folder src
-To contain all files related to Redux
N: Google Search: Connect react-redux
Note:
Remember import createStore from redux in src/index.js

--Redux--
Khai bao import { connect } from 'react-redux'; trong component con hoac cha
code o cuoi ham render cua component :
+mapStateToProps : duy data
+mapDispatchToProps : su ly cac action (su ly su kien)

=> export default connect(mapStateToProps,mapDispatchToProps)(...);

--- ReduxDevTools ---
Cai Redux DevTools cho chrome va lam huong dan theo o link duoi.
https://github.com/reduxjs/redux-devtools/tree/main/extension#installation
--
