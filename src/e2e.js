//const puppeteer = require("puppeteer");

import puppeteer from "puppeteer"

(async()=>{
        const browser = await puppeteer.launch(
            { headless:false,
              args:["--window-size:1920,1080"]

        });  // this will launch a browser for us in headless or headful mode

        const page = await browser.newPage()  // this will open a newtab inside the browser

        await page.goto("http://namastedev.com/") // this will go to the URL on th enew tab

        console.log("webpage loaded")

        await page.setViewport({width:"1920", height:"1080"});
})();
