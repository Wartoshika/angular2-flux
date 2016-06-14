import { bootstrap } from "@angular/platform-browser-dynamic";
import { enableProdMode } from '@angular/core';

import { App, APP_PROVIDERS } from "./app";

// prod mode?
if (process.env.ENV === 'production') {
  enableProdMode();
}


// app starten!
bootstrap(App, [
    ...APP_PROVIDERS
])
.catch((e: any) => console.error('bootstrap faulure: ', e))
.then(() => console.log("app start done"));